import {AiTwotoneDelete} from 'react-icons/ai'
import './index.css'

import {DeleteButton} from './styledComponents'

const MusicDetailPage = props => {
  const {musicDetails, onSubmitButton} = props
  const {id, imageUrl, name, genre, duration} = musicDetails

  const onClickButton = () => {
    onSubmitButton(id)
  }

  return (
    <div className="musicDetails-card">
      <li className="musicDetails-mini-card">
        <div className="flex-start">
          <img src={imageUrl} alt="track" className="img" />
          <div className="movie-name-card">
            <p className="music-name">{name}</p>
            <p className="movie-genre">{genre}</p>
          </div>
        </div>
        <div className="flex-end">
          <p className="time">{duration}</p>
          <DeleteButton
            type="button"
            data-testid="delete"
            onClick={onClickButton}
          >
            <AiTwotoneDelete className="delete-icons" />
          </DeleteButton>
        </div>
      </li>
    </div>
  )
}

export default MusicDetailPage
