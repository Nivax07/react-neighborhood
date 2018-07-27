import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import MapStyles from '../../utils/mapStyles.json';
import MarkerInfo from '../MarkerInfo/MarkerInfo';
import './Map.css';

const Map = compose(withScriptjs, withGoogleMap)(props =>
  <GoogleMap
    defaultZoom={14}
    center={{ lat: 38.7204563, lng: -9.1378685 }}
    defaultOptions={{ styles: MapStyles }}
  >
  {
    props.showingPlaces.length === 0 ?
      props.places.map(place => (
          <MarkerInfo
            key={place.id}
            placeId={place.id}
            placePos={place.position}
            onToggleOpen={props.onToggleOpen}
            showInfoId={props.showInfoId}
            action={props.action}
          />
      ))
    :
      props.showingPlaces.map(place => (
        <MarkerInfo
          key={place.id}
          placeId={place.id}
          placePos={place.position}
          onToggleOpen={props.onToggleOpen}
          showInfoId={props.showInfoId}
          action={props.action}
        />
      ))
  }
  </GoogleMap>
);

Map.propTypes = {
  onToggleOpen: PropTypes.func.isRequired,
  showInfoId: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  showingPlaces: PropTypes.array.isRequired
}

export default Map;
