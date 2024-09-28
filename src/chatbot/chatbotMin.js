import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ChatbotMin() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  function handleLogOut() {
    fetch("https://chatbot-e9vv.onrender.com/api/logout/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      //   body: JSON.stringify({ username, password }),
      credentials: "include", // This ensures the session cookie is stored
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          // Navigate to home/dashboard after login
          navigate("/login");
        } else if (data.error) {
          setError(data.error);
        }
      });
  }

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }

  return (
    <>
      <div className="d-flex vh-100 flex-row ">
        <div className="d-flex flex-column align-items-center justify-content-center w-50 ms-5 mb-5">
          <h2>
            Please ask the chatbot about the Order Status or the Product Details
          </h2>
          <Button
            className="mt-5"
            variant="outlined"
            onClick={() => handleLogOut()}
          >
            Log Out
          </Button>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <iframe
            className="border border-dark rounded"
            width="350"
            height="430"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/e02d7f76-5391-4b66-88d7-9a0625a7ced2"
          ></iframe>
        </div>
      </div>
    </>
  );
}
