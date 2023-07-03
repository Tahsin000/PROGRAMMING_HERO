import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import "./CheckoutForm.css";
import axios from "axios";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCard from "../../../../hooks/useCard";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ card: cart, price }) => {
  const[, refetch] = useCard();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState(false);

  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
      .catch(err => console.log(err));
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) return;

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      //   console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    cart.map((item) => console.log(item._id))
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;
      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        data: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        classesItemId: cart.map((item) => item.classItemId),
        status: "service pending",
        itemsName: cart.map((item) => item.name),
      };
      const classId = {
        classesItemId: cart.map((item) => item.classItemId),
      }
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data.insertResult.insertedId);
        if (res.data.insertResult.insertedId) {
          // axiosSecure.patch("/payments_availableSeats", classId).then((res) => {

          // })
          Swal.fire({
            icon: 'success',
            title: 'Payment Completed',
            text:"Congratulations! Your payment has been successfully processed. Thank you for your purchase!",
            showConfirmButton: false,
            timer: 2000
          })
          navigate("/dashboard/enrolled_classes");
        }
        refetch();
      });
    }
  };
  return (
    <div>
      <div className="grid md:grid-cols-1 place-items-end p-5 w-full">
        <div className="grid grid-cols-1 w-full place-items-end  shadow-lg">
          <div className="p-5  rounded-lg grid grid-cols-1 place-items-end gap-2 md:px-10 px-5">
            <h3 className="text-dm p-1 border rounded-lg border-[gray]">
              Classes : {cart.length}
            </h3>
            <h3 className="text-lg p-1 border rounded-lg border-[gray]">
              Total : $ {price}
            </h3>
          </div>
          <div className="w-full flex justify-end  md:px-10 px-5">
            <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
              <CardElement
                options={{
                  style: {
                    base: {
                      fontSize: "16px",
                      color: "#424770",
                      "::placeholder": {
                        color: "#aab7c4",
                      },
                      border: "3px solid #000",
                    },
                    invalid: {
                      color: "#9e2146",
                    },
                  },
                }}
              />
              <div className="grid grid-cols-1 place-items-end">
                <input 
                  className="btn btn-primary btn-sm w-1/2 md:w-1/3"
                  type="submit"
                  value="Pay"
                  disabled={!stripe || !clientSecret || processing}
                />
                <div className="w-full text-right text-xs my-3">
                  {cardError && <p className="text-[#dc3545] ml-8">{cardError}</p>}
                  {transactionId && (
                    <p className="text-[#28a745] ml-8">
                      Transaction complete with transactionId: {transactionId}
                    </p>
                  )}
                </div>
              </div>
            </form>
            
          </div>
          <img
            src="https://i.ibb.co/17PHM6G/image.png"
            className="my-5 w-1/4 max-md:w-1/2 mt-5"
            alt=""
          />
        </div>
        {/* This is information section */}
      </div>
    </div>
  );
};

export default CheckoutForm;
