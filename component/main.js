import React from 'react';
import {AddNewTask} from './AddNewTask';
import {ToDoApplist} from './ToDoApplist';
import {Nav1} from './nav';
import {Nav2} from './nav2';

import {Jumbotron} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
export class Todo extends React.Component
{
    constructor(props){
        super();
        this.state={task:props.task};
        this.update=this.update.bind(this);
        this.removef=this.removef.bind(this);
    }
    update(text)
    {
        var uptask=this.state.task;
        uptask.unshift(text);
        this.setState({task:uptask});
    }
    removef(text)
    {
        var uptask=this.state.task;
        uptask.splice(uptask.indexOf(text),1);
        this.setState({task:uptask});
        
    }
    
    render(){
        return(
            <div className="container">
            <Nav1 />
            
            
            
             <div id="jumbo"className="container-fluid">
            <Jumbotron>
                <h1>ToDo</h1>
                <p> Add item to list</p>
            <AddNewTask update={this.update}/>
            <ToDoApplist task={this.state.task} remove={this.removef}/>
                
            <Button bsStyle="primary" href="http://abstractspoon.com/wiki/doku.php?id=todolist-description">Learn more</Button>
                </Jumbotron>
            </div>
            
            </div>
        );
    }
}