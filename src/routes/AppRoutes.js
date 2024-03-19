import { Route,Routes } from 'react-router-dom';
import React from 'react'
import Map from '../component/Map';

import Bin from '../component/Bin';
import Login from '../component/Login';

// import PrivateRoute from './PrivateRoute';
import Setting from '../component/Setting';
import Thegioididong from '../Brand/thegioididong';
import Register from '../component/Register';
import Chart from '../component/InforBin/Chart/Chart';

import History from '../component/InforBin/History/History';
import Detail from '../component/InforBin/Detail/Detail';
import Users from '../component/Users';
import VoucherUser from '../component/VoucherUser';
import Shoppe from '../Brand/Shoppe';
import Grab from '../Brand/Grab';

import Statistics from '../component/Statistics';
import Lotte from '../Brand/Lotte';
function AppRoutes() {
  return (
    <div>
            <Routes>
                <Route path="/" element={ <Login/>} />
                <Route path="/map" element={ <Map/>} />
                <Route path="/bin" element={ <Bin/>} />
                <Route path="/setting" element={ <Setting/>} />
                <Route path="/users" element={ <Users/>} />
                <Route path="/statistics" element={ <Statistics/>} />
               
                <Route path="/register" element={ <Register/>} />



                <Route path="/voucheruser" element={ <VoucherUser/>} />

                <Route path="/voucher/shoppe" element={ <Shoppe/>} />
                <Route path="/voucher/grab" element={ <Grab/>} />
                <Route path="/voucher/lotte" element={ <Lotte/>} />
                <Route path="/voucher/thegioididong" element={ <Thegioididong/>} />
                
               


                <Route path="/bin/:id/chart" element={<Chart/>} />
               
                <Route path="/bin/:id/history" element={<History/>} />
                <Route path="/bin/:id/detail" element={<Detail/>} />
            </Routes> 
            {/* <PrivateRoute path="/users"> */}
                      
        
            {/* </PrivateRoute> */}
    </div>
  )
}

export default AppRoutes
