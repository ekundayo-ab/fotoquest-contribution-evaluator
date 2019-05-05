import React, { Component } from 'react'
import { devMockData } from './mocks'

const SubmissionContext = React.createContext()

class SubmissionProvider extends Component {
  state = {
    activeSort: 'newest',
    submissions: devMockData
  }

  componentDidMount() {
    this.sortSubmissions(this.state.activeSort)
  }

  sortSubmissions = (sortParam) => {
    let sortType = sortParam
    if (typeof sortType === 'object') {
      sortType = sortParam.target.value
    }

    const sortedSubmissions  = this.state.submissions.slice(0).sort((prev, next) => {
      if (sortType === 'newest') {
        if (prev.timestamp < next.timestamp) return 1;
        if (prev.timestamp > next.timestamp) return -1;
        return 0;
      }

      if (sortType === 'oldest') {
        if (prev.timestamp < next.timestamp) return -1;
        if (prev.timestamp > next.timestamp) return 1;
        return 0;
      }
    })

    this.setState(() => {
      return {
        submissions: sortedSubmissions,
        activeSort: sortType
      }
    })
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target
    type === 'checkbox' ? this.setState({ [name]: checked })
      : this.setState({ [name]: value })
  }

  render() {
    return (
      <SubmissionContext.Provider value={{
        ...this.state,
        handleChange: this.handleChange,
        sortSubmissions: this.sortSubmissions
      }}>
        {this.props.children}
      </SubmissionContext.Provider>
    )
  }
}

const SubmissionConsumer = SubmissionContext.Consumer

export { SubmissionProvider, SubmissionConsumer }
