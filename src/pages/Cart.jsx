import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import FooterContent from "../components/FooterContent";
import axios from "axios";
 let sum = 0;
const Cart = () => {
    const { token } = useSelector((state) => state.auth);
    const location = useLocation();
    const { cart } = location.state || { cart: [] };
    const [cartData, setCartData] = useState([]);
    // Fetch cart data
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/cart/getcart", 
          {
            headers: {
              Authorization: `Bearer ${token}`, // Correct way to pass the token in headers
            },
          }
        );
        console.log("Cart data:", response.data.cart); 
        
        setCartData(response.data.cart); // Set the cart data to state
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    
    useEffect(() => {
      fetchCart(); // Fetch cart data on component mount
    }, []); // Empty dependency array ensures it runs only once when the component mounts
    
  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price.replace(/,/g, "")) || 0;
      return total + price;
    }, 0);
  };

  const handleProceedToBuy = () => {
    alert("Proceeding to buy!");
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
        {cartData.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="flex flex-col">
            {cartData.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b py-3"
              >
                <div className="flex items-center">
                  <span className="text-lg font-semibold">{product.productname}</span>
                </div>
                <span className="text-lg font-semibold">₹{product.price}</span>
              </div>
            ))}
          </div>
        )}
        {cart.length > 0 && (
          <div className="flex justify-between items-center mt-5">
            {/* Displaying the total amount with currency symbol only once */}
            <h2 className="text-2xl font-bold">
              Total: ₹{calculateTotal().toLocaleString("en-IN")}
            </h2>
            <button
              onClick={handleProceedToBuy}
              className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
            >
              Proceed to Buy
            </button>
          </div>
        )}
      </div>
      <FooterContent />
    </>
  );
};

export default Cart;
