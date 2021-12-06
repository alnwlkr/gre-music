import React from 'react'

import colors from '../assets/colors'

type Props = {
    img: any,
    transactionType: any,
    transactionHash: any,
    isCredit: any,
    value: any
}

const TransactionCard = (props: Props) => {
    const valueSymbol = props.isCredit ? '+' : '-';

    return (
        <div style={styles().container}>
            <div style={styles().cardContainer}>
                <div style={styles().rowContainer}>
                    <div style={styles(props.img).img} />
                    <div style={styles().textContainer}>
                        <span style={styles().transactionText}>{props.transactionType}</span>
                        <span style={styles().hashText}>{props.transactionHash}</span>
                    </div>
                </div>
                <div>
                    <span style={styles(props.isCredit).valueText}>{valueSymbol}{props.value}</span>
                    <span style={styles(props.isCredit).greText}>GRE</span>
                </div>
            </div>
        </div>
    )
}

const styles = (param) => ({
    container: {
        minWidth: 120,
        minHeight: 70,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
    },
    cardContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 8,
        paddingRight: 8,
    },
    img: {
        backgroundImage: `url(${param})`,
        // height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: 40,
        height: 40,
        width: 40,
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 20,
    },
    transactionText: {
        fontSize: 12,
        color: colors.black,
        fontFamily: 'Arial black',
    },
    hashText: {
        flex: 1,
        fontSize: 9,
        color: colors.gray3,
        fontFamily: 'Arial black',
        fontWeight: 'bold',
        maxWidth: 150,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    },
    icon: {
        fontSize: 18,
        color: colors.gray3
    },
    valueText: {
        fontSize: 12,
        color: param ? colors.green : colors.red,
        fontFamily: 'Arial black',
    },
    greText: {
        marginLeft: 5,
        fontSize: 10,
        color: param ? colors.green : colors.red,
    }
})
export default TransactionCard