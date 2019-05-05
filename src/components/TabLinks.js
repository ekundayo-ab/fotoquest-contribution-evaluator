import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function TabLinks({submissionId}) {
  return (
    <TabLinks.Container className="tab-links">
      <NavLink exact={true} activeClassName='is-active' to={`/photos/${submissionId}`} className="text-uppercase">Photo View</NavLink>
      <NavLink exact={true} activeClassName='is-active' to={`/map/${submissionId}`} className="text-uppercase">Map View</NavLink>
    </TabLinks.Container>
  )
};

TabLinks.Container = styled.div`
  background: var(--mainWhite);
  margin-left: -15px;
  margin-right: -15px;

  a {
    padding: 0.5rem;
    display: inline-block;
    width: 50%;
    text-align: center;
    cursor: pointer;
    color: var(--mainDark);
    border:1px solid var(--mainGreen);

    &:hover, &.is-active {
      text-decoration: none;
      background: var(--mainGreen);
      color: var(--mainWhite);
    }

    &:hover {
      background: #1b813d !important;
    }
  }
`;
