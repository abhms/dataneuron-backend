const mongoose = require("mongoose");
const component1Schema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  apiCall: { type: Number, default: 0 },
  apiupdate: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

// Create Component1 model
const Component1 = mongoose.model("Component1", component1Schema);

// Export the Component1 model directly
module.exports = Component1;
