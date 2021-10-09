import React from 'react';
import ReactDOM from 'react-dom';
import LandingPageContainer from './Components/LandingPageContainer/LandingPageContainer';

const HelloWorld = () => {
    return (
        <h1>
           <LandingPageContainer content={'Landing Page'}></LandingPageContainer>
        </h1>
    );
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));