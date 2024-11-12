import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setLoading, setToken } from "../../slices/authSlice";
// import { resetCart } from "../../slices/cartSlice";
// import { setUser } from "../../slices/profileSlice";
import { apiConnector } from "../apiconnector";
import { cartEndpoint } from "../api";

export function addCart(name, price, navigate, token) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try {
      console.log("Data arfe", name, price, token);

      const response = await apiConnector(
        "POST",
        cartEndpoint.ADD_CART_API,
        { token: token, productname: name, quantity: '1', price: price },  // Corrected 'quantiy' to 'quantity'
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("CART API RESPONSE............", response.data);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Product added successfully");
    } catch (error) {
      toast.dismiss(toastId);
      console.log("Cart API ERROR............", error);
      const errorMessage = error?.response?.data?.message || error.message || "An error occurred";  // Added fallback for error message
      toast.error(errorMessage);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}
