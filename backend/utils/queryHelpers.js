const getConnection = require("../connection/db");

const getLicenses = async () => {
  const connection = await getConnection();
  return connection.execute("select * from licenses ORDER BY total DESC");
};

const getLanguages = async () => {
  const connection = await getConnection();
  return connection.execute(
    "select * from languages ORDER BY total_bytes DESC"
  );
};

module.exports = {
  getLicenses,
  getLanguages,
};
