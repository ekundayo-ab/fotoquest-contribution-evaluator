import React from 'react'
import PropTypes from 'prop-types'

export default function SubmissionDetail({submission}) {
  const { location, platform, timestamp } = submission

  return (
    <React.Fragment>
      <h5 className="text-uppercase">Location</h5>
      <p className="lead">
        <span className="font-weight-bold text-capitalize">lat: </span> {location.lat} &nbsp;
        <span className="font-weight-bold text-capitalize">Lng: </span> {location.lat}
      </p>

      <h5 className="text-uppercase">Platform</h5>
      <p className="lead">
        <span className="font-weight-bold text-capitalize">app: </span> {platform.app} <br/>
        <span className="font-weight-bold text-capitalize">app version: </span> {platform.appversion} <br/>
        <span className="font-weight-bold text-capitalize">device: </span> {platform.device} <br/>
        <span className="font-weight-bold text-capitalize">os: </span> {platform.osversion}
      </p>

      <h5 className="text-uppercase">Time</h5>
      <p className="lead">{new Date(timestamp).toUTCString()}</p>
    </React.Fragment>
  )
}

SubmissionDetail.propTypes = {
  submission: PropTypes.shape({
    location: PropTypes.shape({
      lat: PropTypes.string,
      lon: PropTypes.string
    }),
    platform: PropTypes.shape({
      app: PropTypes.string,
      appversion: PropTypes.string,
      device: PropTypes.string,
      os: PropTypes.string
    }),
    timestamp: PropTypes.string
  }).isRequired
}
