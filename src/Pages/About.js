import { useEffect, useState, Fragment } from "react";
import axios from "axios";
import React from 'react'
import './About.css'

export default function About() {

    const [data, setData] = useState([])
useEffect(()=>{
    const githubDataTemp = [];
    async function fetchData() {
      
        await axios
        .get("https://api.github.com/users/vanekarenina", {
          headers:{"Authorization": "Bearer "+ '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'}
        })
        
        ;
      
    }
  
    fetchData()
      .then(
        ()=> setData(githubDataTemp)
      );
  },[]);

    return (
        <div className="about">
            <div className="topabout">
            <h2>Profile</h2>
            </div>
            <div className="image">
            <img
              src="https://avatars.githubusercontent.com/u/90297907"
              alt="author pic"
              classname='small-image'
              ></img>
              </div>
            <h6>
                Vane Karenina T.H
            </h6>
            <h6>
                081914324690
            </h6>
            <h6>
                vanekarenina@students.undip.ac.id
            </h6>
        </div>
    )
}
