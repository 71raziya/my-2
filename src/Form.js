import {useState} from "react"

const Form = ({getWeather}) => {
  const [city, setCity] = useState('');
    return (
        
   <div className="form">
       <input placeholder="Enter the name of the city..." onChange={(event) => {
        setCity(event.target.value)
       }} type='text'/>
       <button onClick={() =>{
        getWeather(city)
       }}>get</button>
      
      
        </div>
    );
}

export default Form;
