import React, { Component } from 'react';
import $ from 'jquery'

function defocus(){
  $('.wrap').each((i,val)=>{
      if ($(val).find('input').val()===""){
        $(val).find('label').removeClass('fill');
      }
      if ($(val).find('textarea').val()===''){
        $(val).find('label').removeClass('fill');
      }
  })
}

$(document).on('click',defocus)

function sendmail(mailcontent){
  let mailbody = `sender : ${mailcontent[1]} , \n name : ${mailcontent[3]} , \n Body : "${mailcontent[2]}"`
  window.Email.send('hadrienallemon@gmail.com',
                    'hadrienallemon@gmail.com',
                    mailcontent[0],
                    mailbody,
                    'smtp.elasticemail.com',
                    'hadrienallemon@gmail.com',
                    '37ff539f-7cc0-4bdf-92bc-8e21773d7cc2',
                    function done(message){console.log(message)}
                  )
}

class ContactWrapper extends Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      subj:'',
      mail:'',
      contactbody:'',
      submit:''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleClick(event){
    $(event.target).parent().find('label').addClass('fill');
  }

  handleChange(event){
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  handleSubmit(event){
    this.setState({
      name:'',
      subj:'',
      mail:'',
      contactbody:'',
      submit:[this.state.subj,this.state.mail,this.state.contactbody,this.state.name]
    },
    function(){sendmail(this.state.submit)}
  )


  }
  render(){
    return(
      <div className='contactWrapper' id='contactform'>
        <form method="POST" >
          <div id='namewrap' className='wrap' >
            <label htmlFor='name' id='lname'>Name</label>
            <input onFocus={this.handleClick} onBlur={defocus} onChange={this.handleChange} type='text' name='name' id='name' value={this.state.name} onClick={this.handleClick}/><br/>
          </div>
          <div id='subjectwrap' className='wrap' >
            <label htmlFor='subject' id='lsubject'>Subject:</label>
            <input onFocus={this.handleClick} onBlur={defocus} onChange={this.handleChange} type='text' name='subj' id='subject' value={this.state.subj} onClick={this.handleClick}/><br/>
          </div>
          <div id='mailwrap' className='wrap' >
            <label htmlFor='backmail' id='lbackmail'>Mail to contact you back</label>
            <input onFocus={this.handleClick} onBlur={defocus} onChange={this.handleChange} type='text' name='mail' id='backmail' value={this.state.mail} onClick={this.handleClick}/><br/>
          </div>
          <div id='textwrap' className='wrap'>
            <label htmlFor='contactbody' id='lcontactbody'>Details</label>
            <textarea onFocus={this.handleClick} onBlur={defocus} onClick={this.handleClick} onChange={this.handleChange} value={this.state.contactbody} rows='8' cols='50' name='contactbody'  form='contactform'/>
          </div>
        </form>
        <button onClick={this.handleSubmit}>Submit !</button>
      </div>
    )
  }
}

export default ContactWrapper
