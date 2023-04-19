import NavBar from "./NavBar";
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function SingleBeer() {

    const { id } = useParams()

    const [chosenBeer, setChosenBeer] = useState(null)

    const requestAPI = async () => {
        try {
            const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`);
            setChosenBeer(res.data)
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
            
                {!chosenBeer &&(
                    <h3>Beer details unavailable!</h3>
                )}
          
                {chosenBeer && (
                    <div className='container'>
                        <div className='p-5'>
                            <img src={chosenBeer.image_url} style={{ height: 200 }} />
                        </div>
                        <div className='container card'>
                            <div className='d-flex justify-content-around'>
                            <h3>{chosenBeer.name}</h3>
                            <span>{chosenBeer.attenuation_level}</span>
                            </div>
                            <div className='d-flex justify-content-around'>
                            <h5 >{chosenBeer.tagline}</h5>
                            <span>{chosenBeer.first_brewed}</span>
                            </div>
                            <p>{chosenBeer.description}</p>
                            <p>Created by:{chosenBeer.contributed_by}</p>
                        </div>
                    </div>

                )}

        </div>
    )
}
export default SingleBeer;