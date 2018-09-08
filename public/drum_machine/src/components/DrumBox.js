import React , { Component } from "react"
import Pad from "./Pad"
import Display from "./Display"

export default class DrumBox extends Component{
  constructor(props){
    super(props);
    this.state={
      activeDrum: "",
      volume:".3",
      bankToggle:false
    }
    this.handleDrum=this.handleDrum.bind(this);
    this.getVolume=this.getVolume.bind(this);
    this.handleBank=this.handleBank.bind(this);
  }

  handleDrum(drum){
    this.setState({
      activeDrum: drum,
    })
  }

  handleBank(){
    this.setState({
      bankToggle:!this.state.bankToggle
    })
  }

  getVolume(volume){
    this.setState({
      volume: volume
    })
  }

  render(){
    const sounds = [["snare-lofi01","snare-lofi02","snare-modular","hihat-dist01","hihat-dist02","hihat-electro","tom-acoustic01","tom-acoustic02","tom-lofi"],
                    ["Cmajor","Cminor","Cminor7","Amajor","Aminor","Aminor7","Fmajor","Fminor","Fminor7"]][~~this.state.bankToggle];
    const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
    const buttons = keys.map((val,i)=>{
      return (
        <Pad
          sound={sounds[i]}
          passDrum={this.handleDrum}
          volume={this.state.volume}
          key={val}
          keyboard={val}
        />
      )
    });
    return (
      <div id="drum-machine" >
        <div className="padBank" ref={elem=>this.nv = elem}>
          <div className="padWrapper">
            {buttons}
          </div>
        </div>
        <Display
          handleBank={this.handleBank}
          activeDrum={this.state.activeDrum}
          getVolume={this.getVolume}
        />
      </div>
    )
  }
}
