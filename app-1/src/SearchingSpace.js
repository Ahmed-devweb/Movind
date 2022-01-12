import axios from './axios'
import React from 'react'
import requests from './requests'
import "./SearchingSpace.css"
import { useEffect } from 'react'
import Row from './Row'
import { Link } from "react-router-dom";

function SearchingSpace() {

    
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchGenre);
            console.log(request)
            return request;
        }
        fetchData();
    }, [])


    return (
        <div className='searchingplace'>
            <div className='populaires'>
                <Row title={"Les plus populaires"} fetchUrl={requests.fetchPopular} />
                <Row title={"Les meilleurs film à regarder en famille"} fetchUrl={requests.fetchFamilyMovies} />
            </div>
            <Link className='search_link' to={'/searchingpage'}>Faites votre propre recherche !</Link>

            



        </div>
    )
}

export default SearchingSpace
