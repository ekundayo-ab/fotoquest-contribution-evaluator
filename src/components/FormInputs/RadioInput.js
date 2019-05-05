import React from 'react'

export default function RadioInput(props) {
  const { name, value, id, labelText, handleChange, checked } = props
  return (
    <div className="form-check form-check-inline">
      <input
        checked={checked}
        className="form-check-input"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={handleChange}/>
      <label className="form-check-label text-capitalize" htmlFor={id}>{labelText}</label>
    </div>
  )
}
