import React from 'react'

import colors from '../assets/colors'

type Props = {
    img: any,
    transactionType: any,
    transactionHash: any,
    isCredit: any,
    value: any
}

const NFTCard = (props: Props) => {
    return (
        <div style={styles().container}>
            <div style={styles(props.img).nftImg} />
            <div style={styles().textContainer}>
                <span style={styles().collectionText}>{props.collection}</span>
                <span style={styles().titleText}>{props.title}</span>
            </div>
        </div>
    )
}

const styles = (img) => ({
    container: {
        border: '1px solid',
        borderRadius: 20,
        minHeight: 200,
        width: '45%',
    },
    nftImg: {
        backgroundImage: `url(${img})`,
        // height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '70%',
        width: '100%',
    },
    collectionText: {
        fontSize: 10,
        fontFamily: 'Arial black',
        color: colors.gray3
    },
    titleText: {
        fontSize: 11,
        fontFamily: 'Arial black',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
    }
})
export default NFTCard