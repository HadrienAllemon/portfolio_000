import React, { Component } from 'react';
import '../App.css';

var timeouts = []
function tagsinvoke(arr){
  arr[0].classList.toggle('hidden')
  if (arr.length>1){
    timeouts.push(setTimeout(()=>tagsinvoke(arr.slice(1)),200));
  } else {
    let bubbletags = document.querySelectorAll('.tagBubble')
    timeouts.push(setTimeout(()=>bubblesinvoke(Array.prototype.slice.call(bubbletags)),200))
  }
}
function bubblesinvoke(arr){
  arr[0].classList.remove('hidden')
  if (arr.length>1){
    timeouts.push(setTimeout(()=>bubblesinvoke(arr.slice(1)),50 ) )
  }
}
class SkillWrapper extends Component{
  handleClick(e){
    this.icon.classList.toggle('down');
    this.icon.classList.toggle('right');
    this.pageWrapper.classList.toggle('hidden');
    let skilltags = document.querySelectorAll('.skillTitle');
    let bubbletags = document.querySelectorAll('.tagBubble')
    if (this.icon.classList.contains('right')){
      skilltags.forEach((tag)=>tag.classList.add('hidden'))
      bubbletags.forEach((tag)=>tag.classList.add('hidden'))
      timeouts.forEach(to=>clearTimeout(to))
      timeouts=[];
    } else {
      setTimeout(()=>{tagsinvoke(Array.prototype.slice.call(skilltags))},100);
    }
  }

  render(){
    this.handleClick=this.handleClick.bind(this);
    let febubbles= ['html','css','javascript','react.js','jquery']
    let mfebubbles = febubbles.map((bubble)=><TagBubble key={bubble} skilltxt={bubble}/>)
    let pbubbles= ['python 3','mysql','GML']
    let mpbubbles = pbubbles.map((bubble)=><TagBubble key={bubble} skilltxt={bubble}/>)
    let dbubbles = ['photoshop','aseprite']
    let mdbubbles = dbubbles.map((bubble)=><TagBubble key={bubble} skilltxt={bubble}/>)
    return(
      <div className='workwrapper' id='skillwrapper'>
        <div className='bar' onClick={this.handleClick}>
          <h2> Skills </h2>
          <i className='arrow right' ref={dom=>this.icon=dom} />
        </div>
        <hr/>
        <div className='pageWrapper skills hidden' ref={dom=>this.pageWrapper=dom}>
          <div className='skillTitle hidden'>
            <h3>Front end developement</h3>
            {mfebubbles}
          </div>
          <div className='skillTitle hidden'>
            <h3>Programming</h3>
            {mpbubbles}
          </div>
          <div className='skillTitle hidden'>
            <h3>Design</h3>
            {mdbubbles}
          </div>
        </div>
      </div>
    )
  }
}


class TagBubble extends Component{
  render(){
    return(
      <div className='tagBubble hidden'><p>{this.props.skilltxt}</p></div>
    )
  }
}

export default SkillWrapper
