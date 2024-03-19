const componentmodal1 = require("../models/component1");
const componentmodal2 = require("../models/component2");
const componentmodal3 = require("../models/component3");
const { performance } = require("perf_hooks");
const AllUser = {
  component1: async (req, res) => {
    try {
      //here calulating execution time of API from line 9 to 12
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      // Extract data from the request body
      const { firstname, lastname, email } = req.body;
      console.log(req.body, "pppppppp");
      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      // i am getting value of api call of this table and then it will just increment to +1
      const lastComponent = await componentmodal1
        .findOne()
        .sort({ createdAt: -1 })
        .limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }

      // Create a new document if not found, or update the existing one and increment apiCall by 1
      const updatedData = await componentmodal1.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiCall: currentApiCall + 1,
      });
      // sending response and execution time of API
      res.status(201).json({
        message: "Data successfully added in component 1",
        executionTime,
      });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  component2: async (req, res) => {
    try {
      //here calulating execution time of API from line 48 to 50
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const { firstname, lastname, email } = req.body;
      console.log(req.body, "pppppppp");

      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      // i am getting value of api call of this table and then it will just increment to +1
      const lastComponent = await componentmodal2
        .findOne()
        .sort({ createdAt: -1 })
        .limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }

      // Create a new document if not found, or update the existing one and increment apiCall by 1
      const updatedData = await componentmodal2.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiCall: currentApiCall + 1,
      });

      // Send a success response and execution time of API
      res.status(201).json({
        message: "Data successfully added in component 2",
        executionTime,
      });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  component3: async (req, res) => {
    try {
      //here calulating execution time of API from line 48 to 86
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const { firstname, lastname, email } = req.body;
      console.log(req.body, "pppppppp");

      // Find the current value of apiCall from the database
      let currentApiCall = 0; // Default value
      // i am getting value of api call of this table and then it will just increment to +1

      const lastComponent = await componentmodal3
        .findOne()
        .sort({ createdAt: -1 })
        .limit(1);
      if (lastComponent) {
        currentApiCall = lastComponent.apiCall;
      }

      // Create a new document if not found, or update the existing one and increment apiCall by 1
      const updatedData = await componentmodal3.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiCall: currentApiCall + 1,
      });

      // Send a success response with execution time of API
      res.status(201).json({
        message: "Data successfully pushed to the database",
        executionTime,
      });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  allData: async (req, res) => {
    try {
      //here calulating execution time of API from line 122 to 124
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const comp1Data = await componentmodal1.find(); // getting data of componentmodal1
      const comp2Data = await componentmodal2.find(); // getting data of componentmodal2
      const comp3Data = await componentmodal3.find(); // getting data of componentmodal3
      const allData = { comp1Data, comp2Data, comp3Data }; //merging all data for final response

      //sending all data of component 1 ,component 2 and component 3 with execution time of this API
      res
        .status(201)
        .json({ message: "this is allData", allData, executionTime });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  updateComp1: async (req, res) => {
    try {
      //here calulating execution time of API from line 144 to 148
      const startTime = performance.now();
      const endTime = performance.now();
      const executionTime = endTime - startTime;
      console.log(`API execution time: ${executionTime} milliseconds`);
      const { firstname, lastname, email } = req.body;
      console.log(req.body);
      // i am getting value of apiupdate call of this table and then it will just increment to +1
      const current = await componentmodal1.findOne();
      console.log(current, "ppppppppp");
      const updated = await componentmodal1.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiupdate: current.apiupdate + 1,
      });
      //sending success message with execution time of this API
      res.status(201).json({ message: "Database updated of component 1", executionTime });
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
      // i am getting value of apiupdate call of this table and then it will just increment to +1

      const current = await componentmodal2.findOne();
      console.log(current, "ppppppppp");
      const updated = await componentmodal2.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiupdate: current.apiupdate + 1,
      });
      //sending success message with execution time of this API
      res.status(201).json({ message: "Database updated of component 2", executionTime });
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
      // just trying to get the component3 api update value
      const current = await componentmodal3.findOne();
      console.log(current, "ppppppppp");
      const updated = await componentmodal3.findOneAndUpdate({
        firstname,
        lastname,
        email,
        apiupdate: current.apiupdate + 1, //updating it to +1
      });
      //sending success message with execution time of this API
      res.status(201).json({ message: "Database updated of component 3", executionTime });
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
};
module.exports = AllUser;
