import React,{ useEffect,useState } from 'react'
import axios from './axios'
import './Row.css'


function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([])
    const base_Url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const element = document.getElementById("movie_container")
            element.classList.add("d-none");
            const request = await axios.get(fetchUrl)
            console.log(request)
            setMovies(request.data.results)
            element.classList.remove("d-none")
            return request
        }
        fetchData();
    }, [fetchUrl])
    console.log(movies)


    
    return (
        <div id='movie_container' key={fetchUrl} className='animation_fade'>
            <h2 className='title'>{title}</h2>
            <div className='movies'>
                {movies.map(movie => (movie.backdrop_path &&
                        <div>
                            <div>
                                <img className='movie_image' key={movie.id} src={`${base_Url}${movie.backdrop_path}`|| `${base_Url}${movie.poster_path}`} alt={movie.name} data-toggle="modal" data-target={"#"+movie.title} />
                                <div className='movie_description'>
                                    <h5>{movie.title}</h5>

                                </div>
                            </div>
                            
                            <div className="modal fade " id={movie.title} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content modal_style">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">{movie.title}</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                               <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <img src={`${base_Url}${movie.backdrop_path}`|| `${base_Url}${movie.poster_path}`} alt={movie.name}></img>
                                        <div className="modal-body modal_font">
                                            {movie.overview}
                                        </div>
                                        <p>Note : {movie.vote_average}</p>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                   
                          </div>
                ))}
            </div>
        </div>
    ) 
    
}

export default Row
