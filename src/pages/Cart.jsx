// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import { useSelector } from "react-redux";
// import FooterContent from "../components/FooterContent";
// import axios from "axios";
//  let sum = 0;
// const Cart = () => {
//     const { token } = useSelector((state) => state.auth);
//     const location = useLocation();
//     const { cart } = location.state || { cart: [] };
//     const [cartData, setCartData] = useState([]);
//     // Fetch cart data
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/v1/cart/getcart", 
//           {
//             headers: {
//               Authorization: `Bearer ${token}`, // Correct way to pass the token in headers
//             },
//           }
//         );
//         console.log("Cart data:", response.data.cart); 
        
//         setCartData(response.data.cart); // Set the cart data to state
//       } catch (error) {
//         console.error("Error fetching cart data:", error);
//       }
//     };
    
//     useEffect(() => {
//       fetchCart(); // Fetch cart data on component mount
//     }, []); // Empty dependency array ensures it runs only once when the component mounts
    
//   const calculateTotal = () => {
//     return cart.reduce((total, product) => {
//       const price = parseFloat(product.price.replace(/,/g, "")) || 0;
//       return total + price;
//     }, 0);
//   };

//   const handleProceedToBuy = () => {
//     alert("Proceeding to buy!");
//   };

//   return (
//     <>
//       {/* <Navbar /> */}
//       <div className="container mx-auto p-5">
//         <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
//         {cartData.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <div className="flex flex-col">
//             {cartData.map((product, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between border-b py-3"
//               >
//                 <div className="flex items-center">
//                   <span className="text-lg font-semibold">{product.productname}</span>
//                 </div>
//                 <span className="text-lg font-semibold">₹{product.price}</span>
//               </div>
//             ))}
//           </div>
//         )}
//         {cart.length > 0 && (
//           <div className="flex justify-between items-center mt-5">
//             {/* Displaying the total amount with currency symbol only once */}
//             <h2 className="text-2xl font-bold">
//               Total: ₹{calculateTotal().toLocaleString("en-IN")}
//             </h2>
//             <button
//               onClick={handleProceedToBuy}
//               className="py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-500 transition-colors"
//             >
//               Proceed to Buy
//             </button>
//           </div>
//         )}
//       </div>
//       <FooterContent />
//     </>
//   );
// };

// export default Cart;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import FooterContent from "../components/FooterContent";
import axios from "axios";

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
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Cart data:", response.data.cart);
      setCartData(response.data.cart);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = (index, amount) => {
    setCartData((prevData) => {
      const updatedData = [...prevData];
      const newQuantity = updatedData[index].quantity + amount;

      // If new quantity is zero, remove the item from cart
      if (newQuantity <= 0) {
        updatedData.splice(index, 1); // Remove item from the array
      } else {
        updatedData[index].quantity = newQuantity;
      }

      return updatedData;
    });
  };

  const calculateTotal = () => {
    return cartData.reduce((total, product) => {
      const price = parseFloat(product.price.replace(/,/g, "")) || 0;
      return total + price * product.quantity;
    }, 0);
  };

  const handleProceedToBuy = () => {
    alert("Proceeding to buy!");
  };

  return (
    <>
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
                  <span className="text-lg font-semibold">
                    {product.productname}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(index, -1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(index, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <span className="text-lg font-semibold">
                  ₹ {parseInt(product.price.replace(/,/g, ""), 10) * product.quantity}
                </span>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end text-black font-semibold text-2xl border-t-2 border-black mt-5">
          <span>Total: ₹ {calculateTotal().toLocaleString("en-IN")}</span>
        </div>
        <div className="flex justify-end mt-5">
          <button
            onClick={handleProceedToBuy}
            className="bg-green-400 w-auto items-center p-4 rounded-md cursor-pointer text-black font-semibold"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
      <FooterContent />
    </>
  );
};

export default Cart;