import React from 'react'
import CircularSlider from '@fseehawer/react-circular-slider';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faHeart, faFastBackward, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import colors from '../assets/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeCard from '../components/HomeCard'
import SongCard from '../components/SongCard'
import TransactionCard from '../components/TransactionCard'



import sample from '../assets/images/sample.jpg'
import sample2 from '../assets/images/sample2.jpeg'
import sample3 from '../assets/images/sample3.jpeg'
import sample4 from '../assets/images/sample4.jpeg'
import solanaLogo from '../assets/images/solana.png'

import telic from '../assets/images/telic.jpg'
import telic2 from '../assets/images/telic2.jpeg'

import tvto from '../assets/images/tvto.jpeg'
import borleo from '../assets/images/borleo.jpeg'

const ArtistSongs = () => {
    return (
        <div>
            <div style={styles().containerHome}>
                <span style={styles().artistText}>Autotelic</span>
                <div style={styles().genreContainer}>
                    <div style={styles().genreCard}>
                        <span style={styles().genreText}>Indie</span>
                    </div>
                    <div style={styles().genreCard}>
                        <span style={styles().genreText}>Pop</span>
                    </div>
                </div>
            </div>
            <div style={styles().playButtonContainer}>
                <FontAwesomeIcon icon={faPlay} style={styles().playIcon}/>
            </div>
            <div style={styles().optionsContainer}>
                <div style={styles().albumTextContainer}>
                    <span style={styles().albumText}>Popular</span>
                </div>
                <SongCard title={'Laro'} duration={'5:20'}/>
                <SongCard title={'Languyin'} duration={'4:24'}/>
                <SongCard title={'Takipsilim'} duration={'4:57'}/>
                <SongCard title={'Ikaw'} duration={'3:49'}/>
                <SongCard title={'Gising'} duration={'4:28'}/>
                <div style={styles().albumTextContainer}>
                    <span style={styles().albumText}>Papunta Pabalik</span>
                </div>
                <SongCard title={'Laro'} duration={'5:20'}/>
                <SongCard title={'Languyin'} duration={'4:24'}/>
                <SongCard title={'Takipsilim'} duration={'4:57'}/>
                <SongCard title={'Ikaw'} duration={'3:49'}/>
                <SongCard title={'Gising'} duration={'4:28'}/>
                <SongCard title={'Laro'} duration={'5:20'}/>
                <SongCard title={'Languyin'} duration={'4:24'}/>
                <SongCard title={'Takipsilim'} duration={'4:57'}/>
                <SongCard title={'Ikaw'} duration={'3:49'}/>
                <SongCard title={'Gising'} duration={'4:28'}/>
            </div>
            <Footer />
        </div>

    )
}

const styles = () => ({
    containerHome: {
        paddingTop: 20,
        paddingBottom: 140,
        minHeight: 300,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundImage: `url(${telic2})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    optionsContainer: {
        borderRadius: 40,
        width: '100%',
        height: 300,
        marginTop: -70,
        paddingTop: 30,
        paddingBottom: 50,
        backgroundColor: colors.white,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    songTitleText: {
        fontSize: 16,
        color: colors.black,
        fontFamily: 'Arial black',
        fontWeight: 'bold'
    },
    artistText: {
        fontSize: 34,
        color: colors.white,
        fontFamily: 'Arial black',
        fontWeight: 'bold',
        marginLeft: 20,
    },
    playButtonContainer: {
        backgroundColor: colors.blue,
        height: 60,
        width: 60,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        position: 'absolute',
        right: 30,
        marginTop: -100,
    },
    playIcon: {
        color: colors.white,
        fontSize: 16
    },
    genreText: {
        fontSize: 12,
        color: colors.white,
        fontWeight: 'bold'
    },
    icon: {
        fontSize: 18
    },
    genreCard: {
        backgroundColor: colors.blue,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 5,
        maxWidth: 200,
        marginRight: 10,
    },
    genreContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 20,
    },
    albumTextContainer: {
        paddingLeft: 40,
        marginBottom: 20,
        marginTop: 20,
    },
    albumText: {
        fontSize: 22,
        color: colors.black,
        fontWeight: 'bold',
        fontFamily: 'Arial black',
    },
});

export default ArtistSongs