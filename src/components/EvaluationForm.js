import React from 'react'
import PropTypes from 'prop-types'

import { SubmissionConsumer } from '../context';
import SelectInput from './FormInputs/SelectInput';

export default function EvaluationForm({ submissionId }) {
  return (
    <SubmissionConsumer>
      {(value) => {
        return <form onSubmit={(event) => value.handleSubmit(event, submissionId)}>
          <h5 className="text-uppercase">Evaluate</h5>
          <div className="lead">
            <SelectInput handleChange={value.handleChange}></SelectInput>
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
