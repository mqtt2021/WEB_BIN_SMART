import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editUser } from '../services/UserService';
import {  toast } from 'react-toastify';

function AddNewVoucher({ show , handleClose}) {
  return (
    <div  className="modal show"
      style={{ display: 'block', position: 'initial' }}>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Voucher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className="form-group">
                <label for="exampleInputName">Value : </label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Brand'name" />
                <label for="exampleInputName">Point : </label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Brand'name" />
                <label for="exampleInputName">Code : </label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Brand'name" />
               
             
            </div>    
                   
              
            
            
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
  )
}


export default AddNewVoucher

