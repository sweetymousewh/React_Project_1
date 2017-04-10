import Header from '../component/H1';
import React from 'react';
import './Simple.css';


const divStyle = {
    textAlign: "center",
    border: '1px solid blue'

}

export default class records extends React.Component{
    render(){
        return(
            <div className="divStyle">
                <h1>Records</h1>
            </div>

        );
    }
}

