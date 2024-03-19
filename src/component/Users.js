import React from 'react'
import './users.scss'
import Table from 'react-bootstrap/Table';
import { ListUser } from './ListUser/ListUser';
function Users() {
  return (
    <>

<div className='total-users'>Hiện đang có 500 người dùng</div>
    <div className='father-users'>
    
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className='th' scope="col">Số thứ tự</th>
          <th className='th' scope="col">Số căn cước công dân</th>
          <th className='th' scope="col">Họ và tên</th>
          <th className='th' scope="col">Điểm hiện tại</th>
        </tr>
      </thead>
      <tbody>
      {ListUser.map((item,index)=>
        <tr  key={index}>
          <td>{item.rank}</td>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.point}</td>
        </tr>)}
      </tbody>
    </Table>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
    </div>
     </>
  )
}

export default Users
