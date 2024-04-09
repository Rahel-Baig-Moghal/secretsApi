import express from "express";
import axios from "axios";

const port = 3001;
const app = express();
const api_url = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(api_url);
    res.render("index.ejs", {
      secret: JSON.stringify(response.data.secret),
      user: JSON.stringify(response.data.username),
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Sever running at ${port}`);
});
