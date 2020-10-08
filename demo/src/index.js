import React, {Component} from 'react'
import {render} from 'react-dom'

import * as Modal from 'react-modal';
import {OnboardingModal} from '../../src'

export default class Demo extends Component {
	constructor(props, context) {
    super(props, context);

    this.openOnboardingModal = this.openOnboardingModal.bind(this)
    this.closeOnboardingModal = this.closeOnboardingModal.bind(this)

    this.state = {
      isOnboardingModalOpen: false
    };
  }

  closeOnboardingModal() {
  	this.setState({ isOnboardingModalOpen: false })
  }

  openOnboardingModal() {
  	this.setState({ isOnboardingModalOpen: true })
  }

	onboardingModalStyle() {
    return(
      { 
        overlay: { 
          backgroundColor: 'rgba(153, 153, 153, 0.5)',
          zIndex: '3'
        },
        content: {
          width: '600px',
          margin: 'auto',
          boxShadow: '-1px 7px 6px 0px rgba(171,171,171,1)',
          padding: '0',
          position: 'relative'
        }
      }
    )
  }

  render() {
    return <div>
      <Modal
        isOpen={this.state.isOnboardingModalOpen}
        style={this.onboardingModalStyle()}
      >
	    	<OnboardingModal
	    		closeOnboardingModal={this.closeOnboardingModal}
	    		stepContent={ [<Step1 />, <Step2 />, <Step3 />] }
	    		numSteps={3}
	    	/>
      </Modal>

      <button onClick={this.openOnboardingModal}>Open modal</button>
    </div>
  }
}

const Step1 = () => {
  return(
    <div className="onboarding-step mt-1 mb-1">
      <h2 className="text-center">Foo</h2>
    </div>
  )
}

const Step2 = () => {
  return(
    <div className="onboarding-step mt-1 mb-1">
      <h2 className="text-center">Bar</h2>
    </div>
  )
}

const Step3 = () => {
  return(
    <div className="onboarding-step mt-1 mb-1">
      <h2 className="text-center">Baz</h2>
    </div>
  )
}

render(<Demo/>, document.querySelector('#demo'))
