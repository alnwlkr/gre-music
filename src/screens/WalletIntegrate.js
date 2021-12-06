import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faQrcode, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
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

const WalletIntegrate = () => {
    return (
        <div>
            <Header /> 
            <div style={styles().containerHome}>
                <div style={styles().titleContainer}>
                    <div style={styles().balanceContainer}>
                        <span style={styles().homeText}>188,209</span>
                        <span style={styles().token}>  GRE</span>
                    </div>
                    {/* <div style={styles().balanceContainer}>
                        <span style={styles().phpText}>= 4,021,199</span>
                        <span style={styles().phpCurrency}>   PHP</span> 
                    </div> */}
                    <div style={styles().iconsContainer}>
                        <div style={styles().iconContainer}>
                            <FontAwesomeIcon icon={faChevronUp} style={styles().icon}/>
                            <span style={styles().iconButtonText}>SEND</span>
                        </div>
                        <div style={styles().iconContainer}>
                            <FontAwesomeIcon icon={faChevronDown} style={styles().icon}/>
                            <span style={styles().iconButtonText}>RECEIVE</span>
                        </div>
                        <div style={styles().iconContainer}>
                            <FontAwesomeIcon icon={faQrcode} style={styles().icon}/>
                            <span style={styles().iconButtonText}>SCAN</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles().optionsContainer}>
                <div style={styles().subTitleContainer}>
                    <span style={styles().homeText2}>Today</span>
                    <span style={styles().homeText3}>This Week</span>
                    <span style={styles().homeText3}>This Month</span>
                </div>
                <div style={styles().transactionsContainer}>
                    <TransactionCard img={solanaLogo} transactionType={'Receive'} transactionHash={'9EmBma6TX8HjkhUfqCbMrxcFzLGtmBHSh4MJpVkfCCet'} isCredit={true} value={'182'}/>
                    <TransactionCard img={telic} transactionType={'Purchased NFT'} transactionHash={'9EmBma6TX8HjkhUfqCbMrxcFzLGtmBHSh4MJpVkfCCet'} isCredit={false} value={'403'}/>
                    <TransactionCard img={solanaLogo} transactionType={'Send'} transactionHash={'9EmBma6TX8HjkhUfqCbMrxcFzLGtmBHSh4MJpVkfCCet'} isCredit={false} value={'70'}/>
                    <TransactionCard img={solanaLogo} transactionType={'Send'} transactionHash={'9EmBma6TX8HjkhUfqCbMrxcFzLGtmBHSh4MJpVkfCCet'} isCredit={false} value={'199'}/>
                    <TransactionCard img={solanaLogo} transactionType={'Receive'} transactionHash={'9EmBma6TX8HjkhUfqCbMrxcFzLGtmBHSh4MJpVkfCCet'} isCredit={true} value={'17,122'}/>
                    <TransactionCard img={solanaLogo} transactionType={'Receive'} transactionHash={'9EmBma6TX8HjkhUfqCbMrxcFzLGtmBHSh4MJpVkfCCet'} isCredit={true} value={'90,002'}/>
                    <TransactionCard img={solanaLogo} transactionType={'Receive'} transactionHash={'9EmBma6TX8HjkhUfqCbMrxcFzLGtmBHSh4MJpVkfCCet'} isCredit={true} value={'55'}/>
                    <TransactionCard img={solanaLogo} transactionType={'Receive'} transactionHash={'9EmBma6TX8HjkhUfqCbMrxcFzLGtmBHSh4MJpVkfCCet'} isCredit={true} value={'100'}/>
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
        backgroundColor: colors.blue,
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
        fontSize: 32,
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
        color: colors.blue,
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
    subTitleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    homeText2: {
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
    }
});

export default WalletIntegrate