import React,{useState,useEffect} from 'react'
import './detail.scss'
import { useParams } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink,Link} from "react-router-dom";
import {  toast } from 'react-toastify';
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import ChangeDetailBin from '../../../Change/ChangeDetailBin';
import { GiConfirmed } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
import axios from 'axios';
import { RiDeleteBin6Fill } from "react-icons/ri";
import _ from 'lodash'
function Detail() {    

    const {id} = useParams() 
    const [Bin, setBin] = useState( { 
                    id:0,
                    district_name: "", 
                    street_name:"",
                    lat: "",
                    lng: "",
                    power: "",
                    available : {
                        Organic:"",
                        Inorganic_recyclables: "",
                        Non_recyclables_inorganic:""
                    },
                    compression:{
                        Organic :"",
                        Inorganic_recyclables: "",
                        Non_recyclables_inorganic:""
                    },
                    worker: {
                        name: "",
                        phone: ""
                    },
                    maintenance_date  : "",
                    status: "",
                    connected:false,
                    installation_date : "",
                    warning:{
                        door:false,
                        compress:false
                    }     
    });

        const fetchElement = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/cities/${id}`);
            
            setBin(response.data);
        } catch (error) {
            console.error('Error fetching element:', error);
        }
        };

    useEffect(()=>{  
        fetchElement()
    },[])

    console.log(Bin)
    return (
<>  
    <div className='father-detail'>
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
        <div className='div-father-detail'>
            <div className='div-detail'>
                <Link
                    to="/map"
                    state={{
                            latBin: Bin.lat,
                            lngBin: Bin.lng
                      }}                            
                >
                  <button type="button" class="btn btn-info">Xem vị trí</button>
                </Link>
                <h3>ID: <span>{id}</span></h3>
                <h3>Quận/Huyện: <span>{Bin.district_name}</span></h3>
                <h3>Đường: <span>{Bin.street_name}</span> </h3>
                <h3>Ngày sửa chữa: <span>{Bin.maintenance_date}</span> </h3>
                <h3>Ngày lắp đặt: <span>{Bin.installation_date}</span> </h3>
                <h3>Công nhân phụ trách: <span>{Bin.worker.name}</span> </h3>
                <h3>Số điện thoại của công nhân phụ trách: <span>{Bin.worker.phone}</span> </h3>
                <h3>Trạng thái: <span>{Bin.status === 'normal'? 'Bình thường': 'Đang sửa chữa'}</span> </h3>       
                <Link  
                        to={`/bin/${id}/detail/update`}
                        state={{
                                    ...Bin
                        }}    
                  ><button type="button" class="btn btn-primary">Thay đổi thông tin</button>     
                </Link>
            </div>
            <div className='info-iot'>
                <div>
                    <h1>Lỗi đang xảy ra:</h1>
                    <h3>{Bin.warning.door === true ? <div><IoIosWarning className='icon-warning'/>Không thể ép rác</div> : ''}</h3>
                    <h3>{Bin.warning.compress === true ? <div><IoIosWarning/>Nắp chưa đóng kĩ</div> : ''}</h3>
                </div>
                <div>
                    <div className={`popup-item` }>
                        <div>
                                Organic
                        </div>
                        <div >
                                <RiDeleteBin6Fill className={Bin.available.Organic === 'HIGH' ? 'RED' : (Bin.available.Organic === 'MEDIUM' ? "YELLOW" : "GREEN")}/>
                        </div>
                    </div>
                    <div className='popup-item'>
                        <div>
                            Inorganic Recyclables
                        </div>
                        <div>
                                <RiDeleteBin6Fill className={Bin.available.Inorganic_recyclables === 'HIGH' ? 'RED' : (Bin.available.Inorganic_recyclables === 'MEDIUM' ? "YELLOW" : "GREEN")}/>
                        </div>
                    </div>
                    <div className='popup-item'>
                        <div>
                            Non-recyclable Inorganic
                        </div>
                        <div>
                            <RiDeleteBin6Fill className={Bin.available.Non_recyclables_inorganic === 'HIGH' ? 'RED' : (Bin.available.Non_recyclables_inorganic === 'MEDIUM' ? "YELLOW" : "GREEN")}/>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
  </div>
  </>
  )
}

export default Detail
