import { useState } from "react";
import GoogleMapReact from 'google-map-react'

import Marker from './Marker';

interface Props {
    text: string;
    lat: number;
    lng: number;
}
const AnyReactComponent = ({
    lat,
    lng,
    text
}: Props) => {
    return (
        <div style={{
            color: 'white',
            background: 'grey',
            padding: '15px 10px',
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '100%',
            transform: 'translate(-50%, -50%)'
        }}>
            {text}
        </div>
    )
}



export default function SimpleMap(props: any) {
    const getMapOptions = (maps: any) => {
        return {
            disableDefaultUI: true,
            mapTypeControl: true,
            streetViewControl: true,
            styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        };
    };

    const [center, setCenter] = useState({ lat: 45.3549795, lng: -75.8064873 });
    const [zoom, setZoom] = useState(16);
    const apiKey: string = process.env.REACT_APP_GOOGLE_MAP_API_KEY?.toString() || ""

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={center}
            defaultZoom={zoom}
            options={getMapOptions}
        >
            <Marker
                lat={45.3549795}
                lng={-75.8064873}
                text="Bay"
                color="blue"
            />
        </GoogleMapReact>
    );
}