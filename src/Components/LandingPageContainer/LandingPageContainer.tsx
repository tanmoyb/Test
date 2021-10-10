import React, { useState, useEffect } from "react";
import axios from "axios";
import './LandingPageContainer.css';

interface Props {
  content:string
}

const InitialData = [{
  author: "Ann Leckie ",
  first_sentence: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it.",
  id: null,
  published: 2014,
  title: "Ancillary Justi",
}]
const LandingPageContainer: React.FC<Props> = ({
  content
}): React.ReactElement => {

  const [data,setData] = useState(InitialData)

  useEffect(()=>{
    console.log("dsds")
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/v1/resources/books/all',
      responseType: 'stream'
    })
      .then(function (response) {
        console.log("response",response.data)
        setData(response.data)
      })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  },[])

  console.log("data",data)
  return (
    <div className="Container">
     {content}
     {data.map((item:any,key:any)=>
           
                <tr key={key}>
                <td>{item.author}</td>
              </tr>
                
                )}
    </div>
  );
};

export default LandingPageContainer;