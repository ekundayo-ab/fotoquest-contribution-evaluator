import React, { Component } from 'react'

const SubmissionContext = React.createContext()

class SubmissionProvider extends Component {
  state = {
    activeSort: 'newest',
    submissions: [],
    comment: '',
    evaluationOptions: '',
    formError: false
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/jpfmg")
      .then((res) => res.json())
      .then((jsonResponse) => {
        this.setState(() => ({ submissions: jsonResponse }),
          () => this.sortSubmissions(this.state.activeSort))
      })
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

      return 0
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

  handleSubmit = (event, submissionId) => {
    event.preventDefault()

    const { comment, evaluationOptions } = this.state

    if (!evaluationOptions) {
      return this.setState(() => ({ formError: true }))
    };

    const submission = {
      id: submissionId,
      evaluation: evaluationOptions,
      comment
    }

    fetch('https://demo0929535.mockable.io/evaluate', {
      method: 'post',
      body: JSON.stringify(submission)
    })
    .then(response => response.json())
    .then((data) => {
      if (data.msg === 'Created.') {
        this.setState(() => {
          return {
            comment: '',
            evaluationOptions: '',
            formError: false
          }
        })
      }
    });
  }

  render() {
    return (
      <SubmissionContext.Provider value={{
        ...this.state,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        sortSubmissions: this.sortSubmissions
      }}>
        {this.props.children}
      </SubmissionContext.Provider>
    )
  }
}

const SubmissionConsumer = SubmissionContext.Consumer

export { SubmissionProvider, SubmissionConsumer }
