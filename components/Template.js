import React, {Component} from 'react'

class Template extends Component {

  render(){
    return (
      <div>
        <ChildComponent data={this.state.data}/>
        {this.props.somestring} {/* Curly braces render JS expressions into html */}
      </div>
    )
  }
}

export default Template
