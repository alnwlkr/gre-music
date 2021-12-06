import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import colors from './assets/colors'
import Home from './screens/Home';
import MusicPlayer from './screens/MusicPlayer';
import Wallet from './screens/Wallet';
import WalletIntegrate from './screens/WalletIntegrate';
import WalletNFT from './screens/WalletNFT';

const App = () => {
  return (
    <div style={styles().bodyContainer} className="App">
      <BrowserRouter>
        {/* <div>
          <Route render={({ location }) => {
              return location.pathname.indexOf('/admin') === -1 ? <Header/> : null 
            }} />
        </div> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/music-player' element={<MusicPlayer />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/wallet-integrate" element={<WalletIntegrate />} />
            <Route path="/wallet-nft" element={<WalletNFT />} />
            {/* <Route path={['/admin', '/admin-student', '/admin-career', '/admin-recruitment', '/admin-partner']}>
              <Admin/>
            </Route>
            <Route path={["/home", "/pricing", "/payment", "/on-boarding", "/home-subscribed", "/lesson"]}>
              <Top/>
            </Route>
            <Route path={["/login", "/register", "/payment-info"]}>
              <OnBoarding/>
            </Route> */}
          </Routes>
      </BrowserRouter>
    </div>
  )
  
}

const styles = () => ({
  bodyContainer: {
    display: 'block',
    padding: 0,
    backgroundColor: colors.white,
    width: '100%',
    height: '100vh',
  }
})


export default App;
