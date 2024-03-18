const componentmodal1 = require("../models/component1");
const componentmodal2 = require("../models/component2");
const componentmodal3 = require("../models/component3");
const AllUser = {
  component1: async (req, res) => {
    try {
      // Extract data from the request body
      const { firstname, lastname, email } = req.body;

      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      const lastComponent = await componentmodal3
        .findOne()
        .sort({ createdAt: -1 })
        .limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }

      //   Create a new document using the Component1 model
      const newComponent = new componentmodal3({
        firstname,
        lastname,
        email,
        apiCall: 1, // Increment the value of apiCall
      });

      // Save the new document to the database
      await newComponent.save();

      // Send a success response
      res
        .status(201)
        .json({ message: "Data successfully pushed to the database" });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  component2: async (req, res) => {
    try {
      const { firstname, lastname, email } = req.body;

      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      const lastComponent = await componentmodal2
        .findOne()
        .sort({ createdAt: -1 })
        .limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }

      //   Create a new document using the Component1 model
      const newComponent = new componentmodal2({
        firstname,
        lastname,
        email,
        apiCall: 1, // Increment the value of apiCall
      });

      // Save the new document to the database
      await newComponent.save();

      // Send a success response
      res
        .status(201)
        .json({ message: "Data successfully pushed to the database" });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  component3: async (req, res) => {
    try {
      const { firstname, lastname, email } = req.body;

      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      const lastComponent = await componentmodal3
        .findOne()
        .sort({ createdAt: -1 })
        .limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }

      //   Create a new document using the Component1 model
      const newComponent = new componentmodal3({
        firstname,
        lastname,
        email,
        apiCall: 1, // Increment the value of apiCall
      });

      // Save the new document to the database
      await newComponent.save();

      // Send a success response
      res
        .status(201)
        .json({ message: "Data successfully pushed to the database" });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  allData: async (req, res) => {
    try {
      const comp1Data = await componentmodal1.find();
      const comp2Data = await componentmodal2.find();
      const comp3Data = await componentmodal3.find();
      const allData = { comp1Data, comp2Data, comp3Data };
      res.status(201).json({ message: "this is allData", allData });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateComp1: async (req, res) => {
    try {
      const {firstname,lastname,email}=req.body
      console.log(req.body);
      const current=await componentmodal1.findOne();
      console.log(current,"ppppppppp")
      const updated=await componentmodal1.findOneAndUpdate({
        firstname,lastname,email,apiupdate:current.apiupdate+1
      })
      res.status(201).json({ message: "updated" });

    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
   updateComp2: async (req, res) => {
    try {
      const {firstname,lastname,email}=req.body
      console.log(req.body);
      const current=await componentmodal2.findOne();
      console.log(current,"ppppppppp")
      const updated=await componentmodal2.findOneAndUpdate({
        firstname,lastname,email,apiupdate:current.apiupdate+1
      })
      res.status(201).json({ message: "updated" });

    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }, updateComp3: async (req, res) => {
    try {
      const {firstname,lastname,email}=req.body
      console.log(req.body);
      const current=await componentmodal3.findOne();
      console.log(current,"ppppppppp")
      const updated=await componentmodal3.findOneAndUpdate({
        firstname,lastname,email,apiupdate:current.apiupdate+1
      })
      res.status(201).json({ message: "updated" });

    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
module.exports = AllUser;
