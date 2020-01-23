import React from 'react';
import {connect} from 'react-redux'
import {AppActions} from '../actions/AppActions'

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapStateToProps = state =>{
  return {
    price: state.editReducer.car.price,
    additionalPrice: state.editReducer.additionalPrice
  }
}

export default connect(
  mapStateToProps,
  {},
)(Total)
