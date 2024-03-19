import React,{useState} from 'react'
import './chart.scss'
import '../styleheaderbin.scss'
import { useParams } from 'react-router-dom'
import list from '../../API_TrashBin/List'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,Link} from "react-router-dom";
import {  toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import chart from '../../../asset/images/chart.png'
import ReactDatePicker from 'react-datepicker';
function Chart() {
    const {id} = useParams()
    const [selectedDateFrom, setselectedDateFrom] = useState(null);
    const [selectedDateTo, setselectedDateTo] = useState(null);
    const [selectedDateOnly, setselectedDateOnly] = useState(null);
  return (
    <div className='father-chart'>
                <ul className='ul-header-bin'>
                   <li>
                       <Link  className='nav-link' to={`/bin/${id}/detail`}>Detail</Link>
                   </li>
                   <li>
                       <Link  className='nav-link' to={`/bin/${id}/history`}>History</Link>
                   </li>

                   <li>
                       <Link  className='nav-link' to={`/bin/${id}/chart`}>Chart</Link>
                   </li>

                </ul>  
                <div className='div-select-only-fromto-char'>
                    
                    <div className='div-select-only'>
                            <h2>Only : </h2>
                            <ReactDatePicker
                              selected={selectedDateOnly}
                              onChange={date => setselectedDateOnly(date)}
                              dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                            />
                    </div>
                    <div className='div-select-fromto'>
                            <div className='div-from'>
                                    <h2>From : </h2>
                                    <ReactDatePicker
                                      selected={selectedDateFrom}
                                      onChange={date => setselectedDateFrom(date)}
                                      dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                                    />
                            </div>
                            <div className='div-to'>
                                    <h2>To : </h2>
                                    <ReactDatePicker
                                      selected={selectedDateTo}
                                      onChange={date => setselectedDateTo(date)}
                                      dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                                    />
                            </div>
                            
                    </div>     
                   
                    <div className='div-img-map'>
                        <img src={chart} alt="chart" />
                    </div>
      
                   
                </div>
           
           
     
    </div>
  )
}

export default Chart
