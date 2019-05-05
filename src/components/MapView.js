import React from 'react'
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const MapView = ({ lat, lon }) => {
  return (
    <div className="row">
      <MapView.Container className="col-12 p-0">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }} //TODO: This should be in an environment file
          defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(lon) }}
          defaultZoom={11}
          options={(maps) => ({
            mapTypeId: maps.MapTypeId.ROADMAP,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            rotateControl: true,
            fullscreenControl: true
          })}>
        </GoogleMapReact>
      </MapView.Container>
    </div>
  )
};

MapView.Container = styled.div`
  width: 100%;
  height: 600px;

  &> div {
    position: inherit !important;
  }
`

MapView.propTypes = {
  lat: PropTypes.string.isRequired,
  lon: PropTypes.string.isRequired
}

export default MapView
