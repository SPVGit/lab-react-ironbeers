import NavBar from "./NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {

    const [randomBeer, setRandomBeer] = useState({})

    const requestAPI = async () => {
        try {
            const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);

            setRandomBeer(res.data)
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        requestAPI()
    }, [])

    return (
        <div>
            <NavBar /><br></br><br></br><br></br>

            {!randomBeer && (
                <h3>Beer details unavailable!</h3>
            )}

            {randomBeer && (
                <div className='container'>
                    <div className='p-5'>
                        <img src={randomBeer.image_url} style={{ height: 200 }} />
                    </div>
                    <div className='container card'>
                        <div className='d-flex justify-content-around'>
                            <h3>{randomBeer.name}</h3>
                            <span>{randomBeer.attenuation_level}</span>
                        </div>
                        <div className='d-flex justify-content-around'>
                            <h5 >{randomBeer.tagline}</h5>
                            <span>{randomBeer.first_brewed}</span>
                        </div>
                        <p>{randomBeer.description}</p>
                        <p>{randomBeer.contributed_by}</p>
                    </div>
                </div>

            )}


        </div>
    )
}

export default RandomBeer;