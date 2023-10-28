
const input = document.querySelector("#money-amount");

// This function will be called when the PayPal SDK is loaded
    const paypalDiv = document.querySelector("#paypal");
    
    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: input.value
            }
          }]
        });
      },
      onApprove: (data, actions) => {
        return actions.order.capture().then((details) => {
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal');