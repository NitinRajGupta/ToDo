import React from 'react';
export class AddNewTask extends React.Component
{
    constructor(){
        super();
        this.submited=this.submited.bind(this);
    }
    submited(event)
    {   event.preventDefault();
        var input= document.getElementById('t1');
     var value=input.value;
        input.value='';
      this.props.update(value);
        
    }
    render(){
        return(
           <form onSubmit={this.submited}>
            <input id="t1" type="text" required/>
            </form>
        );
    }
}