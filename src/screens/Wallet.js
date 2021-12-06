import React from 'react'
import { useNavigate } from "react-router-dom";
import colors from '../assets/colors'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeCard from '../components/HomeCard'
import WalletCard from '../components/WalletCard'
import BalanceCard from '../components/BalanceCard'
import TransactionCard from '../components/TransactionCard'


import sample from '../assets/images/sample.jpg'
import sample2 from '../assets/images/sample2.jpeg'
import sample3 from '../assets/images/sample3.jpeg'
import sample4 from '../assets/images/sample4.jpeg'
import solanaLogo from '../assets/images/solana.png'


import telic from '../assets/images/telic.jpg'
import tvto from '../assets/images/tvto.jpeg'
import borleo from '../assets/images/borleo.jpeg'

const Wallet = () => {
    const navigate = useNavigate();
    const walletText = [{
        text: '188,209',
        currency: 'GRE'
    }];

    const nftText = [{
        text: '7',
        currency: 'Autotelic Collection'
    },
    {
        text: '3',
        currency: 'TVTO Saga'
    }];
    
    return (
        <div>
            <Header isLight={true}/>
            <div style={styles().containerHome}>
                <div style={styles().titleContainer}>
                    <span style={styles().homeText}>Wallet</span>
                </div>
            </div>
            <BalanceCard title={'TOKENS'} color={colors.blue} value={walletText} location={'/wallet-integrate'}/>
            <BalanceCard title={'NFTs'} color={colors.orange} value={nftText} location={'/wallet-nft'}/>
            <div style={styles().subTitleContainer}>
                <span style={styles().homeText2}>Today</span>
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
            <Footer />
        </div>

    )
}

const styles = () => ({
    containerHome: {
        paddingTop: 99,
        paddingBottom: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'sticky'
    },
    cardContainer: {
        borderRadius: 30,
        paddingBottom: 40,
        height: '100%',
        marginTop: -30,
        backgroundColor: 'white',
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
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    homeText: {
        paddingLeft: 20,
        color: colors.black,
        fontSize: 32,
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
        fontSize: 16,
        fontFamily: 'Arial Black',
    },
    transactionsContainer: {
        height: 290,
        overflow: 'scroll',
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
        color: colors.gray2,
    }
})
export default Wallet;