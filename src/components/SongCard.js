import React from 'react'
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faHeart, faFastBackward, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

import colors from '../assets/colors'

const SongCard = (props) => {
    const navigate = useNavigate();
    return (
        <div style={styles().songContainer}>
            <div style={styles().rowContainer}>
                <div style={styles().songPlayButtonContainer} onClick={() => navigate("/music-player")}>
                    <FontAwesomeIcon icon={faPlay} style={styles().songPlayIcon}/>
                </div>
                <span style={styles().songTitle}>{props.title}</span>
            </div>
            <div style={styles().rowContainer}>
                <span style={styles().songDuration}>{props.duration}</span>
                <FontAwesomeIcon icon={faHeart} style={styles().heartIcon}/>
            </div>
        </div>
    )
}

const styles = () => ({
    songContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingLeft: 45,
        paddingRight: 30,
    },
    songTitle: {
        fontSize: 15,
        color: colors.black,
        width: 60,
        marginLeft: 20,
    },
    songDuration: {
        fontSize: 14,
        color: colors.gray3,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: 32
    },
    songPlayButtonContainer: {
        height: 18,
        width: 18,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        borderColor: colors.gray3,
    },
    songPlayIcon: {
        color: colors.black,
        fontSize: 6
    },
    heartIcon: {
        color: colors.black,
        fontSize: 10,
        marginLeft: 35,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default SongCard