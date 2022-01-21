import React from 'react'
import CircularSlider from '@fseehawer/react-circular-slider';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faFastForward, faFastBackward, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import colors from '../assets/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeCard from '../components/HomeCard'
import HomeArtistCard from '../components/HomeArtistCard'
import TransactionCard from '../components/TransactionCard'



import sample from '../assets/images/sample.jpg'
import sample2 from '../assets/images/sample2.jpeg'
import sample3 from '../assets/images/sample3.jpeg'
import sample4 from '../assets/images/sample4.jpeg'
import solanaLogo from '../assets/images/solana.png'

import telic from '../assets/images/telic.jpg'
import tvto from '../assets/images/tvto.jpeg'
import borleo from '../assets/images/borleo.jpeg'

const MusicPlayer = () => {
    return (
        <div>
            <Header /> 
            <div style={styles().containerHome}>
                {/* <div style={styles().titleContainer}>
                    <div style={styles().balanceContainer}>
                        <span style={styles().homeText}>188,209</span>
                    </div>
                </div> */}
            </div>
            <div style={styles().optionsContainer}>
                <div style={styles().cover}>
                    <div style={styles().playerContainer} />
                    <CircularSlider
                        label="savings"
                        labelColor="#005a58"
                        knobColor={colors.blue}
                        progressColorFrom={colors.blue}
                        progressColorTo={colors.blue}
                        trackColor="#eeeeee"
                        trackSize={2}
                        onChange={ value => { console.log(value); } }
                        hideKnob={true}
                        width={260}
                    />
                </div>
                <div style={styles().titleContainer}>
                    <span style={styles().songTitleText}>Laro</span>
                    <span style={styles().artistText}>Autotelic</span>
                </div>
                <div style={styles().controlsContainer}>
                    <FontAwesomeIcon icon={faFastBackward} style={styles().icon}/>
                    <div style={styles().playButtonContainer}>
                        <FontAwesomeIcon icon={faPlay} style={styles().playIcon}/>
                    </div>
                    <FontAwesomeIcon icon={faFastForward} style={styles().icon}/>
                </div>
            </div>
            <Footer />
        </div>

    )
}

const styles = () => ({
    containerHome: {
        paddingTop: 99,
        paddingBottom: 60,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
    },
    optionsContainer: {
        borderRadius: 40,
        width: '100%',
        height: 500,
        marginTop: -70,
        paddingTop: 50,
        backgroundColor: colors.white,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    playerContainer: {
        backgroundImage: `url(${telic})`,
        // height: '100%',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '100%',
        border: '1px solid',
        borderColor: colors.gray3,
        height: 200,
        width: 200,
        position: 'absolute',
        zIndex: 9999
    },
    cover: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 12,
        color: colors.gray3,
        fontFamily: 'Arial black',
        fontWeight: 'bold'
    },
    playButtonContainer: {
        backgroundColor: colors.blue,
        height: 75,
        width: 75,
        borderRadius: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    playIcon: {
        color: colors.white,
        fontSize: 18
    },
    icon: {
        fontSize: 18
    },
    controlsContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '60%'
    }
});

export default MusicPlayer