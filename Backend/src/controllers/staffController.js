const { success, error } = require("../utils/response");
const { getAllData, createData } = require("../services/firebaseService");

exports.getStaff = async (req, res) => {
  try {
    const staff = await getAllData("staff");
    return success(res, staff, "Staff list fetched");
  } catch (err) {
    return error(res, 500, err.message);
  }
};

exports.createStaff = async (req, res) => {
  try {
    const staff = {
      name: req.body.name,
      type: req.body.type,
      lat: Number(req.body.lat),
      lng: Number(req.body.lng),
      status: req.body.status || "available",
      createdAt: Date.now(),
    };

    const result = await createData("staff", staff);
    return success(res, result, "Staff created");
  } catch (err) {
    return error(res, 500, err.message);
  }
};