import React, { Component } from 'react';
import '../App.css';
import codepen from '../icon/codepen.svg'
import facebook from '../icon/facebook.svg'
import github from '../icon/github.svg'
import linkedin from '../icon/linkedin.svg'

class Buttonwrapper extends Component {
  render() {
    let buns = [[
      codepen,'https://codepen.io/dashboard?type=view&opts_itemType=pen&opts_filter=all&opts_orderBy=id&opts_orderDirection=0&opts_tag=0&displayType=grid&previewType=iframe&page=1'
    ],[
      facebook,'https://www.facebook.com/hadrien.allemon?ref=bookmarks'
    ],[
      github,'https://github.com/HadrienAllemon'
    ],[
      linkedin,'#'
    ]]
    let buttons = buns.map((icon,i)=>{
      return (
        <ButtonW
        key = {i}
        link = {icon[1]}
        isource = {icon[0]}
        />
      )
    })
    return (
      <div className="ButtonWrapper">
        {buttons}
      </div>
    );
  }
}

class ButtonW extends Component {
  render(){
    let cssObj = {
      background: "url('"+this.props.isource,
      backgroundSize: 'contain',
      backgroundRepeat:'no-repeat',
    }
    return (
      <div>
        <a href={this.props.link} target="_blank">
          <div className="ButtonW" style={cssObj}></div>
        </a>
      </div>
    );
  }
}

export default Buttonwrapper;
