import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function PhotoView({ photos }) {
  return (
    <PhotoView.Container className="row">
      {
        photos.map(photo =>
          <div key={photo.direction} className="col-md-6 p-0">
            <div className="card">
              <img
                className="img-responsive card-img-top"
                src={photo.url}
                alt={photo.direction} />
              <span className="image-caption text-capitalize">{photo.direction}</span>
            </div>
          </div>
        )
      }
    </PhotoView.Container>
  )
}

PhotoView.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.shape({
    direction: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
}

PhotoView.Container = styled.div`
  span.image-caption.text-capitalize {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    color: white;
    font-weight: bold;
  }
`
