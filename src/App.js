import React from 'react';
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import { SubmissionConsumer } from './context'

import PhotoView from './components/PhotoView';
import MapView from './components/MapView';
import NavBar from './components/NavBar';
import EvaluationForm from './components/EvaluationForm'
import SubmissionDetail from './components/SubmissionDetail'
import Sorter from './components/Sorter'
import TabLinks from './components/TabLinks';

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid m-0 p-0">
        <NavBar />
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center text-white">
            <Sorter />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <SubmissionConsumer>
          {(value) => {
            return value.submissions.map(mockData =>
              <SubmissionCard key={mockData.id} className="row p-2 mb-5">
                <div className="col-md-12 col-lg-8 col-12">
                  <TabLinks submissionId={mockData.id} />

                  <Switch>
                    <Route
                      exact
                      path={`/photos/${mockData.id}`}
                      render={(props) => <PhotoView {...props} photos={mockData.photos} /> } />

                    <Route
                      exact
                      path={`/map/${mockData.id}`}
                      render={(props) => <MapView {...props} lat={mockData.location.lat} lon={mockData.location.lon} />} />

                    <Route path="*" render={() =>
                      <div className="text-center p-5">
                        <p className="display-4">Content hidden</p>
                        <p className="lead">Click on the <b>PHOTO VIEW</b> or <b>MAP VIEW</b> to show this submission content</p>
                      </div>
                    }/>
                  </Switch>
                </div>

                <div className="col-md-12 col-lg-4 col-12">
                  <SubmissionDetail submission={mockData} />
                  <EvaluationForm submissionId={mockData.id} />
                </div>
              </SubmissionCard>
            )
          }}
        </SubmissionConsumer>
      </div>
    </React.Fragment>
  );
};

const SubmissionCard = styled.div`
  background: var(--mainWhite);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.7);

  /* https://codepen.io/sdthornton/pen/wBZdXq */
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  /* **** */
`;

export default App;
