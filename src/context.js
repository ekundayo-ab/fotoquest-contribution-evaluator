import React, { Component } from 'react'
import { devMockData } from './mocks'

const SubmissionContext = React.createContext()

class SubmissionProvider extends Component {
  state = {
    activeSort: 'newest',
    submissions: devMockData
  }

  sortSubmissions = sortType => {

  }

  render() {
    return (
      <SubmissionContext.Provider value={{
        ...this.state
      }}>
        {this.props.children}
      </SubmissionContext.Provider>
    )
  }
}

const SubmissionConsumer = SubmissionContext.Consumer

export { SubmissionProvider, SubmissionConsumer }
