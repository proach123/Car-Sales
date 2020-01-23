import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux'
import { edit } from '../actions/edit'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} edit={props.edit} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state =>{
  return {
    additionalFeatures: state.AppReducer.additionalFeatures
  }
}


export default connect(
  mapStateToProps,
  { edit}
)(AdditionalFeatures)