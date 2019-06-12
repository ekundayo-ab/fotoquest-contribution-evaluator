import React from 'react'

export default function SelectInput(props) {
  const { handleChange } = props;
  return (
    <React.Fragment>
      <select className="form-control" name="evaluationOptions" id="" onChange={handleChange}>
        <option value="">--Please select an evaluation option--</option>
        <option value="approved">Approved</option>
        <option value="photosRejected">Rejected Because of Photos</option>
        <option value="classificationRejected">Rejected Because of Classifications</option>
        <option value="locationRejected">Rejected because of Location</option>
        <option value="rejected">Rejected</option>
      </select>
    </React.Fragment>
  )
}
