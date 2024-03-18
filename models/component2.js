const mongoose = require("mongoose");
const component2Schema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  apiCall: { type: Number, default: 0 },
  apiupdate: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

// Create Component1 model
const Component2 = mongoose.model("Component2", component2Schema);

// Export the Component2 model directly
module.exports = Component2;
