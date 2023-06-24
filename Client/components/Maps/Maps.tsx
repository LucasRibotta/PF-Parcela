import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';

interface LocationMapsProps {
  location: string;
}

const LocationMaps = ({ location }: LocationMapsProps) => {
  const [mapApiKey, setMapApiKey] = useState('AIzaSyDk9BhwfOM8y2fUxlyWxauYZjNQKyQ1YUU'); 
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  useEffect(() => {
   
    const getCoordinatesFromLocation = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            location
          )}&key=${mapApiKey}`
        );
        const data = await response.json();

        if (data.status === 'OK') {
          const { lat, lng } = data.results[0].geometry.location;
          setCenter({ lat, lng });
          setMarkerPosition({ lat, lng });
        } else {
          console.error('Error al obtener las coordenadas de la ubicación');
        }
      } catch (error) {
        console.error('Error al obtener las coordenadas de la ubicación', error);
      }
    };

    getCoordinatesFromLocation();
  }, [location, mapApiKey]);

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    const latLng = event.latLng;
    if (latLng) {
      const lat = latLng.lat();
      const lng = latLng.lng();
      setMarkerPosition({ lat, lng });
      setShowInfoWindow(true);
    }
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <LoadScript googleMapsApiKey={mapApiKey}>
        <GoogleMap
          mapContainerStyle={{ height: '100%', width: '100%' }}
          center={center}
          zoom={12}
          onClick={handleMapClick}
        >
          {markerPosition.lat !== 0 && <Marker position={markerPosition} />}

          {showInfoWindow && (
            <InfoWindow
              position={markerPosition}
              onCloseClick={() => setShowInfoWindow(false)}
            >
              <div>
                <h4>Ubicación seleccionada:</h4>
                <p>Latitud: {markerPosition.lat}</p>
                <p>Longitud: {markerPosition.lng}</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LocationMaps;
