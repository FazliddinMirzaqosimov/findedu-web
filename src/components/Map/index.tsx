import {GoogleMap, Marker, useLoadScript} from "@react-google-maps/api";
import {useMemo, useState} from "react";



const BranchMap = () => {
    const [libraries, setLibraries] = useState<("places" | "drawing" | "geometry" | "localContext" | "visualization")[]>(['places']);

    const {isLoaded}=useLoadScript({
        googleMapsApiKey:'AIzaSyBnEFRf1VbLnmDHkWmS2vEFzV7HkEsRtWU',
        libraries
    })

    if(!isLoaded) return <div>Loading..</div>
    return (
        <div className="map-container">
            <GoogleMap
                mapContainerStyle={{ height: '100%', width: '100%' }}
                zoom={8}
                center={{ lat: 41.259196, lng: 69.240074 }}


            >
                <Marker position={{ lat: 41.259196, lng: 69.240074 }}
                />
            </GoogleMap>
        </div>
    )
}


export default BranchMap;