import React, { Component } from 'react';
import $ from 'jquery'
var iso;
var works = [
  {
    'title':'TIC_TAC_TOE',
    'description':`A tic tac toe game using the minmax algorith\n
    and illustrated using aseprite`,
    'tags':["design","programming"],
    'imageref':"tictactoe",
    'overlay':'aqua',
    'link':'#'
  },
  {
    'title':'Ravage issue 15',
    'description':`I designed the 15th issue of the magazine 'Ravage'.`,
    'tags':["design"],
    'imageref':"couvRavage2",
    'overlay':'cornsilk',
    'link':'https://docs.wixstatic.com/ugd/7b6eb2_1e6bfb8a90d04e2483b1b2be233d3f65.pdf'
  },
  {
    'title':'Ravage issue 14',
    'description':`I designed the front page of the 14th issue of the magazine 'Ravage' as well as the pages 5 to 19.`,
    'tags':["design"],
    'imageref':"couvRavage1",
    'overlay':'brown',
    'link':'https://docs.wixstatic.com/ugd/7b6eb2_2c140c1f199b4ac98ce1d9fd63e1058b.pdf'
  },
  {
    'title':'test2',
    'description':`A simple simon game using jquery`,
    'tags':["programming"],
    'imageref':"tictactoe",
    'overlay':'brown',
    'link':'#'
  },
  {
    'title':'test3',
    'description':`A simple simon game using jquery`,
    'tags':["programming"],
    'imageref':"tictactoe",
    'overlay':'brown',
    'link':'#'
  }
]
class WorkWrapper extends Component{
  handleClick(e){
    this.icon.classList.toggle('down');
    this.icon.classList.toggle('right')
    this.pageWrapper.classList.toggle('hidden')
  }
  handleButtonClick(e){
  // let tag = $(e.target).attr('tag');
  // $('.workPage').each((i,val)=>{
  //   if (val.getAttribute('tags').search(tag)>=0){
  //     $(val).removeClass('hidden')
  //   } else {
  //     //$(val).css('display','none');
  //     $(val).addClass('hidden')
  //   }
  // });

    let tag= $(e.target).attr('tag');
    let classfilter = '.'+tag
    iso.arrange({
      filter:classfilter
    })
  }

  componentDidMount(){
    var elem = document.querySelector('.pageWrapper');
    iso = new window.Isotope( elem, {
      // options
      itemSelector: '.workPage',
      layoutMode: 'fitRows'
    });
  }

  render(){
    this.handleClick = this.handleClick.bind(this);
    let workpages = works.map(obj=>{
      return (
        <Workpage
          key={obj.title}
          id={obj}
          title={obj['title']}
          imageref={obj['imageref']}
          description={obj['description']}
          tags={obj['tags']}
          overlay={obj['overlay']}
          link={obj['link']}
        />
      )
    })



    return(
      <div className='workwrapper' id='workwrapper'>
        <div className='bar' onClick={this.handleClick}>
          <h2> Work </h2>
          <i className='arrow right' ref={dom=>this.icon=dom} />
        </div>
        <hr/>
        <div className = 'worknav'>
          <ul>
            <li><button onClick={()=>$('.workPage').removeClass('hidden')}>All</button></li>
            <li><button id = 'workDesign' tag='design' onClick={this.handleButtonClick}>Design</button></li>
            <li><button id = 'workDev' tag='programming' onClick={this.handleButtonClick}>Programming</button></li>
          </ul>
        </div>
        <div className='pageWrapper' ref={dom=>this.pageWrapper = dom}>
          {workpages}
        </div>
      </div>
    )
  }
}

class Workpage extends Component{
  constructor(props){
    super(props)
    let img = require("../img/"+this.props.imageref+".png");
    this.state={
      img:img,
      background:`url('${img}')`,
    }
    this.handleHover=this.handleHover.bind(this)
    this.handleMouseLeave=this.handleMouseLeave.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  componentDidMount(){
    this.props.tags.forEach((tag)=>{
      this.dom.classList.add(tag);
    })
  }

  handleHover(e){
    this.setState({
      background:'#55ad9b'
    })
  }

  handleClick(e){
    this.setState({
      background:'red',
    })
  }

  handleMouseLeave(e){
    this.setState({
      background:`url('${this.state.img}')`
    })
  }
  render(){
    let cssobj = {
      background:this.state.background
    }
    return (
      <div className='workPage' tags={this.props.tags} ref={(dom)=>this.dom=dom}>
        <div className='overlay' style={{backgroundColor:this.props.overlay}}>
          <div className='descriptionWrapper'>
            <p className='title' >{this.props.title}</p>
            <p className='description'>{this.props.description}</p>
          </div>
          <a href={this.props.link}><button>Learn more</button></a>
        </div>
        <div className='workContent' style={cssobj}>

        </div>
      </div>
    )
  }
}

export default WorkWrapper
