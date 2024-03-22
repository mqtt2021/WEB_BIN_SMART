import './map.scss'
import Form from 'react-bootstrap/Form';
import React, { useState,useEffect,useRef} from "react";
import { MapContainer, TileLayer,Marker, Popup,useMapEvent  } from "react-leaflet";
import osm from "./osm-providers";

import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import axios from 'axios';
import {listDistrict} from '../List_Add_District/ListDistrict'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link, useLocation  } from 'react-router-dom';
import { GiAutoRepair } from "react-icons/gi";
/////////////////////////////
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import useGeoLocation from "./useGeoLocation"
import "leaflet-routing-machine";
import { set } from 'lodash';
function Map() {
const location = useLocation();  

const markerIcon = new L.Icon({
    iconUrl: require("../asset/images/marker.png" ),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
})
const markerIconUser = new L.Icon({   
  iconUrl: require("../asset/images/maker_user.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const ZOOM_LEVEL_USER = 17;

const locationUser = useGeoLocation();

const showMyLocation = () => {
  if (locationUser.loaded && !locationUser.error) {
    mapRef.current.flyTo(
      [locationUser.coordinates.lat, locationUser.coordinates.lng],
      ZOOM_LEVEL_USER,
      { animate: true }
    );
  } else {
    alert(locationUser.error.message);
  }
};
const [initialCities, setInitialCities] = useState([]);
const [cities, setCities] = useState([]);

const [center, setCenter] = useState({ lat: 10.779348472547028, lng: 106.71172379356236 }); 

// const [District, setDistrict] = useState({
//         id:0,
//         name:"Quận",
//         lat:1,
//         lng:2
// });

const [selectedDistrict,setselectedDistrict]= useState('')
const [ZOOM_LEVEL,setZOOM_LEVEL] = useState(10);
const [searchStreet, setsearchStreet] = useState('');
const mapRef = useRef();


const getcities = async () => {
        try {
          const response = await axios.get('http://localhost:3001/cities');
          const citiesData = response.data;
            setInitialCities(citiesData);
            setCities(citiesData);
          
        } catch (error) {
          alert('Đã xảy ra lỗi:');
        }
};

useEffect(() => {
  //       setDistrict({
  //         id:0,
  //         name:"Quận",
  //         lat:0,
  //         lng:0
  // })
        setsearchStreet('')
        setselectedDistrict('Quận/Huyện')
        getcities();
}, [])



const handleMapClickGetZoom = () => {
    // const currentZoom = mapRef.current ? mapRef.current.getZoom() : null;
    // console.log('Current zoom level:', currentZoom);
};

const handleSearchBin = () => {

  const selectedDistrictValue = selectedDistrict

  if((selectedDistrictValue === 'Quận') && (searchStreet !== '')  ){
    const newCities = initialCities.filter(bin => (bin.street_name === searchStreet))
    setCities(newCities)

    if(newCities.length === 0){
    setCenter({  lat: 10.779348472547028, lng: 106.71172379356236 });
    setZOOM_LEVEL(10)
    }

    else{
      setCenter({ lat: newCities[0].lat, lng: newCities[0].lng });
      setZOOM_LEVEL(17)
    }
  }
  else if(selectedDistrictValue ==='Quận' && (searchStreet === '')){
    
  }

  else if(selectedDistrictValue !== 'Quận/Huyện' && (searchStreet === '') ){
    const newCities = initialCities.filter(bin =>(bin.district_name === selectedDistrictValue))
    const newDistrict = listDistrict.find(district => district.name === selectedDistrictValue) 
    setCities(newCities)
    setCenter({ lat: newDistrict.lat, lng: newDistrict.lng });
    setZOOM_LEVEL(15)
  }
  else if(selectedDistrictValue !== 'Quận/Huyện' && (searchStreet !== '')){
    const newCities = initialCities.filter(bin => (bin.street_name === searchStreet)&&(bin.district_name === selectedDistrictValue))
    const newDistrict = listDistrict.find(district => district.name === selectedDistrictValue) 

    setCities(newCities)

    if(newCities.length === 0){
      setCenter({ lat: newDistrict.lat, lng: newDistrict.lng });
      setZOOM_LEVEL(15)
      }
      else{
        setCenter({ lat: newCities[0].lat, lng: newCities[0].lng });
        setZOOM_LEVEL(17)
      }
  }
  else if(selectedDistrictValue === 'Quận/Huyện' && (searchStreet !== '')){
    const newCities = initialCities.filter(bin => (bin.street_name === searchStreet))
    

    setCities(newCities)

    if(newCities.length === 0){
      setCenter({  lat: 10.779348472547028, lng: 106.71172379356236  });
      setZOOM_LEVEL(10)
      }
      else{
        setCenter({ lat: newCities[0].lat, lng: newCities[0].lng });
        setZOOM_LEVEL(17)
      }
  }


  else{ // selectedDistrictValue === 'Quận/Huyện' && (searchStreet === '')
  
          setCities(initialCities)
          setCenter({  lat: 10.779348472547028, lng: 106.71172379356236});
          setZOOM_LEVEL(10)
  }
 
}

const handleSelectChangeDistrict = (event) => {
  
    const selectedDistrictValue = event.target.value;
    
    setselectedDistrict(selectedDistrictValue)

   

    if((selectedDistrictValue === 'Quận/Huyện') &&(searchStreet ==='')) {

        setCities(initialCities);
        setCenter({  lat: 10.779348472547028, lng: 106.71172379356236});
        setZOOM_LEVEL(10)
    } 
    if((selectedDistrictValue === 'Quận/Huyện') &&(searchStreet !=='')) {
        const newCities = initialCities.filter(bin => (bin.street_name === searchStreet));
        setCities(newCities);
        if(newCities.length === 0){
                setCenter({  lat: 10.779348472547028, lng: 106.71172379356236});
                setZOOM_LEVEL(10)
          }
          else{

            setCenter({ lat: newCities[0].lat, lng: newCities[0].lng });
            setZOOM_LEVEL(17)
          }
        
    } 

    else if ((selectedDistrictValue !== 'Quận/Huyện') && (searchStreet !=='') ){
      const newCities = initialCities.filter(bin => (bin.district_name === selectedDistrictValue)&&(bin.street_name === searchStreet));
      
      const newDistrict = listDistrict.find(district => district.name === selectedDistrictValue) 

      setCities(newCities);
      if(newCities.length === 0){
        setCenter({ lat :newDistrict.lat, lng:newDistrict.lng})
        setZOOM_LEVEL(15)

      }
        else{
          setCenter({ lat: newCities[0].lat, lng: newCities[0].lng });
          setZOOM_LEVEL(17)
        }
    }   

    else{ //(selectedDistrictValue !== 'Quận/Huyện') && (searchStreet === '')
        const newCities = initialCities.filter(city => city.district_name === selectedDistrictValue);
        const newDistrict = listDistrict.find(district => district.name === selectedDistrictValue) 
        setCenter({ lat :newDistrict.lat, lng:newDistrict.lng})
        setCities(newCities)
      
        setZOOM_LEVEL(15)
       
    }
};

useEffect(() => {
    // Cập nhật bản đồ với giá trị mới của center và ZOOM_LEVEL
    if (mapRef.current) {
      mapRef.current.setView(center, ZOOM_LEVEL);
    }
}, [center, ZOOM_LEVEL]);


  const handleChange = (event) => {
    setsearchStreet(event.target.value); // Cập nhật giá trị trong state
  };

  useEffect(() => {
    // Kiểm tra nếu có dữ liệu được truyền từ route trước đó
    if (location.state) {
      // Lưu dữ liệu vào state để hiển thị lên màn hình
      
      setZOOM_LEVEL(17)
      setCenter({ lat :location.state.latBin, lng:location.state.lngBin})
    }
  }, [location]);



  const [locationClick, setlocationClick] = useState({ lat: 10.779348472547028, lng: 106.71172379356236 });
  const [routingControl, setRoutingControl] = useState(null);

  const handleMapClickGetLocation = (e) => {
          setlocationClick({ lat: e.latlng.lat, lng: e.latlng.lng } );
};

  
  const handleDisplayRoute=()=>{

    // if (routingControl) {

    //     routingControl.getPlan().setWaypoints([
    //       L.latLng(locationUser.coordinates.lat, locationUser.coordinates.lng),
    //       L.latLng(locationClick.lat, locationClick.lng)

    // ])} 

    // else {
              const routing = L.Routing.control({
              waypoints: [
                  L.latLng(locationUser.coordinates.lat, locationUser.coordinates.lng),
                  L.latLng(locationClick.lat, locationClick.lng)
              ],
              lineOptions: {
                styles: [
                  {
                    color: "blue",
                    opacity: 0.6,
                    weight: 4
                  }
                ]
              },
              routeWhileDragging: true,
              addWaypoints: false,
              draggableWaypoints: false,
              fitSelectedRoutes: false,
              showAlternatives: false,
              createMarker: function() { return null; }
            
    });
    routing.addTo(mapRef.current);
    setRoutingControl(routing); 
  }
const handleRemoveRoute = ()=>{
          mapRef.current.removeControl(routingControl)
          setRoutingControl(null)
}

console.log('map:')
console.log('searchStreet:' + searchStreet)
console.log('selected District:' + selectedDistrict)

return (
    <>
        <div className='div-quan-duong'>
            <div className='div-quan'>
                <Form.Select aria-label="Default select example" 
                onChange={handleSelectChangeDistrict} 
                value={selectedDistrict}
                >
                    <option >Quận/Huyện</option>
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
            </div> 
            <div className='div-duong'>
                <div className='div-input' class="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" class="form-control"             
                          value={searchStreet} 
                          onChange={handleChange}
                    /> 
                </div>
                <div>
                    <button type="button" class="btn btn-primary" data-mdb-ripple-init
                        onClick={handleSearchBin}
                    >
                        Tìm kiếm
                    </button>
                </div>  
            </div> 
            <div>
                <button className="btn btn-primary" onClick={showMyLocation}>
                      Vị trí của tôi
                </button>
                {
                  routingControl  ?  <button className="btn btn-primary" onClick={handleRemoveRoute}>
                      Tắt Chỉ đường
                </button>: <button className="btn btn-primary" onClick={handleDisplayRoute}>
                      Chỉ đường
                </button>
                }
            </div>
            <div className='div-display-couter'>
                    <h1>{`Tìm được ${cities.length} thùng rác`}</h1>
            </div>

        </div>
        <div className="row">
            <div className="col text-center">
                <div className="col">
                    <MapContainer 
                          center={center} 
                          zoom={ZOOM_LEVEL}     
                          ref={mapRef}>
                        <TileLayer
                            url={osm.maptiler.url}
                            attribution={osm.maptiler.attribution}
                        />

                        {routingControl ? '' : <MyClickHandlerGetLocation onClick={handleMapClickGetLocation} />}
                        
                         <MyClickHandlerGetZoom onClick={handleMapClickGetZoom} />
                                <Marker
                                  position={[locationUser.coordinates.lat, locationUser.coordinates.lng]}
                                  icon={markerIconUser}
                                 
                                ></Marker>
                        {cities.map((bin, idx) => (

                                <Marker
                                  position={[bin.lat, bin.lng]}
                                  icon={markerIcon}
                                  key={idx}
                                > 
                                  <Popup
                                            autoOpen={true}
                                    >
                                            <div className={`popup-item` }>
                                              <div>
                                                      Organic
                                              </div>
                                              <div >
                                                      <RiDeleteBin6Fill className={bin.available.Organic === 'HIGH' ? 'RED' : (bin.available.Organic === 'MEDIUM' ? "YELLOW" : "GREEN")}/>
                                              </div>
                                            </div>
                                            <div className='popup-item'>
                                              <div>
                                                  Inorganic Recyclables
                                              </div>
                                              <div>
                                              <RiDeleteBin6Fill className={bin.available.Inorganic_recyclables === 'HIGH' ? 'RED' : (bin.available.Inorganic_recyclables === 'MEDIUM' ? "YELLOW" : "GREEN")}/>
                                              </div>
                                            </div>
                                            <div className='popup-item'>
                                              <div>
                                              Non-recyclable Inorganic
                                              </div>
                                              <div>
                                              <RiDeleteBin6Fill className={bin.available.Non_recyclables_inorganic === 'HIGH' ? 'RED' : (bin.available.Non_recyclables_inorganic === 'MEDIUM' ? "YELLOW" : "GREEN")}/>
                                              </div>
                                            </div>
                                            <div>
                                              {bin.status === 'repair' ? <GiAutoRepair/> : ''}
                                            </div>
                                            
                                            <Link to={`/bin/${bin.id}/detail`}>
                                                  <button type="button" class="btn btn-primary" data-mdb-ripple-init>Chi tiết </button>
                                            </Link>    
                                    </Popup>
                                </Marker>
                              ))}
                              
                    </MapContainer>
                </div>
            </div>   
        </div>
    </>
)
}

function MyClickHandlerGetLocation({ onClick }) {
const map = useMapEvent('click', (e) => {
  onClick(e);
});

return null;
}

function MyClickHandlerGetZoom({ onClick }) {
useMapEvent('click', onClick);
return null;
}
export default Map
