import "./Country.css";
import { useState } from "react";

const Country = ({ country, handleCount , handleWishList }) => {
    const [visited, setVisited] = useState(false); 
   

    const handleVisited = () =>
        {   
            
            // !visited? setVisited(true) : setVisited(false)  
            if(!visited){
                setVisited(true);
                handleCount(+1);
            } 
            else {
                setVisited(false);
            }
        }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <p>Capital : {country.capital.capital}</p>
            <p>Population : {country.population.population}</p>
            <p>Area : {country.area.area}km² 
                {
                country.area.area > 300000 ? `--Big Country` : `--Small Country`
                }
            </p>
            <button onClick={handleVisited}>
            {visited ? `Visited` : `Not Visited`}
            </button>
            <button onClick={() => {handleWishList(country.flags.flags.png)}}>
                Add to Wishlist
            </button>
        </div>
    );
};

export default Country;