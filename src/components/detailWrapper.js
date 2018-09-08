import React, { Component } from 'react';
import $ from 'jquery'

const FULLTEXT=(<p><span id='about'><span id='intro'>Hello, My name is Hadrien. I do things.</span><br/><br/>
   I am a web developer based in the
   Walloon Brabant in Belgium.
   I started programming as a teenager, making game during my free time.
   I liked it so much that I decided to make it my daily job, I am now specialised
   web development.
   <br/>
   Feel free to browse my portfolio. Take your
   time and come back to me if you are interested in working with me !</span></p>)

const QUOTE = (<p>`A dream doesn't become reality through magic; it takes sweat, determination and hard work.`<br/> - Colin Powell</p>)

function clamp(val,min,max){
  return val>max?max:val<min?min:val
}

var Mouse = {
  x: undefined,
  y: undefined
}

function positionPic(){
  var $elem = $('._leftpicHolder')
  let offset = $elem.offset();
  let width = $elem.width();
  let height = $elem.height();

  var Center = {
    x: Math.round(offset.left + width/2),
    y: Math.round(offset.top + height/2)
  }
  let xoff = clamp((Mouse.x - Center.x)/10,-40,40);
  let yoff = clamp((Mouse.y - Center.y)/10,-40,40);
  $elem.css('background-position',`${20 + xoff}% ${20 + yoff}%`)
}


class DetailWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      fulltext:FULLTEXT,
      displayedtext:"",
      currIndex:0
    }
    this.textdisplay=this.textdisplay.bind(this);
  }

  componentDidMount(){
    var tmout;
    $('.contactwrapper').on( 'mousemove',function(event){
      tmout = setTimeout(function(){
        $(this).find('._leftpicHolder').css('transition','none');
      },200)
      Mouse.x = event.pageX;
      Mouse.y = event.pageY;
      positionPic();
    });

    $('.contactwrapper').on('mouseleave',function(event){
      clearTimeout(tmout);
      $(this).find('._leftpicHolder').css('transition','background-position .2s');
      $(this).find('._leftpicHolder').css('background-position','20% 20%')
    })

  }

  textdisplay(fire){
    if (fire===undefined){fire=1}
    if (fire===0){
      setTimeout(this.textdisplay,1000);
      return

    }
    this.setState({
      displayedtext:this.state.fulltext.slice(0,this.state.currIndex),
      currIndex:this.state.currIndex+1
    },()=>{
      if (this.state.displayedtext.length!==this.state.fulltext.length){
        setTimeout(this.textdisplay,42)
      }
    }
  );

  }

  render(){
    //if (this.state.currIndex===0){this.textdisplay(0);}
    return(
      <div className='contactwrapper'>
        <div className='_left'>
          <div className='_leftpic'>
            <div className='_leftpicHolder' />
          </div>
          <div className='_leftquote'>
            <div className='_quote'>
              {QUOTE}
            </div>
          </div>
        </div>
        <div className='_right'>
          <div className='textBox'>
            <h3>About</h3>
            {FULLTEXT}
          </div>
        </div>
      </div>
    )
  }
}

export default DetailWrapper
