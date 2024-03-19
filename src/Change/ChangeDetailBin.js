import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editUser } from '../services/UserService';
import {  toast } from 'react-toastify';

function ChangeDetailBin({ show , handleClose}) {
  return (
    <div  className="modal show"
      style={{ display: 'block', position: 'initial' }}>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Change Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className="form-group">
                <label for="exampleInputName">Name : </label>
                <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Name"
                />
            </div>
            <div className="form-group">
              <label for="exampleInputJob">District : </label>
              <input type="text" className="form-control" id="exampleInputJob" placeholder="District"  
              />
            </div>
            <div className="form-group">
              <label for="exampleInputJob">Street : </label>
              <input type="text" className="form-control" id="exampleInputJob" placeholder="Street"  
              />
            </div>
            <div className="form-group">
              <label for="exampleInputJob">Version : </label>
              <input type="text" className="form-control" id="exampleInputJob" placeholder="Version"  
              />
            </div>
            <div className="form-group">
              <label for="exampleInputJob">Maintenance Date : </label>
              <input type="text" className="form-control" id="exampleInputJob" placeholder="Maintenance Date"  
              />
            </div>
            <div className="form-group">
              <label for="exampleInputJob">Installation Date : </label>
              <input type="text" className="form-control" id="exampleInputJob" placeholder="Installation Date"  
              />
            </div>
            <div className="form-group">
              <label for="exampleInputJob">Worker's name : </label>
              <input type="text" className="form-control" id="exampleInputJob" placeholder="Installation Date"  
              />
            </div>
            <div className="form-group">
              <label for="exampleInputJob">Worker's phone :</label>
              <input type="text" className="form-control" id="exampleInputJob" placeholder="Installation Date"  
              />
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                <label class="form-check-label" for="flexCheckChecked">
                Repair
                </label>
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


export default ChangeDetailBin

