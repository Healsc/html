import React, { Component } from 'react'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <h1>class2</h1>
        <h2>{this.props.match.params.id}</h2>
      </div>
    )
  }
}
