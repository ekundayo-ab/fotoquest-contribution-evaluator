import React from 'react'
import PropTypes from 'prop-types'

import RadioInput from './FormInputs/RadioInput'
import { SubmissionConsumer } from '../context';


const EVALUATION_OPTIONS = {
  APPROVED: "1",
  PHOTOS_REJECTION: "2",
  CLASSIFICATION_REJECTION: "3",
  LOCATION_REJECTION: "4",
  REJECTED: "9"
}

export default function EvaluationForm({ submissionId }) {
  const { APPROVED, PHOTOS_REJECTION, CLASSIFICATION_REJECTION, LOCATION_REJECTION, REJECTED } = EVALUATION_OPTIONS
  return (
    <SubmissionConsumer>
      {(value) => {
        return <form onSubmit={(event) => value.handleSubmit(event, submissionId)}>
          <h5 className="text-uppercase">Evaluate</h5>
          <div className="lead">
            <RadioInput
              checked={value.evaluationOptions === APPROVED}
              value={APPROVED}
              id="approved"
              name="evaluationOptions"
              labelText="approved"
              handleChange={value.handleChange}/>

            <RadioInput
              checked={value.evaluationOptions === PHOTOS_REJECTION}
              value={PHOTOS_REJECTION}
              id="photosRejection"
              name="evaluationOptions"
              labelText="rejected because of photos"
              required
              handleChange={value.handleChange}/>

            <RadioInput
              checked={value.evaluationOptions === CLASSIFICATION_REJECTION}
              value={CLASSIFICATION_REJECTION}
              id="classificationRejection"
              name="evaluationOptions"
              labelText="rejected because of classifications"
              handleChange={value.handleChange}/>

            <RadioInput
              checked={value.evaluationOptions === LOCATION_REJECTION}
              value={LOCATION_REJECTION}
              id="locationRejection"
              name="evaluationOptions"
              labelText="rejected because of location"
              handleChange={value.handleChange}/>

            <RadioInput
              checked={value.evaluationOptions === REJECTED}
              value={REJECTED}
              id="rejected"
              name="evaluationOptions"
              labelText="rejected"
              handleChange={value.handleChange}/>
          </div>
          {value.formError && <span className="text-danger">Please select evaluation</span>}

          <div className="form-group mt-2">
            <label htmlFor="comment" className="lead">Enter evaluation comments</label>
            <textarea
              className="form-control"
              name="comment"
              id="comment"
              rows="3"
              required
              value={value.comment}
              onChange={value.handleChange}></textarea>
          </div>

          <button type="submit" className="btn btn-success btn-lg btn-block">Submit</button>
        </form>
      }}
    </SubmissionConsumer>
  )
}

EvaluationForm.propTypes = {
  submissionId: PropTypes.string.isRequired
}
