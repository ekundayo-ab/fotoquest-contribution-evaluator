import React from 'react'
import styled from 'styled-components'

export default function NavBar() {
  return (
    <NavBar.Container className="navbar navbar-light text-center">
      <a className="navbar-brand text-uppercase font-weight-bold" href="#!">Fotoquest Submission Evaluator</a>
    </NavBar.Container>
  )
}

NavBar.Container = styled.nav`
  background: rgba(255,255,255,0.7) !important;
`
