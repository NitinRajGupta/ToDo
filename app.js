import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './component/main';
var task=[];
ReactDOM.render( 
    <Todo task={task}/>,
    document.getElementById('todo')
);