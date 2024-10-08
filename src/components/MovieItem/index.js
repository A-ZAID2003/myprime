import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { IoClose } from 'react-icons/io5';
import 'reactjs-popup/dist/index.css';
import './index.css';

const MovieItem = ({ movieDetails }) => {
  const { thumbnailUrl, videoUrl } = movieDetails;

  return (
    <div>
      <Popup
        modal
        trigger={<img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={close}
            >
              <IoClose size={20} color="#231f20" /> 
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default MovieItem;
