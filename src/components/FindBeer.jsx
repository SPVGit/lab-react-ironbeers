
import { useEffect, useState } from 'react';
import axios from 'axios';

function FindBeer(props) {

  const [query, setquery] = useState('')

  const handleChange = (e) => {
    console.log(e.target.value)
    setquery(e.target.value)
  };

  const requestQueryAPI = async () => {
    try {
      const res = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`);
      console.log(res.data);
     props.updateBeers(res.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(query);
    
    requestQueryAPI()
  }, [query])


  return (

    <div>

      <label>Find Beer:</label><br></br>

   
        <input type='text' name='q' onChange={handleChange} />
      

    </div>
  )
}
export default FindBeer;