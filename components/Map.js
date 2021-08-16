import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";



function Map({ searchResults }) {

    const coordinates = searchResults.map((result) => ({
        latitude: result.lat,
        longitude: result.long,
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    })


    return <ReactMapGL
        mapStyle="mapbox://styles/jasonrillera/cksf6n4rv0l1v17p7ox30mfct"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
        {searchResults.map((result) => (
            <div key={result.long}>
                <Marker
                    latitude={result.lat}
                    longitude={result.long}
                    offsetLeft={-20}
                    offsetTop={-10}
                >

                </Marker>
            </div>
        ))}
        
    </ReactMapGL>;
}

export default Map;
