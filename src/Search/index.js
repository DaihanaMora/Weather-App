import React, {useEffect, useState} from 'react'
import iconSearch from './search.png'
import './styles.css'

const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])
    const [query, setQuery] = useState('1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC')
    const [coord, setCoord] = useState([]);

    const onSearchValueChange = (e) => {
        console.log(e.target.value)
        setSearchValue(e.target.value)
    }

 

    useEffect(() => {
        const keyApi = '8008c9086d8867c9c17658b31a45895e'
        fetch(`http://api.positionstack.com/v1/forward?access_key=${keyApi}&query=${query}`)
            .then(
                res => res.json())
            .then((result) => {
                    setIsLoaded(true)
                    setData(result.data)  
                const latLong = {
                    latitud:  data[0].latitude,
                    longitud: data[0].longitude
                }
                setCoord(latLong)
                },
                (error) => {
                    setIsLoaded(true)
                    console.log(error)
                }
            )
    }, [])

   
    console.log(data, 'datas')
    console.log(coord.latitud,coord.longitud, 'corrodetanada corresctas')
    useEffect(() => {
        
        fetch('https://api.darksky.net/forecast/88030114c5e47763a011a75e7a10c633/38.897675,-77.036547')
            .then(
                res => res.json())
            .then((result) => {
                setIsLoaded(true)
                console.log(result)
            },
                (error) => {
                    setIsLoaded(true)
                    console.log(error)
                }
            )
    }, [])
   

  return (
    <>
    <form>

        <input
            className="search"
            placeholder="¿Que cuidad deseas consultar?"
            value={searchValue}
            onChange={onSearchValueChange}
        />
        {/* <input className="searchButton" type="submit" value="buscar" /> */}
        <a  className="searchButton">
                  <img width="16" height="16" src={iconSearch} alt="Search Button" />
        </a>
    </form>
    </>
  )
}

export { Search }
