import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faFire, faBookmark } from '@fortawesome/free-solid-svg-icons'

import colors from '../assets/colors'

const HomeCard = (props) => {
    const navigate = useNavigate();

    return (
        <div style={styles(props.imgBg).container} onClick={() => navigate("/music-player")}>
            <span>{props.title}</span>
        </div>
    )
}

const styles = (imgBg) => ({
    container: {
        width: '90%',
        minWidth: 120,
        minHeight: 160,
        margin: 6,
        backgroundImage: `url(${imgBg})`,
        // height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: 10,
    },
    icon: {
        fontSize: 18,
        color: colors.white
    },
    footerText: {
        fontSize: 10,
        color: colors.white,
        fontFamily: 'Sans-serif',
        marginTop: 6,
    },
})
export default HomeCard