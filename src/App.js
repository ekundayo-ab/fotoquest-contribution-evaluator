import React from 'react';
import './App.css';
import styled from 'styled-components'

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid m-0 p-0">
        <nav className="navbar navbar-light bg-light text-center">
          <a className="navbar-brand" href="#!">Fotoquest Submission Evaluator</a>
        </nav>
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 col-12">
            <SubmissionCard className="submission-card">
              Hello World!
            </SubmissionCard>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const SubmissionCard = styled.div`
  background: #FFFFFF;
`;

export default App;
