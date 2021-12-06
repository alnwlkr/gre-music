import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faFire, faBookmark, faWallet } from '@fortawesome/free-solid-svg-icons'


import colors from '../assets/colors'

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div style={styles().container}>
            <div style={styles().footerLine}/>
            <div style={styles().footerBar}>
                <div style={styles().footerItem} onClick={() => navigate('/')}>
                    <FontAwesomeIcon icon={faHome} style={styles().icon}/>
                    <span style={styles().footerText}>Home</span>
                </div>
                <div style={styles().footerItem}>
                    <FontAwesomeIcon icon={faSearch} style={styles().icon}/>
                    <span style={styles().footerText}>Search</span>
                </div>
                <div style={styles().footerItem}>
                    <FontAwesomeIcon icon={faFire} style={styles().icon}/>
                    <span style={styles().footerText}>Discover</span>
                </div>
                <div style={styles().footerItem}>
                    <FontAwesomeIcon icon={faBookmark} style={styles().icon}/>
                    <span style={styles().footerText}>Library</span>
                </div>
                <div style={styles().footerItem} onClick={() => navigate("/wallet")}>
                    <FontAwesomeIcon icon={faWallet} style={styles().icon}/>
                    <span style={styles().footerText}>Wallet</span>
                </div>
            </div>
        </div>
    )
}

const styles = () => ({
    container: {
        backgroundColor: colors.white,
        position: 'fixed',
        bottom: 0,
        width: '100%'
    },
    footerLine: {
        backgroundColor: colors.gray3,
        opacity: 0.3,
        height: 1,
        width: '100%',
    },
    footerBar: {
        borderWidth: 5,
        minHeight: 55,
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-around'
    },
    footerItem:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        fontSize: 18,
        color: colors.black
    },
    footerText: {
        fontSize: 10,
        color: colors.black,
        fontFamily: 'Sans-serif',
        marginTop: 6,
    },
})
export default Footer