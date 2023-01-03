const express = require("express");
const { getLanguages, getLicenses } = require("./utils/queryHelpers");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/licenses", async function (request, response) {
  try {
    const [result] = await getLicenses();
    console.log("licences", result);
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: "Sorry, something went wrong!",
    });
  }
});
app.get("/languages", async function (request, response) {
  try {
    const [result] = await getLanguages();
    console.log("languages", result);
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: "Sorry, something went wrong!",
    });
  }
});

app.listen(4000, () => console.log("Server up and running..."));
