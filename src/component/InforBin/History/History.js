import React ,{useState} from 'react'
import './history.scss'
import { useParams } from 'react-router-dom'
import {list} from '../../API_TrashBin/List'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,Link} from "react-router-dom";
import {  toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import history from '../../../asset/images/history.png'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function History() {
    const {id} = useParams()
    const [selectedDateFrom, setselectedDateFrom] = useState(null);
    const [selectedDateTo, setselectedDateTo] = useState(null);
    const [selectedDateOnly, setselectedDateOnly] = useState(null);
    
    return (
        <div className='father'>
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
            <div className='father-date-history'>
              
              <div className='div-only'>
                      <div>
                        <h2>Thống kê trong ngày :</h2>
                      </div>
                      <div className='ReactDatePicker'>
                        <ReactDatePicker
                        
                        selected={selectedDateOnly}
                        onChange={date => setselectedDateOnly(date)}
                        dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                      />
                      </div>
                      
              </div>
              <div className='div-from-to'>
                          <div className='from-title-input'>
                                  <div>
                                    <h2>Thống kê từ ngày :</h2>
                                  </div>
                                  <div className='ReactDatePicker'>
                                    <ReactDatePicker
                                    
                                    selected={selectedDateFrom}
                                    onChange={date => setselectedDateFrom(date)}
                                    dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                                    />
                                  </div>    
                          </div>
                          <div className='from-title-input'>
                                  <div>
                                      <h2>đến ngày :</h2>
                                  </div>
                                  <div className='ReactDatePicker'>
                                      <ReactDatePicker
                                       
                                        selected={selectedDateTo}
                                        onChange={date => setselectedDateTo(date)}
                                        dateFormat="dd/MM/yyyy" // Định dạng ngày tháng (tùy chọn)
                                      />
                                  </div>   
                          </div>
                          <div>
                            <button type="button" class="btn btn-success">Xuất thành file Excel</button>
                          </div>
                          
              </div>
            
              <div className='div-img-history'>
                  <img className='img-history' src={history} alt="history" />
              </div>
            </div>
    </div>
  )
}

export default History
