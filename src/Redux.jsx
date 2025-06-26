import axios from "axios";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";

const abc = {
  loading: false,
  data: null,
  error: null,
};

function reducer(state = abc, action) {
  switch (action.type) {
    case "start":
      return {
        ...state,
        loading: true,
      };
    // break;
    case "Insert":
      return {
        ...state,
        loading: false,
      };
    // break;
    case "fail":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // break;

    default:
      return state;
    // break;
  }
}

function Inq(name, email, subject, number, massage) {
  return async (dis) => {
    dis({
      type: "start",
    });
    try {
      await axios
        .post("https://g-b9eg.onrender.com/inquiry", {
          name,
          email,
          subject,
          number,
          massage,
        })
        .then(function (response) {
          if (response.data.status === "seccess") {
            alert("massge was sent.");
            fetch("https://g-b9eg.onrender.com/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                to: email,
                subject: "MOTOR easy care & life inquery",
                text: `Dear, ${name},
I hope this message finds you well.
I am reaching out to inquire about MOTORS.
we will contact you soon.
I came across your listing/details and found it quite interesting.
I am genuinely interested and would like to discuss this further.
A quick call or meeting at your convenience would be appreciated.
Please let me know a suitable time to connect.
Looking forward to your response.
thank you.




Best regards,
Owner of MOTORS easy care & life
smitkakadiya45@gmail.com`,
              }),
            });
          }
        });

      dis({
        type: "Insert",
      });
    } catch (error) {
      dis({
        type: "fail",
        payload: error,
      });
    }
  };
}

function ser(name, email, service, date, time, notes, number) {
  return async (dis) => {
    dis({
      type: "start",
    });
    try {
      await axios
        .post("https://g-b9eg.onrender.com/servicebook", {
          name,
          email,
          service,
          date,
          time,
          notes,
          number,
        })
        .then(function (response) {
          if (response.data.status === "seccess") {
            alert("we are contact you soon as possible.");
                fetch("https://g-b9eg.onrender.com/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                to: email,
                subject: "MOTOR easy care & life booking a service",
                text: `Dear, ${name},
I hope this message finds you well.
I am reaching out to booking a plan for you car servicing in our garage.
thank you for a support we give you a best service,
we can pick up your car on ${date} ${time}.
we can contact for collect your car from which address.
your ${service} service booked 
we can contact you shootly.

thank you.


Best regards,
Owner of MOTORS easy care & life
smitkakadiya45@gmail.com`
              }),
            });
          }
        });

      dis({
        type: "Insert",
      });
    } catch (error) {
      dis({
        type: "fail",
        payload: error,
      });
    }
  };
}
function plan(name, email, serviceplan, date, time, number, price) {
  return async (dis) => {
    dis({
      type: "start",
    });
    try {
      await axios
        .post("https://g-b9eg.onrender.com/serviceplan", {
          name,
          email,
          serviceplan,
          date,
          time,
          number,
          price,
        })
        .then(function (response) {
          if (response.data.status === "seccess") {
            alert("we are contact you soon as possible");
             fetch("https://g-b9eg.onrender.com/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                to: email,
                subject: "MOTOR easy care & life booking a plan for car service",
                text: `Dear, ${name},
I hope this message finds you well.
I am reaching out to booking a plan for you car servicing in our garage.
thank you for a support we give you a best service,
we can pick up your car on ${date} ${time}.
we can contact for collect your car from which address.
you book a ${serviceplan} plan and that price ${price} is booked. 
we can contact you shootly.

thank you.


Best regards,
Owner of MOTORS easy care & life
smitkakadiya45@gmail.com`
              }),
            });
          }
        });

      dis({
        type: "Insert",
      });
    } catch (error) {
      dis({
        type: "fail",
        payload: error,
      });
    }
  };
}

const st = createStore(reducer, applyMiddleware(thunk));

export { st, Inq, ser, plan };
