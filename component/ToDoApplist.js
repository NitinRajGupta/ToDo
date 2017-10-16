import React from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import {ListGroup,ListGroupItem} from 'react-bootstrap';
export class ToDoApplist extends React.Component
{
    constructor(){
        super();
        this.remove=this.remove.bind(this);
    }
   remove(elem)
    {
        var value=elem.target.parentNode.parentNode.querySelector('span').innerHTML;
        //console.log(value);
        this.props.remove(value);
    }
    render(){
        
        var input=this.props.task.map((elem,i)=>
            {
            return <ListGroupItem key={i}><span>{elem}</span><div id="buton"><a href="#" onClick={this.remove}>X</a></div></ListGroupItem>
        });
        
        
        return(
              <div>
              <br/><br/>
             <ListGroup>
            <ButtonToolbar>
            
            {input}
            </ButtonToolbar>
            </ListGroup>
            
            </div>
            
            
            
        );
    }
}