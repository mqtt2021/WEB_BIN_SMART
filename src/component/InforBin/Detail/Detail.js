import React,{useState} from 'react'
import './detail.scss'
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
import ChangeDetailBin from '../../../Change/ChangeDetailBin';
import { GiConfirmed } from "react-icons/gi";
import { IoIosWarning } from "react-icons/io";
function Detail() {
    const [showModelChangeDetailBin, setshowModelChangeDetailBin ] = useState(false)
    const {id} = useParams()
    const detail = list.find((item,index)=>{
        return item.id === id
    })

    const handleCloseModalChangeDetailBin = ()=>{
        setshowModelChangeDetailBin(false)
    }
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
                <h3>ID : <span>{id}</span></h3>
                <h3>Quận/Huyện : <span>{detail.location.district}</span></h3>
                <h3>Đường : <span>{detail.location.street}</span> </h3>
                <h3>Version : <span>{detail.Version}</span> </h3>
                <h3>Ngày sửa chữa gần nhất : <span>{detail.maintenance_date}</span> </h3>
                <h3>Ngày lắp đặt : <span>{detail.Installation_date}</span> </h3>
                <h3>Công nhân phụ trách : <span>{detail.Worker.name}</span> </h3>
                <h3>Số điện thoại của công nhân phụ trách : <span>{detail.Worker.phone}</span> </h3>
                <h3>Trạng thái : <span>{detail.Status === 'normal'? 'Bình thường': 'Đang sửa chữa'}</span> </h3>
               
                <p   
                         className='changeinfor'
                         onClick={()=>setshowModelChangeDetailBin(true)}
                ><button type="button" class="btn btn-primary">Thay đổi thông tin</button>
                </p>
            </div>
            <div>
                <h1>Lỗi đang xảy ra :</h1>
                <h3>{detail.fault.ep_khong_duoc === true ? <div><IoIosWarning className='icon-warning'/>Không thể ép rác</div> : ''}</h3>
                <h3>{detail.fault.khong_dong_cua === true ? <div><IoIosWarning/>Nắp chưa đóng kĩ</div> : ''}</h3>
            </div>
        </div>
  </div>
  <ChangeDetailBin
    show={showModelChangeDetailBin}
    handleClose={handleCloseModalChangeDetailBin}
  />
  </>
  )
}

export default Detail
