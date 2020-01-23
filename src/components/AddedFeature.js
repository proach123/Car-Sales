import React from 'react';
import {connect} from 'react-redux'
import {edit} from '../actions/edit'

const AddedFeature = props => {

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>{props.deleteFeature(props.feature)}}>X</button>
      {props.feature.name}
    </li>
  );
};



const mapStateToProps = state => {
  return {
    // feature: state.editReducer.car.feature
  }
}

export default connect(
  mapStateToProps,
  {edit}
  )(AddedFeature)

