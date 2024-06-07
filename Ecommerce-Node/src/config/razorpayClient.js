const Razorpay = require("razorpay");

apiKey = "rzp_test_914otyjTPy5O8h";
apiSecret = "XLac8NVVkCwpfPhPppr4GMD1";

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports = razorpay;
