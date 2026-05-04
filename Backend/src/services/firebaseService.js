const db = require("../config/firebase");

exports.createData = async (path, data) => {
  const ref = db.ref(path).push();
  await ref.set(data);

  return {
    id: ref.key,
    ...data,
  };
};

exports.getAllData = async (path) => {
  const snapshot = await db.ref(path).once("value");
  const data = snapshot.val();

  if (!data) return [];

  return Object.keys(data).map((id) => ({
    id,
    ...data[id],
  }));
};

exports.getDataById = async (path, id) => {
  const snapshot = await db.ref(`${path}/${id}`).once("value");

  if (!snapshot.exists()) return null;

  return {
    id,
    ...snapshot.val(),
  };
};

exports.updateData = async (path, id, data) => {
  await db.ref(`${path}/${id}`).update(data);

  return {
    id,
    ...data,
  };
};