import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup } from "react-map-gl"
import { getCenter } from 'geolib';
import { Result } from 'postcss';



function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({})


const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
}))

const center = getCenter(coordinates)

const [viewport, setViewport] = useState({
  width: "100%",
  height: "100%",
  latitude: center.latitude,
  longitude: center.longitude,
  zoom: 9.19,
});




  return (
    <ReactMapGL
      mapStyle='mapbox://styles/obalt/cl4a1qxoh003u15p7u6bzgxt6'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <p onClick={() => setSelectedLocation(result)}
            className='cursor-pointer text-3xl animate-bounce' area-label="pin">📍</p>
          </Marker>

{/* Clicking on pin */}
{selectedLocation.long === result.long ? (
    <Popup 
    onClose={() => setSelectedLocation({})}
    closeOnClick={true} 
    latitude={result.lat}
    longitude={result.long}
        >
               {result.title}

    </Popup>


) : (
    false
)} 

        </div>
      ))}
    </ReactMapGL>
  );
}
  

  


export default Map