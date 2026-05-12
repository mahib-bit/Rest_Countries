import { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { useState } from "react";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    
    const [count, setCount] = useState(0);
    const [wishListCountries, setWishListCountries] = useState([]);

    const handleCount = () => {
        
        setCount(count + 1);
    }

    const handleWishList = (flag) => {
        const newWishListCountries = [...wishListCountries, flag];
        setWishListCountries(newWishListCountries);
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <h1>Total Visited Countries : {count}</h1>
            <h1>Wishlisted Countries : {wishListCountries.length}</h1>
        
            <div>
                {
                    wishListCountries.map( flag => <img key={flag} src={flag} alt="Wishlist Country Flag" />)
                }
            </div>

            <div className="countries">
                {
                    countries.map(country => 
                    <Country key={country.ccn3.ccn3} 
                    country={country} 
                    handleCount={handleCount}
                    handleWishList={handleWishList}/>)
                }
            </div>
        </div>
    );
};

export default Countries;
