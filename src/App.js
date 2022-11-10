
import './App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { carsData } from "./Cars.js";
import { settings } from './settings';
import { useState } from 'react';

function App() {
  const [ term, setTerm]=useState("");
 
  return (
    <>
    <div className='container'>
    <input type="text" value={term} placeholder="search model here....."  onChange={(e)=>setTerm(e.target.value) }/>
    </div>

    <div className="App">
     
      <Slider {...settings}>
      {carsData
      .filter((item)=>{
        if(term===""){
          return item;
        }else if(item.id.toLowerCase().includes(term.toLowerCase())){
          return item;
        }
      })
      .map(item=>(
      <div className="card">
        <div className="card-top">
          <span>{item.bodyType}</span>
          <h1>{item.modelName}</h1><p>{item.modelType}</p>
          <img src={item.imageUrl} alt={item.modelName}/>
        </div>
        <div className="card-bottom">
          <div className='bottom'>
          <span className='bottom-layer' >LEARN<a href={item.url}> <img className="arrowImage" alt='arrow' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oesJn9vG1AnqhGRN-69YFDS1Vh9MR1pRew&usqp=CAU' /></a></span>      
          <span className='bottom-layer'>SHOP<a href={item.shop}><img className='arrowImage' alt='arrow' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oesJn9vG1AnqhGRN-69YFDS1Vh9MR1pRew&usqp=CAU"/></a></span>
          </div>
        </div>
      </div>
      ))}
      </Slider>
    </div>
    </>
  );
}

export default App;
