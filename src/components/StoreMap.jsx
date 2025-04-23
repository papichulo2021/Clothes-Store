import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  { city: 'New York', coords: [40.7128, -74.0060] },
  { city: 'London', coords: [51.5074, -0.1278] },
  { city: 'Paris', coords: [48.8566, 2.3522] },
  { city: 'Tokyo', coords: [35.6895, 139.6917] }
];

const StoreMap = () => {
  const storeInfo = [
    {
      city: 'New York',
      address: '13/25 New Avenue, New Heaven, 45Y 73J',
      phone: '564546 54566 54',
      email: 'email@email.com',
    },
    {
      city: 'London',
      address: '13/25 New Avenue, New Heaven, 45Y 73J',
      phone: '564546 54566 54',
      email: 'email@email.com',
    },
    {
      city: 'Paris',
      address: '13/25 New Avenue, New Heaven, 45Y 73J',
      phone: '564546 54566 54',
      email: 'email@email.com',
    },
    {
      city: 'Tokyo',
      address: '13/25 New Avenue, New Heaven, 45Y 73J',
      phone: '564546 54566 54',
      email: 'email@email.com',
    }
  ];

  return (
    <div className="mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {/* Left - Map */}
        <div className="h-full flex">
          <MapContainer
            center={[40.7128, -74.0060]}
            zoom={2}
            className="h-full w-full min-h-[500px]"
            style={{ borderRadius: '0.5rem' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((loc, i) => (
              <Marker key={i} position={loc.coords}>
                <Popup>{loc.city}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Right - Store Info */}
        <div className="space-y-6 p-10 bg-[rgb(233,236,239)] h-full flex flex-col justify-between rounded-lg min-h-[500px]">
          <div>
            <h2 className="text-6xl font-bold mb-6 tracking-wider text-[rgb(134,142,150)]">Our Stores</h2>
            {storeInfo.map((store, idx) => (
              <div key={idx} className="border-b border-gray-300 pb-4 mb-4">
                <h3 className="text-xl font-semibold text-[rgb(204,192,153)]">{store.city}</h3>
                <p className="text-gray-700">{store.address}</p>
                <p className="text-gray-700">{store.phone}</p>
                <a href={`mailto:${store.email}`} className="text-black hover:underline">{store.email}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreMap;
