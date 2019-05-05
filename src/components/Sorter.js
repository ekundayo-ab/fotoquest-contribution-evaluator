import React from 'react'
import { SubmissionConsumer } from '../context'

export default function Sorter() {
  return (
    <SubmissionConsumer>
      {(value) => {
        return <React.Fragment>
          <p className="lead form-check-inline">Sort:</p>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="activeSort"
              id="newest"
              value="newest"
              checked={value.activeSort === 'newest'}
              onChange={value.sortSubmissions} />
            <label className="form-check-label text-capitalize lead font-weight-bold" htmlFor="newest">newest to oldest</label>
          </div>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="activeSort"
              id="oldest"
              value="oldest"
              checked={value.activeSort === 'oldest'}
              onChange={value.sortSubmissions} />
            <label className="form-check-label text-capitalize lead font-weight-bold" htmlFor="oldest">oldest to newest</label>
          </div>
        </React.Fragment>
      }}
    </SubmissionConsumer>
  )
}
