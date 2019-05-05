import React from 'react'

export default function Sorter() {
  return (
    <React.Fragment>
      <p className="lead form-check-inline">Sort:</p>
      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sortOptions" id="newest" value="option1" />
        <label className="form-check-label text-capitalize lead font-weight-bold" htmlFor="newest">newest to oldest</label>
      </div>

      <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="sortOptions" id="oldest" value="option2" />
        <label className="form-check-label text-capitalize lead font-weight-bold" htmlFor="oldest">oldest to newest</label>
      </div>
    </React.Fragment>
  )
}
