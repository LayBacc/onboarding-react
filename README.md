# Rumin React Onboarding
Simple React component for onboarding new users in a series of steps. This is taken from the code in the [Rumin](https://getrumin.com) product.

![Onboarding demo GIF](https://storage.googleapis.com/rumin-gcs-bucket/onboarding.gif)

## Usage
To use only onboarding content, you can run:
`npm install onboarding-react`

Pass the following parameters as props:

- `closeOnboardingModal` callback function when the modal dialog is to be closed. Add logic here to control the display state of the modal dialog.
- `stepContent` an array of React components, each containing the content of the onboarding step
- `numStep` number of steps in total

To see a working example, see `/demo/src/index.js`

This project uses [react-modal](https://github.com/reactjs/react-modal)  for handling the modal part. But you can swap it out with other libraries.
