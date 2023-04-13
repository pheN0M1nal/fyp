import React from "react";

const PaymentDetails = () => {
  return (
    <>
      <div className="absolute top-[400px] text-zinc-300 text-xs w-64">
        <div className="flex flex-col space-y-2">
          {/* Subtotal */}
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$1,668</span>
          </div>
          {/* Shipping */}
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>$4</span>
          </div>
          {/* Tax */}
          <div className="flex justify-between">
            <span>Total(Tax incl.)</span>
            <span>$1,672</span>
          </div>
          {/* Checkout Buttons */}
          <div className="flex flex-row justify-between text-zinc-600 text-sm search p-3 rounded-lg">
            {/* Total Amount To be Paid */}
            <span>$1,672</span>
            <div className="flex items-center space-x-2 ">
              <button>Checkout</button>
              <i class="ri-arrow-right-line"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDetails;
