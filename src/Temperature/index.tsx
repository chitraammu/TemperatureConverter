import React, { useEffect, useState } from 'react';
import './temperature.scss';
import {celciusToFahrenheit, fahrenheitToCelcius} from '../Utils';
import hotIcon from '../assets/hot.png';
import coldIcon from '../assets/cold.png';
import normalIcon from '../assets/normal.png';

function Temperature() {
    const [userDegree , setuserDegree]=useState('');
    const [selectedTemperature,setTemperature] = useState('');
    const [convertedTemp,setconverTemp]=useState(0);
    const [isError,setError]=useState(false)
    const handleOptionChange= (e:any)=>{
        console.log(e.target.value);
    }
    const validationCheck =(text:any)=>{
      let isnum = /^\d+$/.test(text);
      if (isnum){
        setError(false);
        if(selectedTemperature === 'Celcius'){
          setTemperature("Fahrenheit");
    
          setconverTemp(fahrenheitToCelcius(userDegree));
       }
       else{
          setTemperature("Celcius");
          setconverTemp(celciusToFahrenheit(userDegree));
       }
      }
      else{
        setError(true);
      }
    }
  return (
    <div className="tc-parent-wrapper"> 
        <div className="tc-inner-content">
            <div className='tc-data-display'>
                 <h3>{convertedTemp}</h3>
                 <span><sup>o</sup>{selectedTemperature === 'Celcius' ? "F" : "C"}</span>  
            </div>
            
           <input 
              className="tc-input-box"
              value={userDegree}
              placeholder="Enter a temperature"
              type="text"
              onChange={(e)=>{
                setconverTemp(0);
                setTemperature('');
                setuserDegree(e.target.value)}}
            />
            {
              isError &&
            <p className='error'>Enter valid temperature</p>
                 }
            <div className='tc-radio-button-wrapper'>
            <span>
            <input type="radio" className="tc-radio-button" name="radio" value="Celcius" checked={selectedTemperature === 'Celcius'}
                onChange={(e)=>{
                    setTemperature(e.target.value);
                    setconverTemp(celciusToFahrenheit(userDegree));
                }             
                }
            /> 
            <label htmlFor="Celcius">Celcius</label>
            </span>
            <span>
            <input type="radio" className="tc-radio-button" name="radio" value="Fahrenheit" checked={selectedTemperature === 'Fahrenheit'}
              onChange={(e)=>{
                  setTemperature(e.target.value);
                  setconverTemp(fahrenheitToCelcius(userDegree));
                }  
              }
            />
            <label htmlFor="Fahrenheit">Fahrenheit</label>
            </span>
            </div>
            
            <button className="tc-swap-button" 
            onClick={()=>{
                
                //  if(selectedTemperature === 'Celcius'){
                //     setTemperature("Fahrenheit");
              
                //     setconverTemp(fahrenheitToCelcius(userDegree));
                //  }
                //  else{
                //     setTemperature("Celcius");
                //     setconverTemp(celciusToFahrenheit(userDegree));
                //  }
                 validationCheck(userDegree)
            }}>
                Swap
            </button>
              <div className='tc-footer-mode'>
                <span className='tc-each-card hot'>
                    <span><img src={hotIcon} alt='' width='30' height='30'/></span>
                    <p>Hot</p>
                </span>
                <span className='tc-each-card normal'>
                    <span><img src={normalIcon} alt='' width='30' height='30'/></span>
                    <p>Normal</p>
                </span>
                <span className='tc-each-card cold'>
                    <span><img src={coldIcon} alt='' width='30' height='30'/></span>
                    <p>Cold</p>
                </span>
              </div>
            </div>
    </div>
  );
}

export default Temperature;
