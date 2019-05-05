import React from 'react'

export default function EvaluationForm() {
  return (
    <form>
      <h5 className="text-uppercase">Evaluate</h5>
      <div className="lead">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="evaluationOptions"
            id="accepted"
            value="option1"/>
          <label className="form-check-label" htmlFor="accepted">Accepted</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="evaluationOptions"
            id="classificationRejected"
            value="option2" />
          <label className="form-check-label" htmlFor="classificationRejected">Rejected because of classifications</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="evaluationOptions"
            id="locationRejected"
            value="option2" />
          <label className="form-check-label" htmlFor="locationRejected">Rejected because of location</label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="evaluationOptions"
            id="rejected"
            value="option2" />
          <label className="form-check-label" htmlFor="rejected">Rejected</label>
        </div>
      </div>

      <div className="form-group mt-2">
        <label htmlFor="evaluationComments" className="lead">Enter evaluation comments</label>
        <textarea className="form-control" id="evaluationComments" rows="3"></textarea>
      </div>

      <button type="button" className="btn btn-success btn-lg btn-block">Submit</button>
    </form>
  )
}
