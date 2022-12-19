import ReactDOM from 'react-dom';
import React from 'react';

const Test = (props) => {
    return (<div><h1>Hello i'm for 'testing' </h1></div>)
}

const Testing = () => {
    return(
    <React.Fragment>
        {ReactDOM.createPortal(<Test/>, document.getElementById('testing') )}
    </React.Fragment>)
}

export default Testing;