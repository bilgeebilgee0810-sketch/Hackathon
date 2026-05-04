const { success, error } = require("../utils/response");
const { getAllData, createData } = require("../services/firebaseService");

exports.getCrowdZones = async (req, res) => {
  try {
    const zones = await getAllData("crowdZones");
    return success(res, zones, "Crowd zones fetched");
  } catch (err) {
    return error(res, 500, err.message);
  }
};

exports.createCrowdZone = async (req, res) => {
  try {
    const zone = {
      name: req.body.name,
      level: req.body.level || "low",
      lat: Number(req.body.lat),
      lng: Number(req.body.lng),
      radius: Number(req.body.radius || 100),
      createdAt: Date.now(),
    };

    const result = await createData("crowdZones", zone);
    return success(res, result, "Crowd zone created");
  } catch (err) {
    return error(res, 500, err.message);
  }
};