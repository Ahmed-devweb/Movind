import React from 'react'
import './Filter.css'
import { useState} from 'react'
import Row from './Row'

function Filter() {
    const [filterGenre, setfilterGenre] = useState({
        action : {  state : false , id: "28", name: "Action"},aventure : { state : false , id: "12", name:"Aventure" },animation: { state : false , id: "16", name: "Animation"},comedie:{ state : false , id: "35", name: "Comedie"},crime:{ state : false , id: "80", name:"Crime" },documentaire: { state : false , id: "99", name:"Documentaire" },drame:{ state : false , id: "18", name:"Drame" },famille:{ state : false , id: "10751", name: "Famille"},
        fantaisie:{ state : false , id: "14", name:"Fantaisie" },histoire:{ state : false , id: "36", name: "Histoire"},horreur:{ state : false , id: "27", name:"Horreur" },musique:{ state : false , id: "10402", name:"Musique" },mystere:{ state : false , id: "9648", name:"Mystere"},romance:{ state : false , id: "10749", name:"Romance" },fiction:{ state : false , id: "878", name:"Fiction" },thriller:{ state : false , id: "53", name:"Thriller"},guerre:{ state : false , id: "10752", name:"Guerre" },
        western:{ state : false , id: "37", name: "Western"}
    })
    const [filterSortby, setfilterSortBy] = useState({
        popularity : {state : false, id:"popularity.desc"}, releasedate : {state: false, id:"release_date.desc&release_date.lte=2022-01-01&vote_count.gte=50"} , 
        voteaverage : {state:false,id: "vote_average.desc&vote_count.gte=200"}
    })
    const [urlSearch, seturlSearch] = useState("")



    const FetchSearch = () => {
        let urlModifier = `/discover/movie?api_key=66b4ce59335edf99fe51e1d41ed9cb79&with_genres=&language=fr-FR&sort_by=popularity.desc`
        console.log(filterGenre.action.id)
        for( const genre in filterGenre) {
            console.log(filterGenre[genre].id)
            let urlModifier2 =  urlModifier.split('genres=')
            if (filterGenre[genre].state === true){
                urlModifier = urlModifier2[0] + "genres=" + filterGenre[genre].id + "," + urlModifier2[1]
            }
            
        }

        for( const tri in filterSortby) {
            
            
            if (filterSortby[tri].state === true){

                let urlModifier2 = urlModifier.slice(0,urlModifier.indexOf("sort_by"))
                console.log(urlModifier2)
                urlModifier = urlModifier2 + "sort_by=" + filterSortby[tri].id  
            }
            
        }
        console.log(urlModifier)
        seturlSearch(urlModifier)
        
    }

    const HideButtons = () => {
        if (filterSortby.popularity.state || filterSortby.releasedate.state || filterSortby.voteaverage.state)
        {
            return "filter_hide"
        }
        else
        {
            return "filter"
        }
    }


    return (
        <div className='animation_fade searching_filters'>
            <h1 className='filters_title'>Genres</h1>
            <div className='filters'>
                <button className={filterGenre.action.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, action : { ...prevState.action, state: !filterGenre.action.state}}))}>Action</button>
                <button className={filterGenre.aventure.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, aventure : { ...prevState.aventure, state: !filterGenre.aventure.state}}))}>Aventure</button>
                <button className={filterGenre.animation.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, animation : { ...prevState.animation, state: !filterGenre.animation.state}}))}>Animation</button>
                <button className={filterGenre.comedie.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, comedie : { ...prevState.comedie, state: !filterGenre.comedie.state}}))}>Comedie</button>
                <button className={filterGenre.crime.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, crime : { ...prevState.crime, state: !filterGenre.crime.state}}))}>Crime</button>
                <button className={filterGenre.documentaire.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, documentaire : { ...prevState.documentaire, state: !filterGenre.documentaire.state}}))}>Documentaire</button>
                <button className={filterGenre.famille.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, famille : { ...prevState.famille, state: !filterGenre.famille.state}}))}>Famille</button>
                <button className={filterGenre.fantaisie.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, fantaisie : { ...prevState.fantaisie, state: !filterGenre.fantaisie.state}}))}>Fantaisie</button>
                <button className={filterGenre.histoire.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, histoire : { ...prevState.histoire, state: !filterGenre.histoire.state}}))}>Histoire</button>
                <button className={filterGenre.horreur.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, horreur : { ...prevState.horreur, state: !filterGenre.horreur.state}}))}>Horreur</button>
                <button className={filterGenre.musique.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, musique : { ...prevState.musique, state: !filterGenre.musique.state}}))}>Musique</button>
                <button className={filterGenre.mystere.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, mystere : { ...prevState.mystere, state: !filterGenre.mystere.state}}))}>Mystere</button>
                <button className={filterGenre.romance.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, romance : { ...prevState.romance, state: !filterGenre.romance.state}}))}>Romance</button>
                <button className={filterGenre.fiction.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, fiction : { ...prevState.fiction, state: !filterGenre.fiction.state}}))}>Fiction</button>
                <button className={filterGenre.thriller.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, thriller : { ...prevState.thriller, state: !filterGenre.thriller.state}}))}>Thriller</button>
                <button className={filterGenre.guerre.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, guerre : { ...prevState.guerre, state: !filterGenre.guerre.state}}))}>Guerre</button>
                <button className={filterGenre.western.state ? 'filter_active' : 'filter'  } onClick={() => setfilterGenre((prevState) => ({...prevState, western : { ...prevState.western, state: !filterGenre.western.state}}))}>Western</button> 
            </div>
            <h1 className='filters_title'>Trier par</h1>
            <div className='filters'>
                <button className={filterSortby.popularity.state ? 'filter_active' : HideButtons()  } onClick={() => setfilterSortBy((prevState) => ({...prevState, popularity : { ...prevState.popularity, state: !filterSortby.popularity.state}}))}>Popularité</button>
                <button className={filterSortby.voteaverage.state ? 'filter_active' : HideButtons()  } onClick={() => setfilterSortBy((prevState) => ({...prevState, voteaverage : { ...prevState.voteaverage, state: !filterSortby.voteaverage.state}}))}>Note moyenne</button>
                <button className={filterSortby.releasedate.state ? 'filter_active' : HideButtons()  } onClick={() => setfilterSortBy((prevState) => ({...prevState, releasedate : { ...prevState.releasedate, state: !filterSortby.releasedate.state}}))}>Les plus recents</button>
            </div>
            <button type='button' className='search_button' onClick={FetchSearch}>Rechercher</button>
            {
               urlSearch ?  <Row title={"Votre recherche"} fetchUrl={urlSearch} /> : <h1 className='waiting_search'>En attente de recherche </h1>
            }
             
            
            
        </div>
    )
}

export default Filter
