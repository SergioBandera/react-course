import React from "react";
import { Media } from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

export const RenderLeader = ({leaders}) => {
  if (leaders.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (leaders.errMess) {
    return(
        <div className="container">
            <div className="row">            
                <h4>{leaders.errMess}</h4>
            </div>
        </div>
    );
}
else if (leaders.leaders != null)  
  return leaders.leaders.map((leader,i) => {
    return (
      <Fade in key={i}>

        <Media>
        <Media left>
          <Media object src={baseUrl + leader.image} />
        </Media>
        <Media list>
          <Media heading>
            <p>{leader.name} </p>
          </Media>
          <p> {leader.designation}</p>
          <p>{leader.description}</p>
        </Media>
      </Media>
      </Fade>
    );
  });
};
