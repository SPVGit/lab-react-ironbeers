import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";

function CreateNewBeer(props) {

    const [ brewers_tips, setBeerBrew] = useState('')
    const [name, setBeerName] = useState('')
    const [attenuation_level, setBeerAtten] = useState(0)
    const [tagline, setBeerTagline] = useState('')
    const [first_brewed, setBeerDate] = useState('')
    const [description, setBeerDesc] = useState('')
    const [contributed_by, setBeerCont] = useState('')

    let handleBeerBrew = (e) => setBeerBrew(e.target.value)
    let handleBeerName = (e) => setBeerName(e.target.value)
    let handleBeerAtten = (e) => setBeerAtten(e.target.value)
    let handleBeerTagline = (e) => setBeerTagline(e.target.value)
    let handleBeerDate = (e) => setBeerDate(e.target.value)
    let handleBeerDesc = (e) => setBeerDesc(e.target.value)
    let handleBeerCont = (e) => setBeerCont(e.target.value)

    let handleSubmit = (e) => {

        e.preventDefault();

        const newBeer = {  brewers_tips, name, attenuation_level, tagline, first_brewed, description, contributed_by }

        createPost(newBeer)

        setBeerBrew('')
        setBeerName('')
        setBeerAtten(0)
        setBeerTagline('')
        setBeerDate('')
        setBeerDesc('')
        setBeerCont('')
    }

    const [post, setPost] = useState(null);

    function createPost(newBeer) {
        axios
            .post(`https://ih-beers-api2.herokuapp.com/beers/new`, {
                brewers_tips: newBeer. brewers_tips,
                name: newBeer.name,
                attenuation_level:newBeer.attenuation_level,
                tagline: newBeer.tagline,
                first_brewed:newBeer.first_brewed,
                description:newBeer.description,
                contributed_by:newBeer.contributed_by
            })
            .then((response) => {
                setPost(response.data);

            });
    }

    return (
        <div>
            <NavBar />

            <form onSubmit={handleSubmit}>
                <label>Brewers Tips:</label><br></br>
                <input onChange={handleBeerBrew} name=' brewers_tips' value={ brewers_tips} type='text' /><br></br>

                <label>Name:</label><br></br>
                <input onChange={handleBeerName} name='name' value={name} type='text' /><br></br>

                <label>Attenuation Level:</label><br></br>
                <input onChange={handleBeerAtten} name='attenuation_level' value={attenuation_level} type='number' /><br></br>

                <label>Tagline:</label><br></br>
                <input onChange={handleBeerTagline} name='tagline' value={tagline} type='text' /><br></br>

                <label>First Brewed</label><br></br>
                <input onChange={handleBeerDate} name='first_brewed' value={first_brewed} type='text' /><br></br>

                <label>Description</label><br></br>
                <input onChange={handleBeerDesc} name='description' value={description} type='text' /><br></br>

                <label>Contributed By</label><br></br>
                <input onChange={handleBeerCont} name='contributed_by' value={contributed_by} type='text' /><br></br><br></br>

                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
export default CreateNewBeer;