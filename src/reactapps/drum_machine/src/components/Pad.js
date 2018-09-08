import React, {Component} from "react"

export default class Pad extends Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleKeyUp=this.handleKeyUp.bind(this);
  }

  componentDidUpdate(prevProps){
    if (prevProps.sound!==this.props.sound){
      this.audio.pause();
      this.audio.load();
    }
    this.audio.volume=this.props.volume;
  }


  componentDidMount(){
    document.addEventListener("keypress",this.handleKeyPress);
    document.addEventListener("keyup",this.handleKeyUp);
  }

  componentWillUnmount(){
    document.removeEventListener("keypress",this.handleKeyPress);
    document.removeEventListener("keyup",this.handleKeyUp)
  }

  handleClick(event){
    var audio = this.audio;
    if (!audio.paused) audio.pause();
    this.audio.currentTime=0;
    setTimeout(()=>audio.play(),10);
    this.props.passDrum(this.props.sound)
  }

  handleKeyPress(event){
    if (event.key.toUpperCase()===this.props.keyboard){
      this.nv.classList.add("active");
      this.nv.click()
    }
  }

  handleKeyUp(event){
    if (event.key.toUpperCase()===this.props.keyboard){
      this.nv.classList.remove("active");
    }
  }
  render(){
    const source = `sounds/${this.props.sound}.wav`
    return(
      <div className="buttonBox">
      <audio ref={audio => this.audio = audio}>
        <source src={source} type="audio/wav"/>
      </audio>
        <button id={this.props.keyboard} ref={dom => this.nv = dom} onClick={this.handleClick}>{this.props.keyboard}</button>
      </div>
    )
  }
}
