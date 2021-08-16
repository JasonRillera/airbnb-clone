import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = useState({});

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
                <a
                    onClick={() => {
                        setSelectedLocation(result);
                    }}
                >
                    <p
                        role="img"
                        className="cursor-pointer text-2xl animate-bounce"
                        aria-label="push-pin"
                    >
                        📌
                    </p>
                </a>
            </Marker>

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
        
    </ReactMapGL>;
}

export default Map;
