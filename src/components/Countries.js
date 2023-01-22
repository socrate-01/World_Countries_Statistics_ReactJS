import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';


const Countries = () => {
const [data, setData] = useState([]);
const [rangeValue, setRangeValue] = useState(36);
const [selectedRadio, setSelectedRadioValue] = useState("");

const radios = ["Africa","America","Asia", "Europe","Oceania"];

useEffect(() =>{
    axios.get("https://restcountries.com/v3.1/all").then((res)=> setData(res.data))
},[])

    return (
        <div className="countries">
            <ul className="radio-container">
                <input type="range" min="0" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />
                {radios.map((continent) =>(
                    <li>
                        <input type="radio" id={continent} name="continentName" checked={continent===selectedRadio} onChange={(e) => setSelectedRadioValue(e.target.id)}/>
                        <label htmlFor={continent} >{continent}</label>
                    </li>
                ) )}
            </ul>

            {selectedRadio && <button onClick={()=>setSelectedRadioValue("")}>Annuler la recherche triée</button>}

            <ul>
                {data.filter((country) => country.continents[0].includes(selectedRadio)).sort((a,b) => b.population - a.population).slice(0, rangeValue).map((country,index) => (<Card key={index} country={country}/>))} 
            </ul>
        </div>
    );
};

export default Countries;