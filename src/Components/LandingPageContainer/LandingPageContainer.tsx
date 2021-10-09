import React, { useState, useEffect } from "react";
import './LandingPageContainer.css';

interface Props {
  content:string
}

const LandingPageContainer: React.FC<Props> = ({
  content
}): React.ReactElement => {
  
  return (
    <div className="Container">
     {content}
    </div>
  );
};

export default LandingPageContainer;