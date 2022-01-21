import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faFire, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import colors from '../assets/colors'

const HomeArtistCard = (props) => {
    const navigate = useNavigate();

    return (
        <div style={styles().container}>
            <div style={styles().rowContainer} onClick={() => navigate("/artist-songs")}>
                <div style={styles(props.img).profilePic} />
                <div style={styles().textContainer}>
                    <span style={styles().nameText}>{props.name}</span>
                    <span style={styles().artistText}>{props.artist}</span>
                </div>
            </div>
            <FontAwesomeIcon icon={faChevronRight} style={styles().icon}/>
        </div>
    )
}

const styles = (profileImg) => ({
    container: {
        minWidth: 120,
        minHeight: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    profilePic: {
        backgroundImage: `url(${profileImg})`,
        // height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: 40,
        height: 65,
        width: 65,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
    },
    nameText: {
        fontSize: 14,
        color: colors.black,
        fontFamily: 'Arial black',
        fontWeight: 'bold'
    },
    artistText: {
        fontSize: 9,
        color: colors.gray3,
        fontFamily: 'Arial black',
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 18,
        color: colors.gray3
    },
})
export default HomeArtistCard