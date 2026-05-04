const { calculateDistance } = require("./distance");

exports.findNearestStaff = (userLat, userLng, staffList, sosType) => {
  let requiredType = "security";

  if (sosType === "medical") requiredType = "medic";
  if (sosType === "lost_child") requiredType = "police";
  if (sosType === "safety") requiredType = "security";

  const availableStaff = staffList.filter(
    (staff) => staff.type === requiredType && staff.status === "available"
  );

  if (availableStaff.length === 0) return null;

  let nearest = null;
  let minDistance = Infinity;

  for (const staff of availableStaff) {
    const distance = calculateDistance(
      userLat,
      userLng,
      staff.lat,
      staff.lng
    );

    if (distance < minDistance) {
      minDistance = distance;
      nearest = {
        ...staff,
        distanceKm: distance,
        distanceMeter: Math.round(distance * 1000),
      };
    }
  }

  return nearest;
};