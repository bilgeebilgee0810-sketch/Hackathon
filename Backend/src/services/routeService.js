exports.createRouteLine = (staff, userLocation) => {
  return [
    {
      lat: staff.lat,
      lng: staff.lng,
    },
    {
      lat: userLocation.lat,
      lng: userLocation.lng,
    },
  ];
};