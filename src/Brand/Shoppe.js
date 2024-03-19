import React,{useState} from 'react'
import {NavLink,Link} from "react-router-dom";
import voucher from '../asset/images/vouchersadmin.png'
import './HeaderBrand.scss'
import './shoppe.scss'
import AddNewBrand from '../Change/AddNewBrand';
import AddNewVoucher from '../Change/AddNewVoucher';
function Shoppe() {
    const [showAddNewBrand, setshowAddNewBrand] = useState(false)
    const [showAddNewVoucher, setshowAddNewVoucher] = useState(false)

    const handleCloseAddNewBrand = () =>{
      setshowAddNewBrand(false)
    }
    const handleCloseAddNewVoucher = () =>{
        setshowAddNewVoucher(false)
    }
  return (
    <>
    <div className='addNewBrand'>
         <button type="button" class="btn btn-success"
          onClick={()=>setshowAddNewBrand(true)}
         >Add New Brand</button>
    </div>
   
    <div className='brand-shoppe div-brand'>
    
        <ul className='header-brand'>
            <li>
                <Link  className='nav-link' to='/voucher/shoppe'>Shoppe</Link>
            </li>
            <li>
                <Link  className='nav-link' to='/voucher/grab'>Grab</Link>
            </li>
            <li>
                <Link  className='nav-link' to='/voucher/lotte'>Lotte</Link>
            </li>
            <li>
                <Link  className='nav-link' to='/voucher/thegioididong'>thegioididong</Link>
            </li>
        </ul>
        <div className='div-title-img-btn'>
            <h1 className='title-vouchers'>Shoppe</h1>
                <button type="button" class="btn btn-success"
                 onClick={()=>setshowAddNewVoucher(true)}
                >Add New Voucher</button>
                <br/>
                <img className='img-shoppe' src={voucher} alt='shoppe'/>
        </div>
    </div>
    <AddNewBrand
            show={showAddNewBrand} 
            handleClose={handleCloseAddNewBrand}
    />
    <AddNewVoucher
        show={showAddNewVoucher} 
            handleClose={handleCloseAddNewVoucher}
    />
    </>
  )
}

export default Shoppe
