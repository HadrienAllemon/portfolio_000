import React, { Component } from 'react';
import WorkWrapper from './workwrapper.js';
import SkillWrapper from './skillwrapper.js';
import ContactWrapper from './contactwrapper.js';
import DetailWrapper from './detailWrapper.js';
var $ = require('jquery');
var s = require('jquery.scrollto');




class Tbody extends Component{

  componentDidMount(){
    const STICKTOP= $('#navbar').offset().top;
    window.onscroll = function(){
      if (STICKTOP <= window.pageYOffset){
        $('#navbar').addClass('sticky');
      } else {
        $('#navbar').removeClass('sticky');
      }
    }

    $('.navbut').each(function(i,l){
      $(this).on('click',function(){
        let elem = {
          'home':0,
          'mywork':$('#workwrapper').offset().top+5,
          'skills':$('#skillwrapper').offset().top+5,
          'contact':$('#contactform').offset().top+5
        }[$(this).attr('id')]
        s(elem,500);
      });
    });
  }


  render(){
    return(
      <div className='tbody'>
        <nav className='navbar' id='navbar'>
          <ul>
            <li><button className='navbut' id='home' >Home</button></li>
            <li><button className='navbut' id='mywork'>My work</button></li>
            <li><button className='navbut' id='skills'>skills</button></li>
            <li><button className='navbut' id='contact'>Contact me</button></li>
          </ul>
        </nav>
        <hr style={{width: '80%'}} />
        <DetailWrapper/>
        <WorkWrapper/>
        <SkillWrapper/>
        <ContactWrapper/>
      </div>
    )
  }
}

export default Tbody
