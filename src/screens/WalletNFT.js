import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faQrcode, faSearch } from '@fortawesome/free-solid-svg-icons'
import colors from '../assets/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NFTCard from '../components/NFTCard'
import HomeArtistCard from '../components/HomeArtistCard'
import TransactionCard from '../components/TransactionCard'



import nft1 from '../assets/images/nft1.png'
import nft2 from '../assets/images/nft2.png'
import nft3 from '../assets/images/nft3.png'
import nft4 from '../assets/images/nft4.jpeg'
import nft5 from '../assets/images/nft5.png'

import nft6 from '../assets/images/nft6.jpeg'
import nft7 from '../assets/images/nft7.jpeg'
import nft8 from '../assets/images/nft8.png'
import nft9 from '../assets/images/nft9.png'
import nft10 from '../assets/images/nft10.png'

const WalletNFT = () => {
    return (
        <div>
            <Header color={colors.orange}/> 
            <div style={styles().containerHome}>
                <div style={styles().titleContainer}>
                    <div style={styles().balanceContainer}>
                        <span style={styles().homeText}>My Collection</span>
                    </div>
                </div>
            </div>
            <div style={styles().optionsContainer}>
                <div style={styles().searchBarContainer}>
                    <div style={styles().searchBar}>
                        <span style={styles().searchBarText}>Search</span>
                        <FontAwesomeIcon icon={faSearch} style={styles().icon}/>
                    </div>
                    {/* <span style={styles().homeText2}>Today</span>
                    <span style={styles().homeText3}>This Week</span>
                    <span style={styles().homeText3}>This Month</span> */}
                </div>
                <div style={styles().transactionsContainer}>
                    <div style={styles().nftContainer}>
                        <NFTCard img={nft1} collection={'Autotelic Collection'} title={'Space Monkey!'}/>
                        <NFTCard img={nft2} collection={'TVTO'} title={'#0019'}/>
                    </div>
                    <div style={styles().nftContainer}>
                        <NFTCard img={nft3} collection={'Autotelic Collection'} title={"I'm Vengeance"}/>
                        <NFTCard img={nft4} collection={'Autotelic Collection'} title={'Free Guy'}/>
                    </div>
                    <div style={styles().nftContainer}>
                        <NFTCard img={nft5} collection={'Autotelic Collection'} title={'High Monkey'}/>
                        <NFTCard img={nft6} collection={'Autotelic Collection'} title={'KAWS x Disney'}/>
                    </div>
                    <div style={styles().nftContainer}>
                        <NFTCard img={nft7} collection={'TVTO'} title={'Valhalla'}/>
                        <NFTCard img={nft8} collection={'Autotelic Collection'} title={'Rocket'}/>
                    </div>
                    <div style={styles().nftContainer}>
                        <NFTCard img={nft9} collection={'Autotelic Collection'} title={'#0019'}/>
                        <NFTCard img={nft10} collection={'TVTO'} title={'Sadge'}/>
                    </div>
                    <div style={styles().expandButtonContainer}>
                        <div style={styles().expandButton}>
                            <span style={styles().seeMoreText}>See more</span>
                        </div>
                    </div>
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
        backgroundColor: colors.orange,
    },
    titleContainer: {
        display: 'flex',
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    homeText: {
        color: colors.white,
        fontSize: 20,
        fontFamily: 'Arial Black',
        fontWeight: 'bold'
    },
    phpText: {
        color: colors.white,
        fontSize: 14,
    },
    phpCurrency: {
        color: colors.white,
        fontSize: 8,
    },
    optionsContainer: {
        borderRadius: 40,
        height: 100,
        width: '100%',
        marginTop: -40,
        paddingTop: 30,
        backgroundColor: colors.white
    },
    transactionsContainer: {
        marginTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        height: 500,
        overflow: 'scroll',
    },
    token: {
        color: colors.white,
        fontSize: 10,
        fontFamily: 'Arial black',
    },
    icon: {
        fontSize: 16,
        color: colors.gray3,
    },
    iconsContainer: {
        paddingTop: 14,
        display: 'flex',
        flexDirection: 'row',
    },
    iconContainer: {
        height: 25,
        backgroundColor: colors.white,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
    },
    iconButtonText: {
        fontSize: 8,
        color: colors.blue,
        fontFamily: 'Arial black',
        marginLeft: 4,
    },
    searchBarContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchBar: {
        width: '80%',
        height: 30,
        backgroundColor: colors.gray4,
        borderRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    searchBarText: {
        color: colors.gray3,
        fontSize: 14,
        fontFamily: 'Arial Black',
    },
    homeText2: {
        paddingLeft: 20,
        color: colors.black,
        fontSize: 16,
        fontFamily: 'Arial Black',
    },
    homeText3: {
        paddingLeft: 20,
        color: colors.gray3,
        fontSize: 16,
        fontFamily: 'Arial Black',
    },
    expandButtonContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 30,
        paddingBottom: 20,
    },
    expandButton: {
        maxWidth: 200,
        border: '2px solid',
        borderColor: colors.gray3,
        borderRadius: 10,
        paddingLeft: 60,
        paddingRight: 60,
        paddingTop: 10,
        paddingBottom: 10,
    },
    seeMoreText: {
        fontSize: 12,
        fontFamily: 'Arial Black',
    },
    nftContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    }
});

export default WalletNFT