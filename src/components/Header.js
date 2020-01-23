import React from 'react';
import {connect} from 'react-redux'
import {edit} from '../actions/edit'

const Header = props => {
  console.log(props)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    name: state.editReducer.car.name,
    image: state.editReducer.car.image,
    price: state.editReducer.car.price
  }
}

export default connect(
  mapStateToProps,
  {edit}
  )(Header)
