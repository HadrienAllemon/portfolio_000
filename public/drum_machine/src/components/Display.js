import React, { Component } from 'react'


export default class Display extends Component{
  constructor(props){
    super(props);
    this.state={
      volume:.3
    }
    this.handleVolume=this.handleVolume.bind(this);
  }
  handleVolume(event){
    const BASE = parseInt("87CEFA", 16) - parseInt("3f6077", 16)
    this.setState({
      volume:event.target.value
    });
    this.props.getVolume(event.target.value);
    let diff ="#"+ Math.round((parseInt("3f6077", 16)+BASE*Number(event.target.value))).toString(16);
    document.querySelector("input").style.backgroundColor=`rgba(128,192,238,${.6+event.target.value*.4})`;
  }
  render(){
    return (
      <div id="display">
        <div className="soundBank" >
          <div className="soundWrap">
            <p>Volume</p>
            <input type="range" step=".01" min="0" max="1" value={this.state.volume} onChange={this.handleVolume} id="volume"/>
          </div>
          <div className="soundWrap">
            <p>Sound Bank</p>
            <label className="switch" >
              <input onChange={this.props.handleBank} type="checkbox"/>
              <span className="slider"/>
            </label>
          </div>
        </div>
        <div className="displayer">
          <div className="displaywrap">
            {this.props.activeDrum}
          </div>
        </div>
      </div>
    )
  }
}
