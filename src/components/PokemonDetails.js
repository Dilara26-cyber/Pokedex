import { useParams } from "react-router"
import axios from "axios"
import { useEffect, useState } from "react"

const PokemonDetails = (props) => {
    const [pokemonDetails, setPokemonDetails] = useState([])
    const {pokemon} = useParams()
    const fetchData = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        setPokemonDetails(response)
    }

    useEffect(() => {
        fetchData() 
        console.log(pokemonDetails)
    }, [])
    return (
        <div>
            {pokemon}
        </div>
    )
}

export default PokemonDetails
