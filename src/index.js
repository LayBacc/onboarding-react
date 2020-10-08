import React, {Component} from 'react'
import './styles.css';

export class OnboardingModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleCloseClick = this.handleCloseClick.bind(this)
    this.handleBackClick = this.handleBackClick.bind(this)
    this.handleNextStepClick = this.handleNextStepClick.bind(this)
    this.handleFinishClick = this.handleFinishClick.bind(this)

    this.state = {
      stepNum: 0
    };
  }

  handleCloseClick() {
    this.props.closeOnboardingModal()
  }

  handleBackClick() {
    this.setState({ stepNum: this.state.stepNum - 1 })
  }

  handleNextStepClick() {
    this.setState({ stepNum: this.state.stepNum + 1 })
  }

  handleFinishClick() {
    this.props.closeOnboardingModal()
  }

  userIsAuthenticated() {
    return window.django.user.is_authenticated
  }

  isWrapUpStep() {
    // there is a final 'wrap up' step
    return this.state.stepNum === this.props.numSteps
  }

  buildBackBtn() {
    if (this.state.stepNum < 1) return ''

    return(
      <span className="clickable mr-2" onClick={this.handleBackClick}>Back</span>
    )
  }

  buildNextStepBtn() {
    if (this.isWrapUpStep()) {
      return(
        <span 
          className="btn-primary"
          onClick={this.handleFinishClick}
        >Done</span>
      )
    }

    return(
      <span 
        className="btn-primary"
        onClick={this.handleNextStepClick}
      >Next</span>
    )
  }

  buildStepNum() {
    if (this.isWrapUpStep()) return ''

    return(
      <div className="gray-text">
        Step { this.state.stepNum + 1 } / { this.props.numSteps }
      </div>
    )
  }

  buildContent() {
  	return this.props.stepContent[this.state.stepNum]
  }

  render() {
    return(
  		<div 
        style={{overflowX: 'hidden', padding: '1em'}}
      >
        <div 
          className="top"
        >
          <div className="flex flex-center">
            { this.buildStepNum() }
            
            <div className="right-side">
              { this.buildBackBtn() }

              { this.buildNextStepBtn() }
            </div>
          </div>
        </div>

        { this.buildContent() }
      </div> 
    )
  }
}
