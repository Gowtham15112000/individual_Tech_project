import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MyMarker from './myMarker';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export function MapContainer (props){
    return (
      <Map
        google={props.google}
        zoom={6}
        style={mapStyles}
        initialCenter={
          {
            lat: 59.955413,
            lng: 30.337844
          }
        }
      >
        <Marker
         lat={59.955413}
         lng={30.337844}
         text="My Marker"
        /> 
      </Map>
    );
  }

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDL5ZpMacru3HV0Q_sBN9ts_IGRoNPOxwE'
})(MapContainer);