import React from 'react'
import styled from 'styled-components'

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

PhotoView.Container = styled.div`
  span.image-caption.text-capitalize {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    padding: 0.5rem;
    color: white;
    font-weight: bold;
  }
`
