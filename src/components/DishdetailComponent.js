import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({comments}) {
  console.log(comments)
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {comments ? (
          comments.map((coment, i) => {
            const fecha = new Date(coment.date);
            return (
              <li key={i} className="list-unstyled">
                <p>{coment.comment}</p>
                <p>
                  {"-- " +
                    coment.author +
                    " , " +
                    fecha.toString().slice(4, 15)}
                </p>
              </li>
            );
          })
        ) : (
          <div></div>
        )}
      </ul>
    </div>
  );
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>    
    );
  } else return <div></div>;
};

export default DishDetail;
