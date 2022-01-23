import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '240px'
};

const center = {
  lat: 50.293402,
  lng: 18.6721772999993
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAoDjhloqUhAgpF5EBWZOVk5OoRsi0LCB4'
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMaps);
