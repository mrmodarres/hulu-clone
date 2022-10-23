import React from "react";
import "./nav.css";
import requestes from "./requestes";

function Nav({ setSlectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSlectedOption(requestes.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchMystery)}>Mystrey</h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSlectedOption(requestes.fetchTV)}>TV</h2>
    </div>
  );
}

export default Nav;
