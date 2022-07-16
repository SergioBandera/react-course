import React, { Component } from "react";

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes:null
        }
    }




    render() {
        const selectedDish = this.props.dishes;
        return (

            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {/* {this.renderDish(this.state.selectedDish)} */}
                </div>
            </div>
        );
    }
}
export default DishDetail;