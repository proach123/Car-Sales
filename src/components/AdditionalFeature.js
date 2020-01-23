import React from 'react';
import {connect} from 'react-redux'
import {AppActions} from '../actions/AppActions'
import {edit} from '../actions/edit'

const AdditionalFeature = props => {
  console.log()
  return (
    
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>{props.edit(props.feature)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    
  }
}


export default connect(
  mapStateToProps,
  {AppActions, edit}
)(AdditionalFeature)
