// import React, { useState, useEffect, useCallback } from 'react';
// import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
// import { MapPin } from 'lucide-react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import debounce from 'lodash/debounce';

// // Import marker icons
// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow,
//     iconSize: [25, 41],
//     iconAnchor: [12, 41]
// });

// L.Marker.prototype.options.icon = DefaultIcon;

// const ReportFormLocationInput = ({ onLocationChange, initialValue }) => {
//   const [address, setAddress] = useState(initialValue || '');
//   const [suggestions, setSuggestions] = useState([]);
//   const [coordinates, setCoordinates] = useState([-1.2921, 36.8219]); // Default to Nairobi
//   const [showMap, setShowMap] = useState(false);

//   const fetchSuggestions = async (input) => {
//     if (input.length < 3) return;
//     try {
//       const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&countrycodes=ke&limit=5`);
//       const data = await response.json();
//       setSuggestions(data);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }
//   };

//   const debouncedFetchSuggestions = useCallback(
//     debounce(fetchSuggestions, 300),
//     []
//   );

//   const handleAddressChange = (e) => {
//     const value = e.target.value;
//     setAddress(value);
//     debouncedFetchSuggestions(value);
//   };

//   const handleSuggestionSelect = (suggestion) => {
//     setAddress(suggestion.display_name);
//     setCoordinates([parseFloat(suggestion.lat), parseFloat(suggestion.lon)]);
//     setSuggestions([]);
//     setShowMap(true);
//   };

//   const handleUseCurrentLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           setCoordinates([latitude, longitude]);
//           setShowMap(true);
//           try {
//             const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
//             const data = await response.json();
//             if (data && data.display_name) {
//               setAddress(data.display_name);
//             }
//           } catch (error) {
//             console.error('Error reverse geocoding:', error);
//           }
//         },
//         (error) => {
//           console.error('Error getting location:', error);
//         }
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };

//   useEffect(() => {
//     if (initialValue) {
//       setAddress(initialValue);
//       // Optionally, you could geocode the initial value to get coordinates
//       // This would require an additional API call to a geocoding service
//       setShowMap(true);
//     }
//   }, [initialValue]);

//   useEffect(() => {
//     if (coordinates) {
//       onLocationChange({ address, lat: coordinates[0], lng: coordinates[1] });
//     }
//   }, [address, coordinates, onLocationChange]);

//   const MapEvents = () => {
//     const map = useMap();
//     useEffect(() => {
//       map.on('click', async (e) => {
//         const { lat, lng } = e.latlng;
//         setCoordinates([lat, lng]);
//         try {
//           const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
//           const data = await response.json();
//           if (data && data.display_name) {
//             setAddress(data.display_name);
//           }
//         } catch (error) {
//           console.error('Error reverse geocoding:', error);
//         }
//       });
//     }, [map]);
//     return null;
//   };

//   return (
//     <div className="space-y-4">
//       <div className="relative">
//         <input
//           type="text"
//           value={address}
//           onChange={handleAddressChange}
//           placeholder="Enter address or place name in Kenya"
//           className="w-full p-2 border rounded-md"
//         />
//         <button
//           onClick={handleUseCurrentLocation}
//           className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-md"
//         >
//           <MapPin size={20} />
//         </button>
//         {suggestions.length > 0 && (
//           <ul className="absolute z-10 w-full bg-white border rounded-md mt-1 max-h-60 overflow-auto">
//             {suggestions.map((suggestion, index) => (
//               <li 
//                 key={index} 
//                 onClick={() => handleSuggestionSelect(suggestion)}
//                 className="p-2 hover:bg-gray-100 cursor-pointer"
//               >
//                 {suggestion.display_name}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       {showMap && (
//         <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={coordinates} />
//           <MapEvents />
//         </MapContainer>
//       )}
//       <button
//         onClick={() => setShowMap(!showMap)}
//         className="text-blue-500 underline"
//       >
//         {showMap ? 'Hide Map' : 'Show Map'}
//       </button>
//     </div>
//   );
// };

// export default ReportFormLocationInput;



import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import debounce from 'lodash/debounce';
import styles from './ReportFormLocationInput.module.css';

// Import marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const ReportFormLocationInput = ({ onLocationChange, initialValue }) => {
  const [address, setAddress] = useState(initialValue || '');
  const [suggestions, setSuggestions] = useState([]);
  const [coordinates, setCoordinates] = useState([-1.2921, 36.8219]); // Default to Nairobi
  const [showMap, setShowMap] = useState(false);

  const fetchSuggestions = async (input) => {
    if (input.length < 3) return;
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&countrycodes=ke&limit=5`);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const debouncedFetchSuggestions = useCallback(
    debounce(fetchSuggestions, 300),
    []
  );

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    debouncedFetchSuggestions(value);
  };

  const handleSuggestionSelect = (suggestion) => {
    setAddress(suggestion.display_name);
    setCoordinates([parseFloat(suggestion.lat), parseFloat(suggestion.lon)]);
    setSuggestions([]);
    setShowMap(true);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates([latitude, longitude]);
          setShowMap(true);
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            if (data && data.display_name) {
              setAddress(data.display_name);
            }
          } catch (error) {
            console.error('Error reverse geocoding:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    if (initialValue) {
      setAddress(initialValue);
      setShowMap(true);
    }
  }, [initialValue]);

  useEffect(() => {
    if (coordinates) {
      onLocationChange({ address, lat: coordinates[0], lng: coordinates[1] });
    }
  }, [address, coordinates, onLocationChange]);

  const MapEvents = () => {
    const map = useMap();
    useEffect(() => {
      map.on('click', async (e) => {
        const { lat, lng } = e.latlng;
        setCoordinates([lat, lng]);
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
          const data = await response.json();
          if (data && data.display_name) {
            setAddress(data.display_name);
          }
        } catch (error) {
          console.error('Error reverse geocoding:', error);
        }
      });
    }, [map]);
    return null;
  };

  return (
    <div className={styles.locationInputContainer}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter address or place name in Kenya"
          className={styles.locationInput}
        />
        <button
          onClick={handleUseCurrentLocation}
          className={styles.currentLocationButton}
          title="Use current location"
        >
          <MapPin size={20} />
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className={styles.suggestionsList}>
          {suggestions.map((suggestion, index) => (
            <li 
              key={index} 
              onClick={() => handleSuggestionSelect(suggestion)}
              className={styles.suggestionItem}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setShowMap(!showMap)}
        className={styles.mapToggleButton}
      >
        {showMap ? 'Hide Map' : 'Show Map'}
      </button>
      {showMap && (
        <div className={styles.mapContainer}>
          <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coordinates} />
            <MapEvents />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default ReportFormLocationInput;