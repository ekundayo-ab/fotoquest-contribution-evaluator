import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'
import styled from 'styled-components'

const mapStyles = {
  width: '100%',
  height: '600px'
};

export const MapView = ({ lat, lon, google }) => {
  return (
    <div className="row">
      <MapView.Container className="col-12 p-0">
          <Map
            google={google}
            zoom={14}
            style={mapStyles}
            initialCenter={{ lat, lng: lon }}
          />
      </MapView.Container>
    </div>
  )
};

MapView.Container = styled.div`
  &> div {
    position: inherit !important;
  }
`

export default GoogleApiWrapper({
  //TODO: This should be in an environment file
  apiKey: "AIzaSyDqZbfR14FtoOm5RH2fF9rLKJnqn2mGOI0"
})(MapView)
