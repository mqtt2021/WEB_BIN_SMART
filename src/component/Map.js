
import './map.scss'
import Form from 'react-bootstrap/Form';
import React, { useState,useEffect  } from "react";
import { MapContainer, TileLayer,Marker, Popup,useMapEvent  } from "react-leaflet";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import axios from 'axios';

function Map() {
  const markerIcon = new L.Icon({
    iconUrl: require("../asset/images/marker.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]
})
const [initialCities, setInitialCities] = useState([]);
const [cities, setCities] = useState([]);
const [center, setCenter] = useState({ lat: 10.882955165777764, lng: 106.7922680256726 }); 
const [selectedStreet, setselectedStreet] = useState('');
const [ZOOM_LEVEL,setZOOM_LEVEL] = useState(14)
const mapRef = useRef();
const getcities = async () => {
        try {
          const response = await axios.get('http://localhost:3001/cities');
          const citiesData = response.data;
            setInitialCities(citiesData);
            setCities(citiesData);
          
        } catch (error) {
          console.error('Đã xảy ra lỗi:', error);
        }
};
useEffect(() => {
        getcities();
}, [])

const handleMapClickGetLocation = (e) => {
    console.log('Latitude:', e.latlng.lat);
    console.log('Longitude:', e.latlng.lng);
};

const handleMapClickGetZoom = () => {
    const currentZoom = mapRef.current ? mapRef.current.getZoom() : null;
    console.log('Current zoom level:', currentZoom);
};

const handleSelectChange = (event) => {
    const selectedStreetValue = event.target.value;
    setselectedStreet(selectedStreetValue);

    if(selectedStreetValue === 'Street') {
        setCities(initialCities);
    } 
    else{
        const newCities = initialCities.filter(city => city.street === selectedStreetValue);
        console.log(newCities)
        setCities(newCities)
        setCenter({ lat :newCities[0].center.lat, lng:newCities[0].center.lng});
        setZOOM_LEVEL(newCities[0].zoom)
    }
};
useEffect(() => {
    // Cập nhật bản đồ với giá trị mới của center và ZOOM_LEVEL
    if (mapRef.current) {
      mapRef.current.setView(center, ZOOM_LEVEL);
    }
  }, [center, ZOOM_LEVEL]);
  console.log(center);
  console.log(ZOOM_LEVEL)
return (
    <>
        <div>
            <Form.Select aria-label="Default select example" 
                onChange={handleSelectChange} 
                value={selectedStreet}
            >
                    <option>Street</option>
                    <option value="Nguyen Du">Nguyen Du</option>
                    <option value="Hai Thuong Lan Ong">Hai Thuong Lan Ong</option>
                    <option value="Ho Xuan Huong">Ho Xuan Huong</option>
                    <option value="Le Quy Don">Le Quy Don</option>
            </Form.Select>
        </div>
        <div className="row">
            <div className="col text-center">
                <h2>React-leaflet - Basic Openstreet Maps</h2>
                <p>Loading basic map using layer from maptiler</p>
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
                         <MyClickHandlerGetZoom onClick={handleMapClickGetZoom} />
                        {cities.map((city, idx) => (
                                <Marker
                                  position={[city.lat, city.lng]}
                                  icon={markerIcon}
                                  key={idx}
                                >   <Popup>
                                        <b>
                                            {city.street}
                                        </b>
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
