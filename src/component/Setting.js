import React, {useState} from 'react'
import './setting.scss'
import ChangeInforLogin from '../Change/ChangeInforLogin'
import ChangeInforAccount from '../Change/ChangeInforAcount'
function Setting() {
  const [informationAccount, setinformationAccount] = useState({
    fullName:'Đinh Quang Đạt',
    phone: '0888927974'

  })
  const [informationLogin, setinformationLogin] = useState({
    email:'dat.dinh@gmail.com',
    password: '123456789'

  })
    const [showChangeLogin, setshowChangeLogin] = useState(false)
    const [showChangeAccount, setshowChangeAccount] = useState(false)
    const handleshowModalChangeLogin= ()=> {
      setshowChangeLogin(true)
    }
    const handleCloseModalChangeLogin=()=>{
      setshowChangeLogin(false)
    }
    const handleshowModalChangeAccount=()=>{
      setshowChangeAccount(true)
    }
    const handleCloseModalChangeAccount=()=>{
      setshowChangeAccount(false)
    }

  return (
    <div className='father-setting'>
        <div>
            <h3>Thông tin tài khoản</h3>
            <p>Họ và Tên : {`${informationAccount.fullName}`} </p>
            <p>Điểm : 500 </p>
            <p>Số căn cước công dân : 087084000999  </p>
            
            <button
              onClick={()=>setshowChangeAccount(true)}
              >Change
            </button>

              <h3 className='title-infor-login'>Thông tin đăng nhập</h3>
              <p>Email : {`${informationLogin.email}`}</p>
              <p>Mật khẩu : {`${informationLogin.password}`} </p>
              <button
                 onClick={()=>setshowChangeLogin(true)}
              >Change</button>
        </div>
        <ChangeInforLogin
            show={showChangeLogin} 
            handleClose={handleCloseModalChangeLogin}
        />
        <ChangeInforAccount
            show={showChangeAccount} 
            handleClose={handleCloseModalChangeAccount}
        />
    </div>
  )
}

export default Setting
