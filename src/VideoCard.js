import React, { forwardRef } from "react";
import "./video.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";
const base_url = "https://image.tmdb.org/t/p/original/";
const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText=" ..."
        text={movie.overview}
        // textTruncateChild={<a href="#">Read on</a>}
      />

      <h2>{movie.title}</h2>
      <p className="videoCard_stats">
        {movie.release_date || movie.media_type} . <ThumbUpSharp />
        {""}
        {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
