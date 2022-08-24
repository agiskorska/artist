import React, { useEffect } from 'react'
import styles from './Card.module.css'

export const Card = ({album, songs}) => {
  const [button, setButton] = React.useState("Show Songs");
  const [currentSongs, setCurrentSongs] = React.useState([])

  useEffect(() => {
    const songsToPush = songs.filter(song => song.album == album.title)
    songsToPush ? setCurrentSongs(songsToPush) : ''
  }, [button])

  const showSongs = () => {
    if(button=="Show Songs") {
      setButton("Hide songs");
    } else {
      setButton("Show Songs");
      setCurrentSongs([])
    }
    console.log(currentSongs)
  }

  return (
    <div key={album.id} className={styles.element}>
        <h1>{album.title}</h1>
        <h3>{album.year}</h3>
        <button onClick={showSongs} value={album.title}>{button}</button>
        {button=="Hide songs" ? currentSongs.map(song => <div key={song.id}><h3>{song.title}</h3><h5><i>{song.album}</i></h5><p>{song.lyrics}</p></div>) : ''}
    </div>
  )
}

export default Card;
