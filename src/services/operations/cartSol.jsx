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
      const response = await apiConnector(
        "POST",
        cartEndpoint.ADD_CART_API,
        { token: token, productname: name, quantiy: 1, price: price },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      console.log("CART API RESPONSE............", response.config);

      console.log(response.data.success);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("product Add Successfully");
    } catch (error) {
      console.log("SENDOTP API ERROR............", error);
      toast.error(error.data.message);
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}
