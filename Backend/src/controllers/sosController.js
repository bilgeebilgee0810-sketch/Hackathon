const { success, error } = require("../utils/response");
const {
  createData,
  getAllData,
  updateData,
} = require("../services/firebaseService");
const { findNearestStaff } = require("../services/nearestStaff");
const { createRouteLine } = require("../services/routeService");

exports.createSOS = async (req, res) => {
  try {
    const { type, userLat, userLng } = req.body;

    if (!type || userLat === undefined || userLng === undefined) {
      return error(res, 400, "type, userLat, userLng are required");
    }

    const staffList = await getAllData("staff");

    const nearestStaff = findNearestStaff(
      Number(userLat),
      Number(userLng),
      staffList,
      type
    );

    const sosData = {
      type,
      userLat: Number(userLat),
      userLng: Number(userLng),
      status: nearestStaff ? "assigned" : "pending",
      assignedStaffId: nearestStaff ? nearestStaff.id : null,
      createdAt: Date.now(),
    };

    const createdSOS = await createData("sosRequests", sosData);

    let routeLine = null;

    if (nearestStaff) {
      routeLine = createRouteLine(nearestStaff, {
        lat: Number(userLat),
        lng: Number(userLng),
      });

      await updateData("staff", nearestStaff.id, {
        status: "busy",
      });
    }

    return success(
      res,
      {
        sos: createdSOS,
        nearestStaff,
        routeLine,
      },
      "SOS request created"
    );
  } catch (err) {
    return error(res, 500, err.message);
  }
};

exports.getSOSRequests = async (req, res) => {
  try {
    const sosRequests = await getAllData("sosRequests");
    return success(res, sosRequests, "SOS requests fetched");
  } catch (err) {
    return error(res, 500, err.message);
  }
};

exports.resolveSOS = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await updateData("sosRequests", id, {
      status: "resolved",
      resolvedAt: Date.now(),
    });

    return success(res, result, "SOS resolved");
  } catch (err) {
    return error(res, 500, err.message);
  }
};