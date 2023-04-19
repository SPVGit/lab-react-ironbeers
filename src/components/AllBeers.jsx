import NavBar from "./NavBar";
import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import axios from 'axios';
import FindBeer from "./FindBeer";

function AllBeers(props) {
    


  const [filteredBeersArr, setFilteredBeers] = useState([])


  const requestAPI = async () => {
    try {
      const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/`);
      setFilteredBeers(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    requestAPI()
  }, [])

  function updateBeers (array) {
    setFilteredBeers(array)
  }

    return (
        <div >
            <NavBar /><br></br><br></br><br></br>
          
            <FindBeer updateBeers={updateBeers}/>

            {filteredBeersArr.map((beer) => {

                return (
                    <div className='container' key={beer._id}>

                        <Link className="d-flex p-4" to={`/${beer._id}`} style={{color: 'black', textDecoration:'none'}}>
                            <div className="col-4">
                                <img className="beer-img" src={beer.image_url} style={{height:200}}/>
                            </div>
                            <div className="col-8" >
                                <h3>{beer.name}</h3>
                                <h5>{beer.tagline}</h5>
                                <p>Created by:{beer.name}</p>
                            </div>

                        </Link>
                    </div>
                )


            })}


        </div>
    )
}
export default AllBeers;