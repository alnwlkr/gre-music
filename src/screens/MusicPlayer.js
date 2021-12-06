import React from 'react'
import colors from '../assets/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeCard from '../components/HomeCard'
import HomeArtistCard from '../components/HomeArtistCard'


import sample from '../assets/images/sample.jpg'
import sample2 from '../assets/images/sample2.jpeg'
import sample3 from '../assets/images/sample3.jpeg'
import sample4 from '../assets/images/sample4.jpeg'

import telic from '../assets/images/telic.jpg'
import tvto from '../assets/images/tvto.jpeg'
import borleo from '../assets/images/borleo.jpeg'

const MusicPlayer = () => {
    return (
        <div>
            <span></span>
        </div>

    )
}

const styles = () => ({
    extendedHeader: {
        height: 500,
        width: '100%',
        backgroundColor: 'blue',
        position: 'absolute',
        zIndex: 1,
    },
    containerHome: {
        paddingTop: 99,
        paddingBottom: 99,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        borderRadius: 20,
    },
    carousel: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'scroll',
        marginTop: -80,
    },
    titleContainer: {
        display: 'flex',
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
    },
    homeText: {
        paddingLeft: 20,
        color: colors.white,
        fontSize: 24,
        fontFamily: 'Arial Black',
        fontWeight: 'bold'
    },
    subTitleContainer: {
        marginTop: 30,
        marginBottom: 20,
        display: 'flex',
        width: '100%',
        flex: 1,
        alignItems: 'flex-start',
    },
    homeText2: {
        paddingLeft: 20,
        color: colors.black,
        fontSize: 24,
        fontFamily: 'Arial Black',
        fontWeight: 'bold'
    }
})
export default MusicPlayer