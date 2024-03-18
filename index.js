const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const AllUser = require("./controller/dataneuron");
const connectDB = require('./db'); 

// Connect to MongoDB
connectDB();

const port = process.env.PORT || 4000;
app.use(cors());
// Use bodyParser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes
app.post("/component1", AllUser.component1);
app.post("/component2", AllUser.component2);
app.post("/component3", AllUser.component3);
app.get("/allData", AllUser.allData);
app.post("/updateComp1", AllUser.updateComp1);
app.post("/updateComp2", AllUser.updateComp2);
app.post("/updateComp3", AllUser.updateComp3);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
