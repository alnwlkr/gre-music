import React from 'react'
import colors from '../assets/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeCard from '../components/HomeCard'

const Home = () => {
    return (
        <div>
            <Header />
            <div style={styles().containerHome}>
                <div style={styles().titleContainer}>
                    <span style={styles().homeText}>New Releases</span>
                </div>
            </div>
            <div style={styles().carousel}>
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
                <HomeCard />
            </div>
            <Footer />
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
        fontFamily: 'Sans-serif',
        fontWeight: 'bold'
    }
})
export default Home