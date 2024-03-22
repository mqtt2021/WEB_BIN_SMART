import React ,{useEffect,useState} from 'react'
import { GiAutoRepair } from "react-icons/gi";
import './bin.scss'
import { Link } from 'react-router-dom';
import { FaCircle } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import axios from 'axios';
function Bin() {
 
  const [Bins, setBins] = useState([]);
  const getcities = async () => {
    
    try {
      const response = await axios.get('http://localhost:3001/cities');

      const BinsData = response.data;
        
        setBins(BinsData);
      
    } 
    catch (error) {
      console.error('Đã xảy ra lỗi:', error);
    }
  }

  useEffect(() => {
    getcities();
  }, [])

  const handleDelete = async (id) => {
    try {
     alert('Bạn có chắc chắn muốn xóa thùng rác này không')
      await axios.delete(`http://localhost:3001/cities/${id}`);
            const response = await axios.get('http://localhost:3001/cities'); 
            setBins(response.data)
      
    } catch (error) { 
      alert('Failed to delete the item.');
    }
  };
  console.log('Bin')
  return (
    <>
    <div className='search-and-filter'>
        <div className='filter-status filter '>
                 <Form.Select aria-label="Default select example" >
                   <option>Trạng thái</option>
                   <option value="1">Đang sửa chữa</option>
                   <option value="2">Bình thường</option>
                   
                </Form.Select>   
        </div>   
        <div className='filter-warning filter '>
              
              <Form.Select aria-label="Default select example" >
                   <option>Lỗi</option>
                   <option value="1">Có</option>
                   <option value="2">Không</option>
                  
                </Form.Select>
        </div>   
        <div className='filter-connection filter'>
              
              <Form.Select aria-label="Default select example" >
                   <option>Kết nối</option>
                   <option value="1">Đang sửa chữa</option>
                   <option value="2">Trung bình</option>
                   <option value="2">Thấp</option>
                </Form.Select>
         </div>   
        <div className='filter-location filter'>
              
              <div class="form-search-location">
              <Form.Select className='form-select' aria-label="Default select example" >
                   <option>Quận/Huyện</option>
                   <option value="1">District 1</option>
                   <option value="2">District 2</option>
                   <option value="3">District 3</option>
                   <option value="4">District 4</option>
                   <option value="5">District 5</option>
                   <option value="6">District 6</option>
                   <option value="7">District 7</option>
                   <option value="8">District 8</option>
                   <option value="8">District 9</option>
                   <option value="8">District 10</option>
                 
                </Form.Select>
                <div className='form-search-street'>
                  <div class="form-input">
                      <input type="search" id="form1" class="form-control" placeholder='Nhập tên đường' />
                  </div>
                  <div className='form-button'>
                      <button type="button" class="btn btn-primary" data-mdb-ripple-init>
                          <i class="fas fa-search"></i>
                      </button>
                  </div>
                </div>
                  
              </div>
          
        </div>   
        <div  div className='filter-available filter'>
              
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="normal" />
                  <label class="form-check-label" for="normal">Hữu cơ</label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="normal" />
                  <label class="form-check-label" for="normal">Vô cơ tái chế được</label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="normal" />
                  <label class="form-check-label" for="normal">Vô cơ không tái chế được</label>
              </div>
              <div className='select'>
                 <Form.Select aria-label="Default select example" >
                   <option>Chọn mức</option>
                   <option value="1">Cao</option>
                   <option value="2">Trung bình</option>
                   <option value="2">Thấp</option>
                </Form.Select>
              </div>
        </div>  
        <div  div className='filter-compression filter'>
              <div>
                <h3>Số lần ép</h3>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="normal" />
                  <label class="form-check-label" for="normal">Hữu cơ</label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="normal" />
                  <label class="form-check-label" for="normal">Vô cơ tái chế được</label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="normal" />
                  <label class="form-check-label" for="normal">Vô cơ không tái chế được</label>
              </div>
              <div className=''>
                <div className='div-input'>
                      <label for="myinput">{`n < `}</label>
                      <input className='compression-input' id="myinput" name="mynameinput"/>
                </div>
                <div className='div-input'>
                      <input className='compression-input' id="myinput" name="mynameinput"/>
                      <label for="myinput">{`< n <`}</label>
                      <input className='compression-input' id="myinput" name="mynameinput"/>
                </div>
                <div className='div-input'>
                      <label for="myinput">{`n >`}</label>
                      <input className='compression-input' id="myinput" name="mynameinput"/>
                </div>
               
              </div>
               
        </div>  
        <div  div className='filter-power filter'>
              <div>
                <h3>Năng lượng</h3>
              </div>
              <div className=''>
                <div className='div-input'>
                      <label for="myinput">{`n < `}</label>
                      <input className='compression-input' id="myinput" name="mynameinput"/>
                </div>
                <div className='div-input'>
                      <input className='compression-input' id="myinput" name="mynameinput"/>
                      <label for="myinput">{`< n <`}</label>
                      <input className='compression-input' id="myinput" name="mynameinput"/>
                </div>
                <div className='div-input'>
                      <label for="myinput">{`n >`}</label>
                      <input className='compression-input' id="myinput" name="mynameinput"/>
                </div>
               
              </div>
               
        </div>  
    </div>
    <div>
      <Link to={'/addnewbin'}>
         <button type="button" class="btn btn-success" style={{ float: 'right'}}>Thêm thùng rác</button>
      </Link>
   
    </div>
  <Table   bordered hover className='table'>
    <thead>
      <tr>
          
           <th rowspan='2'>ID</th>
           <th rowspan='2'>Trạng thái</th>
           <th rowspan='2'>Cảnh báo</th>
           <th rowspan='2'>Kết nối</th>
           <th rowspan='2'>Vị trí</th>
           <th rowspan='2'>Năng lượng</th>
           <td colspan="3" style={{ textAlign: 'center',fontWeight:'bold'}}>Mức đầy</td>
           <th colspan="3" style={{ textAlign: 'center',fontWeight:'bold'}}>Số lần ép trong ngày</th>
           <th rowspan='2'>Action</th>
           
           
      </tr>
      <tr>
          
           <th scope="col">Hữu cơ</th>
           <th scope="col">Vô cơ tái chế được</th>
           <th scope="col">Vô cơ không tái chế được</th>
           <th scope="col">Hữu cơ</th>
           <th scope="col">Vô cơ tái chế được</th>
           <th scope="col">Vô cơ không tái chế được</th>
          
      </tr>
    </thead>
    <tbody>
    {Bins.map((item,index)=>
 
     <tr key={index} className=''>
            <td>{item.id}</td>
            <td>{item.status === 'repair' ? <GiAutoRepair/> : ''}</td>
            <td className={(item.warning.door===true)||(item.warning.compress===true) ? 'bg-danger':''} >{(item.warning.door===true)||(item.warning.compress===true) ? <BiSolidError className='fault'/>:''}</td>
            <td>{item.connected ? <FaCircle className='connecting'/> : <FaTimesCircle className='disconnect'/>}</td>
            <td className='location'>
              <div>{item.district_name} {item.street_name}</div>
              <div>
              <Link
                    to="/map"
                    state={{
                            latBin: item.lat,
                            lngBin: item.lng
                      }}                            
              >
                  <button type="button" class="btn btn-info">Xem vị trí</button>
              </Link>
                
              </div>
            </td>
            <td>{item.power}</td> 
            <td className={item.available.Organic === 'HIGH' ? 'bg-danger':''}>{item.available.Organic}</td>
            <td className={item.available.Inorganic_recyclables === 'HIGH' ? 'bg-danger':''}>{item.available.Inorganic_recyclables}</td>
            <td className={item.available.Non_recyclables_inorganic === 'HIGH' ? 'bg-danger':''}>{item.available.Non_recyclables_inorganic}</td>
            <td >{item.compression.Organic}</td>
            <td >{item.compression.Inorganic_recyclables}</td>
            <td >{item.compression.Non_recyclables_inorganic}</td>
            <td className='td-action'>
            <Link to={`/bin/${item.id}/detail`}>
                <button type="button" class="btn btn-info">
                    <IoInformationCircle className='icon-infor'/>
                </button>
            </Link>
           
                <button type="button" class="btn btn-danger"
                       onClick={ (e) => handleDelete(item.id) }
                >
                    <MdDelete className='icon-infor'/>
                </button>
           
            </td>
    </tr> 
  )}
   
   
    </tbody>
</Table> 
</>
  )
}

export default Bin
