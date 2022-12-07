import React, { useEffect, useState } from "react";
import axios from "axios";

function Action() {
    const [ActionList, setActionList] = useState([]);


    async function getData () {
        const pop = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=15e383204c1b8a09dbfaaa4c01ed7e17&language=fr-Fr");
        setActionList(pop.data.results);

    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div>
            <div className="MoviePopTitle">
                <h2>
                    Catégorie
                </h2>
            </div>
            <ul className="List">
                {ActionList.map((cate) =>{
                    if (cate.genre_ids.includes(14)){
                        console.log("ok")
                        return(
                            <li key={cate.title} >
                                <h2>Action</h2>
                                <div>
                                    <img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+cate.poster_path} alt='Image Du Film'></img>
                                    <p className="Overview">{cate.overview}</p>
                                </div>
                                <a>{cate.title}</a></li>
                    )
                }    
                    if (cate.genre_ids.includes(10749)){
                        console.log("ok2")
                        return(
                            <li key={cate.title} >
                                <h2>Romance</h2>
                                <div>
                                    <img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+cate.poster_path} alt='Image Du Film'></img>
                                    <p className="Overview">{cate.overview}</p>
                                </div>
                                <a>{cate.title}</a></li>
                )
            }    
                    if (cate.genre_ids.includes(27)){
                        console.log("ok3")
                        return(
                            <li key={cate.title} >
                            <h2>Horreur</h2>
                            <div>
                                <img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+cate.poster_path} alt='Image Du Film'></img>
                                <p className="Overview">{cate.overview}</p>
                            </div>
                            <a>{cate.title}</a></li>
                )
            }  
                    if (cate.genre_ids.includes(18)){
                        console.log("ok4")
                        return(
                            <li key={cate.title} >
                            <h2>Drama</h2>
                            <div>
                                <img className="PosterSize" src={'https://image.tmdb.org/t/p/original'+cate.poster_path} alt='Image Du Film'></img>
                                <p className="Overview">{cate.overview}</p>
                            </div>
                            <a>{cate.title}</a></li>
                )
            }  
                })}
            </ul>


        </div>
    )
}

export default Action;