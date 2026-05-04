exports.success = (res, data = {}, message = "Success") => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

exports.error = (res, statusCode = 500, message = "Server error") => {
  return res.status(statusCode).json({
    success: false,
    message,
  });
};