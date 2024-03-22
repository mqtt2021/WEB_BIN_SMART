
import Form from 'react-bootstrap/Form';
import React, { useState,useEffect  } from "react";
import { MapContainer, TileLayer,Marker, Popup,useMapEvent  } from "react-leaflet";
import osm from "../osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import axios from 'axios';
import  './AddNewBin.scss'
import {listDistrict} from '../../List_Add_District/ListDistrict'
import { useNavigate  } from 'react-router-dom';
import { set } from 'lodash';
function AddNewBin() {
    const markerIcon = new L.Icon({
        iconUrl: require("../../asset/images/marker.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46], //[left/right, top/bottom]     
        popupAnchor: [0, -46], //[left/right, top/bottom]
    })
    
    const navigate = useNavigate();
    const [center, setCenter] = useState({ lat: 10.81327538935825, lng: 106.68617248535158 }); 
    const [ZOOM_LEVEL,setZOOM_LEVEL] = useState(12);
    const mapRef = useRef();
    const [locationNewBin, setlocationNewBin] = useState({ lat: 0, lng: 0 })
    const [selectedDistrict,setselectedDistrict]= useState('')
    const [Street,setStreet]= useState('')
    const [workerName,setworkerName]= useState('')
    const [workerPhone,setworkerPhone]= useState('')
    const [dateInstall,setdateInstall]= useState('')
    const [Bin, setBin] = useState( { 
      district_name: "Quận 3",
      street_name: "Võ Thị Sáu",
      lat: 10.78462451139227,
      lng: 106.68886678655649,
      power: "100%",
      available: {
        Organic: "HIGH",
        Inorganic_recyclables: "LOW",
        Non_recyclables_inorganic: "MEDIUM"
      },
      compression: {
        Organic: 11,
        Inorganic_recyclables: 12,
        Non_recyclables_inorganic: 13
      },
      worker: {
        name: "Nguyễn Văn A",
        phone: "0999383337"
      },
      maintenance_date: "14/1/2019",
      status: "normal",
      connected: true,
      installation_date: "11/7/2018",
      warning: {
        door: false,
        compress: false
      }
});

    const handleMapClickGetLocation = (e) => {
          const latLocation =  e.latlng.lat
          const lngLocation =  e.latlng.lng
        setBin({...Bin,lat: latLocation, lng: lngLocation})
        setlocationNewBin({ lat: latLocation, lng: lngLocation })
    };

    const handleChangeStreet = (event) => {
      const selectedstreet = event.target.value;
        setBin({...Bin,street_name:selectedstreet})
        setStreet(event.target.value); // Cập nhật giá trị trong state
      };      
    const handleChangeWorkerName = (event) => {
      const selectedname = event.target.value;

        setBin({...Bin, 
          worker: {
            ...Bin.worker,
              name: selectedname,
          
        }})
        setworkerName(event.target.value); // Cập nhật giá trị trong state
      };
    const handleChangeWorkerPhone = (event) => {
      const selectedphone = event.target.value;
      setBin({...Bin, 
        worker:{...Bin.worker , phone : selectedphone}
      })
        setworkerPhone(event.target.value); // Cập nhật giá trị trong state
      };
    const handleChangeDateInstall = (event) => {
      const selectedinstallation_date = event.target.value;
      setBin({...Bin,installation_date:selectedinstallation_date})
        setdateInstall(event.target.value); // Cập nhật giá trị trong state
      };
    const handleSelectChangeDistrict = (event) => {
      
        const selectedDistrictValue = event.target.value;

        setBin({...Bin,district_name:selectedDistrictValue})
        setselectedDistrict(selectedDistrictValue)
        if(selectedDistrictValue === 'Quận/Huyện') {
            setCenter({ lat: 10.81327538935825, lng: 106.68617248535158 });
            setZOOM_LEVEL(12)
        } 
        else{
            const newDistrict = listDistrict.find(district => district.name === selectedDistrictValue) 
            setCenter({ lat :newDistrict.lat, lng:newDistrict.lng})
            setZOOM_LEVEL(15)
        }
    };
    useEffect(() => {
        // Cập nhật bản đồ với giá trị mới của center và ZOOM_LEVEL
        if (mapRef.current) {
          mapRef.current.setView(center, ZOOM_LEVEL);
        }
      }, [center, ZOOM_LEVEL]);
    useEffect(() => {
              setStreet('')
              setdateInstall('')
              setworkerName('')
              setworkerPhone('')
              setlocationNewBin({ lat: 0, lng: 0 })
              setselectedDistrict('Quận/Huyện') 
              setCenter({ lat: 10.779348472547028, lng: 106.71172379356236 })
              setZOOM_LEVEL(10)  
    }, []);

      const addElement = async () => {
        try {
          const response = await axios.post('http://localhost:3001/cities', Bin);
          
         if(response && response.data){
              alert('Thêm thùng rác thành công');
              setStreet('')
              setdateInstall('')
              setworkerName('')
              setworkerPhone('')
              setlocationNewBin({ lat: 0, lng: 0 })
              setselectedDistrict('Quận/Huyện') 
              setCenter({ lat: 10.779348472547028, lng: 106.71172379356236 })
              setZOOM_LEVEL(10)  
         }
          
        } catch (error) {
            error('Không thêm được thùng rác');
        }
      };

      const handleSaveInforBin = ()=>{
        if((selectedDistrict === 'Quận/Huyện') || (Street==='') || (dateInstall==='') || (workerName==='') || (locationNewBin==='') || (workerPhone==='')) {
                  alert('Bạn chưa điền đủ thông tin')
                  console.log('thieu thong tin')
                  return;
        }
        addElement()
      }
      console.log('add new bin')
  return (
   <div>
        <div className='infoBin'>
                <div className='inforBin-item'>
                <Form.Group >
                    <Form.Label>Quận/Huyện</Form.Label>
                    <Form.Select aria-label="Default select example" 
                        onChange={handleSelectChangeDistrict} 
                        value={selectedDistrict}
                    >
                        <option value="Quận/Huyện">Quận/Huyện</option>
                        <option value="Quận 1">Quận 1</option>
                        <option value="Quận 2">Quận 2</option>
                        <option value="Quận 3">Quận 3</option>
                        <option value="Quận 4">Quận 4</option>
                        <option value="Quận 5">Quận 5</option>
                        <option value="Quận 6">Quận 6</option>
                        <option value="Quận 7">Quận 7</option>
                        <option value="Quận 8">Quận 8</option>
                        <option value="Quận 9">Quận 9</option>
                        <option value="Quận 10">Quận 10</option>
                        <option value="Quận 11">Quận 11</option>
                        <option value="Quận 12">Quận 12</option>
                        <option value="Bình Tân">Bình Tân</option>
                        <option value="Bình Thạnh">Bình Thạnh</option>
                        <option value="Gò Vấp">Gò Vấp</option>
                        <option value="Phú Nhuận">Phú Nhuận</option>
                        <option value="Tân Bình">Tân Bình</option>
                        <option value="Tân Phú">Tân Phú</option>
                        <option value="Thủ Đức">Thủ Đức</option>
                        <option value="Bình Chánh">Bình Chánh</option>
                        <option value="Cần Giờ">Cần Giờ</option>
                        <option value="Củ Chi">Củ Chi</option>
                        <option value="Hóc Môn">Hóc Môn</option>
                        <option value="Nhà Bè">Nhà Bè</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                        <Form.Label>Đường</Form.Label>
                        <Form.Control placeholder="Đường"
                                value={Street} 
                                onChange={handleChangeStreet}
                        />
                </Form.Group>
                </div>
                <div className='inforBin-item'>
                <Form.Group className="mb-3">
                        <Form.Label>Ngày lắp đặt</Form.Label>
                        <Form.Control placeholder="Ngày lắp đặt"
                                    value={dateInstall} 
                                    onChange={handleChangeDateInstall}
                        />
                </Form.Group> 
                <Form.Group className="mb-3">
                        <Form.Label>Công nhân phụ trách</Form.Label>
                        <Form.Control placeholder="Công nhân phụ trách"
                             value={workerName} 
                                onChange={handleChangeWorkerName}
                        />
                </Form.Group> 
                <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại công nhân phụ trách</Form.Label>
                        <Form.Control placeholder="Số điện thoại công nhân phụ trách"
                             value={workerPhone} 
                                onChange={handleChangeWorkerPhone}
                        />
                </Form.Group> 
                </div>
                <div className='inforBin-item inforBin-item-save'>
                        <button type="button" class="btn btn-success"
                                    onClick={handleSaveInforBin}

                        >Lưu</button>
                </div>
        </div>

   
        <div className="col">
            <MapContainer 
                  center={center} 
                  zoom={ZOOM_LEVEL}     
                  ref={mapRef}>
                <TileLayer
                    url={osm.maptiler.url}
                    attribution={osm.maptiler.attribution}
                />
                 <MyClickHandlerGetLocation onClick={handleMapClickGetLocation} />
                        <Marker
                          position={[locationNewBin.lat, locationNewBin.lng]}
                          icon={markerIcon}
                        //   key={idx}
                        >   <Popup>
                               
                            </Popup>
                        </Marker>
                     
            </MapContainer>
        </div>
   </div>

  )
}

function MyClickHandlerGetLocation({ onClick }) {
    const map = useMapEvent('click', (e) => {
      onClick(e);
    });
    
    return null;
    }

export default AddNewBin
