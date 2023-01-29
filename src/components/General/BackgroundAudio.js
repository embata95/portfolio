import Sound from 'react-sound'
import mySong from '../../background_music.wav'
import {useState} from "react";

const Player = (
    handleSongPlaying,
    handleSongFinished
) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <>
            <Sound
                url={mySong}
                playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
                loop={true}
                />
            <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? 'Stop' : 'Play'}</button>
        </>
    )
}

export default Player