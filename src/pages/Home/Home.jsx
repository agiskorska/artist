import React, {useEffect, useState} from 'react'
import axios from 'axios';

import styles from './Home.module.css'
import { Card } from '../../components';

function Home({albums}) {

    const [songs, setSongs] = useState([{id:1, name: "lalala", album:'bobob', lyrics:'asdfasdf'}]);

    useEffect(() => {
        const fetchData = async () => {
        const data = await axios.get("https://raw.githubusercontent.com/agiskorska/tune-yards-songs/main/songs.json")
        setSongs(data.data.songs)
        }

        fetchData();

    }, [])

    return (
        <main className={styles.root}>
            { albums.map(album => {
            return <Card key={album.id} album={album} songs={songs}/>
            })}
        </main>
    )
}

export default Home