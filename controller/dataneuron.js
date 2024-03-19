const componentmodal1 = require("../models/component1");
const componentmodal2 = require("../models/component2");
const componentmodal3 = require("../models/component3");
const { performance } = require('perf_hooks');
const AllUser = {
  component1: async (req, res) => {
    try {
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      // Extract data from the request body
      const { firstname, lastname, email } = req.body;
      console.log(req.body, "pppppppp");
      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      const lastComponent = await componentmodal1.findOne().sort({ createdAt: -1 }).limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }
      
      // Create a new document if not found, or update the existing one and increment apiCall by 1
      const updatedData = await componentmodal1.findOneAndUpdate(
        { firstname, lastname, email,apiCall: currentApiCall + 1 }, 
     
      );
      res
        .status(201)
        .json({ message: "Data successfully pushed to the database" ,executionTime});
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  component2: async (req, res) => {
    try {
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const { firstname, lastname, email } = req.body;
      console.log(req.body, "pppppppp");
      
      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      const lastComponent = await componentmodal2.findOne().sort({ createdAt: -1 }).limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }
      
      // Create a new document if not found, or update the existing one and increment apiCall by 1
      const updatedData = await componentmodal2.findOneAndUpdate(
        { firstname, lastname, email,apiCall: currentApiCall + 1 }, 
     
      );

      // Send a success response
      res
        .status(201)
        .json({ message: "Data successfully pushed to the database",executionTime });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  component3: async (req, res) => {
    try {
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const { firstname, lastname, email } = req.body;
      console.log(req.body, "pppppppp");
      
      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      const lastComponent = await componentmodal3.findOne().sort({ createdAt: -1 }).limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }
      
      // Create a new document if not found, or update the existing one and increment apiCall by 1
      const updatedData = await componentmodal3.findOneAndUpdate(
        { firstname, lastname, email,apiCall: currentApiCall + 1 }, 
     
      );

      // Send a success response
      res
        .status(201)
        .json({ message: "Data successfully pushed to the database" ,executionTime});
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  allData: async (req, res) => {
    try {
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const comp1Data = await componentmodal1.find();
      const comp2Data = await componentmodal2.find();
      const comp3Data = await componentmodal3.find();
      const allData = { comp1Data, comp2Data, comp3Data };
      res.status(201).json({ message: "this is allData", allData ,executionTime});
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateComp1: async (req, res) => {
    try {
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const { firstname, lastname, email } = req.body;
      console.log(req.body);
      const current = await componentmodal1.findOne();
      console.log(current, "ppppppppp");
      const updated = await componentmodal1.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiupdate: current.apiupdate + 1,
      });
      res.status(201).json({ message: "updated",executionTime });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  updateComp2: async (req, res) => {
    try {
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const { firstname, lastname, email } = req.body;
      console.log(req.body);
      const current = await componentmodal2.findOne();
      console.log(current, "ppppppppp");
      const updated = await componentmodal2.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiupdate: current.apiupdate + 1,
      });
      res.status(201).json({ message: "updated",executionTime });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  updateComp3: async (req, res) => {
    try {
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const { firstname, lastname, email } = req.body;
      console.log(req.body);
      const current = await componentmodal3.findOne();
      console.log(current, "ppppppppp");
      const updated = await componentmodal3.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiupdate: current.apiupdate + 1,
      });
      res.status(201).json({ message: "updated",executionTime });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
module.exports = AllUser;
