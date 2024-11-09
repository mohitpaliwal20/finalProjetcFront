import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import Navbar from '../components/Navbar'; 
import FooterContent from '../components/FooterContent';
let sum=0;
const Cart = () => {
    const location = useLocation();
    const { cart } = location.state || { cart: [] }; 
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cart.reduce((total, product) => {
            const price = parseFloat(product.price.replace(/,/g, '')) || 0;
            return total + price;
        }, 0);
    };
    

    const handleProceedToBuy = () => {
        alert("Proceeding to buy!");
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-5">
                <h1 className="text-3xl font-bold mb-5">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="flex flex-col">
                        {cart.map((product, index) => (
                            <div key={index} className="flex items-center justify-between border-b py-3">
                                <div className="flex items-center">
                                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md mr-4" />
                                    <span className="text-lg font-semibold">{product.name}</span>
                                </div>
                                <span className="text-lg font-semibold">₹{product.price}</span>
                            </div>
                        ))}
                    </div>
                )}
                {cart.length > 0 && (
                    <div className="flex justify-between items-center mt-5">
                        {/* Displaying the total amount with currency symbol only once */}
                        <h2 className="text-2xl font-bold">Total: ₹{calculateTotal().toLocaleString('en-IN')}</h2>
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
