import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = ({ orders }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [clintSecret, setClintSecret] = useState("");
  const [procesing, setProcesing] = useState(false);
  const { paybleAmount, buyerEmail, buyerName, _id } = orders;

  useEffect(() => {
    fetch("https://rocky-earth-57369.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ paybleAmount }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.clientSecret) {
          setClintSecret(data.clientSecret);
        }
      });
  }, [paybleAmount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // get card info
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setProcesing(true);
    setCardError(error?.message || "");
    setSuccess("");
    // confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clintSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      }
    );
    if (intentError) {
      setCardError(intentError?.message);
      setProcesing(false);
    } else {
      setCardError("");
      setTransectionId(paymentIntent.id);
      console.log(paymentIntent);
      setSuccess("Congrates, Your Payment Is Completed");

      // store payment info on database
      const payment = {
        orders: _id,
        transactionId: paymentIntent.id,
      };

      // update order
      fetch(`https://rocky-earth-57369.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcesing(false);
          console.log(data);
        });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm rounded-none mt-4 text-white"
          type="submit"
          disabled={!stripe || !clintSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-error">{cardError}</p>}
      {success && (
        <div>
          <p className="text-success">{success}</p>
          <p className="text-slate-500 ">
            Your Transaction ID{" "}
            <span className="font-bold text-info">{transectionId}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
