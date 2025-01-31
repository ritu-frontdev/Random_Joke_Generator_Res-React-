import React, { useState } from "react";
import Buttoncompo from "./Buttoncompo";

const Jokedisplaycompo = () => {
  const[joke, setjoke] = useState()
  const[jokehistory, setjokehistory] = useState([])
  const [loading, setloading] = useState(false)

  const fetchjoke=()=>{
     
    if(!window.navigator ||!window.navigator.onLine){
      alert("you are offline")
    }
    const apiurl = "https://api.api-ninjas.com/v1/jokes"
    const apikey = "iBLjrZxsnlQegO69RF0+2w==j6zSNzP9tjcQMeR8"
    
    setloading(true);
      fetch(apiurl,{
      method: 'GET',
      headers: {
      'X-Api-Key': apikey,
      'User-Agent': 'MyCustomApp/1.0',
      'Content-Type': 'application/json',
    }
  })
    .then(res=>res.json())
    .then(data=>{
      const newjoke = data[0]?.joke || "No joke available" 
      
      setjoke(newjoke)
      setjokehistory(prehistory=>[...prehistory,newjoke])
      //console.log(jokehistory)

            setloading(false)
          }
          
          )
    .catch(error=>{"Error fetching joke:",error
      setloading(false)})
  }

  const handleback=()=>{
    if(jokehistory.length>0){
      return setjoke(jokehistory[jokehistory.length-2])
    }
    return alert('No jokes available')
   
  }
  const handlecopytoclipboard=()=>{
    if(joke){
      navigator.clipboard.writeText(joke)
      .then(()=>{
        alert("joke copy to clipboard!")
      })
      .catch((error)=>{
        alert('Failed to copy text: ', error)
      })
      }
  }


  return (
    <>
    <div>
      <div className="boxsize">

        <div className="heading">
          <h1>Random Joke Generator </h1>
          </div>
      <div className="jokebox">
      <div className="sub_heading"><h1>New Joke 🤣 </h1></div>
      {loading ?(<h1 className="loading">loading....</h1>):(<p className="pagetxt">{joke}</p>)}
      
      
      </div>
      


      </div>
          </div>

      <Buttoncompo fetchjoke={fetchjoke}
                    backbutton={handleback}
                    copybutton={handlecopytoclipboard}/> 

          </>
          
  );
  
};


export default Jokedisplaycompo;
