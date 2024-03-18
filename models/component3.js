const mongoose = require("mongoose");
const component3Schema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  apiCall: { type: Number, default: 0 },
  apiupdate: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

// Create Component1 model
const Component3 = mongoose.model("Component3", component3Schema);

// Export the Component3 model directly
module.exports = Component3;
