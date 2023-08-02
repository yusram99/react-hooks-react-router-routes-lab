import React from "react";
import { movies } from "../data";
function Movies() {

  const displaymovies = movies.map(movie => {
    return <div><h1> title :{movie.title}</h1>
                <p>time :{movie.time}</p>
    return <div key={movie.title}>
             <h2> title :{movie.title}</h2>
                <h3>time :{movie.time}</h3>
                 genres:<ul>
                           <li>{movie.genres[0]}</li>
                           <li>{movie.genres[1]}</li>
                           <li>{movie.genres[2]}</li>
                           {movie.genres.map((genre)=>(
                           <li key={genre}>{genre}</li>
                          ))}
                        </ul>
         </div>
          </div>
  })
  return <div>
    <h1>Movies Page</h1>
    <div>
      {displaymovies}
    </div>
  </div>;

}

export default Movies;