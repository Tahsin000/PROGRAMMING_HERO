import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 22.3385486187542, 
  lng: 91.81357907404778
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
        <Marker 
            position={center}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)