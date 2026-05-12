import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    const [count, setCount] = useState(0);
    
    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <p onClick={handleCount} >You have visited: {count} countries</p>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} />)
                }
            </div>
        </div>
    );
};

export default Countries;
