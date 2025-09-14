import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // fetch trailer video
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
<iframe
  className="w-screen aspect-video"
  src="https://www.youtube.com/embed/UWMzKXsY9A4?autoplay=1&mute=1&loop=1&playlist=UWMzKXsY9A4"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
    </div>
  );
};

export default VideoBackground;