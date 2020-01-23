import React from 'react';
import {connect} from 'react-redux'
import { deleteFeature } from '../actions/edit'

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  // console.log(props, 'add features props')
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.id} feature={item} deleteFeature={props.deleteFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state =>{
  return {
    features: state.editReducer.car.features
  }
}


export default connect(
  mapStateToProps,
  {deleteFeature}
)(AddedFeatures)
