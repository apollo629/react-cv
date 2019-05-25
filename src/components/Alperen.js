import React, {Component} from 'react';

class Alperen extends Component {

    render(){
        const { firstDivStyle, secondDivStyle} = stayla; 
        return (
            <div style={firstDivStyle}>
                <p>Alperen INAL</p>
                <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }
}

const stayla = {
    firstDivStyle: {
        width: '400px', height: '200px', color:'white'
    },
    secondDivStyle: {
        backgroundColor: 'tomato'
    }
}

export default Alperen;