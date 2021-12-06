import React from 'react'
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSearch, faFire, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import colors from '../assets/colors'

const BalanceCard = (props) => {
    const navigate = useNavigate();

    return (
        <div style={styles().container}>
            <div style={styles(props.color).cardContainer}>
                <span style={styles().balanceText}>{props.title}</span>
                <div style={styles().rowContainer}>
                    {props.value.map((val) => {
                        return (
                            <div style={styles().balanceContainer}>
                                <span style={styles().tokenText}>{val.text}</span>
                                <span style={styles().token}> {val.currency}</span>
                            </div>
                        )
                    })}     
                    <div style={styles().iconContainer} onClick={() => navigate(props.location)}>
                        <FontAwesomeIcon icon={faChevronRight} style={styles(props.color).icon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = (color) => ({
    container: {
        minWidth: 120,
        minHeight: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
    },
    cardContainer: {
        width: '100%',
        minHeight: 80,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around ',
        backgroundColor: color,
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15
    },
    balanceContainer: {
        flexDirection: 'row'
    },
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    balanceText: {
        color: colors.white,
        fontSize: 11,
    },
    tokenText: {
        fontSize: 22,
        color: colors.white,
        fontFamily: 'Arial black',
        fontWeight: 'bold'
    },
    token: {
        color: colors.white,
        fontSize: 10,
        fontFamily: 'Arial black',
    },
    artistText: {
        fontSize: 9,
        color: colors.gray3,
        fontFamily: 'Arial black',
        fontWeight: 'bold'
    },
    iconContainer: {
        height: 30,
        width: 30,
        borderRadius: 20,
        backgroundColor: colors.white,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center'
    },
    icon: {
        fontSize: 14,
        color: color
    },
})
export default BalanceCard