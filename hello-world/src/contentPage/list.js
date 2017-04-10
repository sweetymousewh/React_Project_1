import Header from '../component/H1';
import React from 'react';
import './Simple.css';

const numbers=[1,2,3,4,5];
const listItems = numbers.map((number)=><li>{number}</li>);


export default class list extends React.Component{
    render(){
        return(
            <div className="divStyle">
                <h1>List</h1>
                <ul>{listItems}</ul>
            </div>

        );
    }
}

