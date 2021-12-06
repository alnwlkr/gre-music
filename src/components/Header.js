import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryThreeQuarters, faSignal, faWifi, faUserCircle } from '@fortawesome/free-solid-svg-icons'


import colors from '../assets/colors'

const Header = (props) => {

    const renderHeader = () => {
        return (       
            <div style={styles(props.color).container}>
                <div style={styles().statusBar}>
                    <div>
                        <span style={styles().statusBarText}>12:04</span>
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faSignal} style={styles().batteryIcon}/>
                        <FontAwesomeIcon icon={faWifi} style={styles().batteryIcon}/>
                        <FontAwesomeIcon icon={faBatteryThreeQuarters} style={styles().batteryIcon}/>
                    </div>
                </div>
                <div style={styles().headerBar}>

                </div>
            </div>
        );
    };

    const renderWhiteHeader = () => {
        return (       
            <div style={styles().lightContainer}>
                <div style={styles().statusBar}>
                    <div>
                        <span style={styles().lightStatusBarText}>12:04</span>
                    </div> 
                    <div>
                        <FontAwesomeIcon icon={faSignal} style={styles().lightBatteryIcon}/>
                        <FontAwesomeIcon icon={faWifi} style={styles().lightBatteryIcon}/>
                        <FontAwesomeIcon icon={faBatteryThreeQuarters} style={styles().lightBatteryIcon}/>
                    </div>
                </div>
                <div style={styles().headerBar}>

                </div>
            </div>
        );
    };

    
    return props.isLight ? renderWhiteHeader() : renderHeader();
}

const styles = (color) => ({
    container: {
        backgroundColor: color ? color : colors.blue,
        position: 'fixed',
        zIndex: 99999,
        width: '100%',
    },
    lightContainer: {
        backgroundColor: colors.white,
        position: 'fixed',
        zIndex: 99999,
        width: '100%',
    },
    statusBar: {
        display: 'flex',
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 12,
        paddingRight: 12,
    },
    headerBar: {
        minHeight: 48,
        paddingLeft: 14,
        paddingRight: 14,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    },
    batteryIcon: {
        fontSize: 12,
        color: colors.white,
        paddingLeft: 3,
        paddingRight: 3,
    },
    userIcon: {
        fontSize: 22,
        color: colors.white
    },
    headerText: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Sans-serif'
    },
    statusBarText: {
        fontSize: 12,
        color: colors.white,
        paddingLeft: 8,
        paddingRight: 8,
        lineHeight: '100%',
    },
    lightBatteryIcon: {
        fontSize: 12,
        color: colors.black,
        paddingLeft: 3,
        paddingRight: 3,
    },
    lightUserIcon: {
        fontSize: 22,
        color: colors.black
    },
    lightHeaderText: {
        fontSize: 20,
        color: colors.black,
        fontFamily: 'Sans-serif'
    },
    lightStatusBarText: {
        fontSize: 12,
        color: colors.black,
        paddingLeft: 8,
        paddingRight: 8,
        lineHeight: '100%',
    },
})
export default Header