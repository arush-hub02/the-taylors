import React from "react";
import { Badge, Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../Redux/Customers/Order/Action";
import AddressCard from "../adreess/AdreessCard";
import { createPayment } from "../../../Redux/Customers/Payment/Action";

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector((state) => state);

  console.log("orderId ", order);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCreatePayment = () => {
    const data = { orderId: order.order?._id, jwt };
    dispatch(createPayment(data));
  };

  return (
    <div>
      <div className="p-2 pb-0">
        <div className="p-5 pt-4  shadow-lg rounded-md border ">
          <h1 className="text-xl font-semibold pb-3 opacity-60 ">
            Delivery Address
          </h1>
          <AddressCard address={order.order?.shippingAddress} />
        </div>
        <div id="card" className="lg:grid grid-cols-3 lg:mt-7  relative">
          <div className="lg:col-span-2 lg:px-5 bg-white">
            <div className=" space-y-3">
              {order.order?.orderItems.map((item) => (
                <>
                  <CartItem item={item} showButton={false} />
                </>
              ))}
            </div>
          </div>
          <div className="lg:px-5 sticky top-0 h-[100vh] lg:mt-0" id="rightbox">
            <div className="border p-4 bg-white shadow-lg rounded-md">
              <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
              <hr />

              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3 text-black ">
                  <span>Price ({order.order?.totalItem} item)</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-700">
                    -₹{order.order?.discounte}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Charges</span>
                  <span className="text-green-700">Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span className="text-green-700">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleCreatePayment}
                variant="contained"
                type="submit"
                className="w-full"
                sx={{
                  px: "2rem",
                  py: "0.8rem",
                  bgcolor: "#9155fd",
                  mt: "2rem",
                }}
              >
                Payment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
