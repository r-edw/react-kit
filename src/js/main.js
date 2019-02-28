import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <div>
        <div>Hello from main.js!</div>
        {this.props.children}
      </div>
    )
  }
}

export default Main
