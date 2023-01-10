import React from "react";
import "./Login.css";
import MenuAppbar from "./components/Appbar";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
    const [Wachtwoord, setWachtwoord] = useState([]);
    const [Gebruikersnaam, setGebruikersnaam] = useState([]);
    const [Id, setId] = useState([]);

    function Login() {
        fetch("https://localhost:7046/api/LoginCheckPassword?Username=" + Gebruikersnaam + "&Password="+ Wachtwoord,)
          .then((response) => response.json())
          .then((json) => setId(json));
          if(Id != null){
            Navigate("/");
          }
      }

  return (
    <div class="inlog_achtergrond">
      <MenuAppbar />
      <div class="screen">
        <div class="screen__content">
          <form class="login">
            <div class="login__field">
              <input
                type="text"
                className="input"
                name="login_input"
                placeholder="Enter Gebruikersnaam"
                id="Gebruikersnaam"
                onChange={(e) => setGebruikersnaam(e.target.value)}
              />
            </div>
            <div class="login__field">
              <input
                type="password"
                className="input"
                name="login_input"
                placeholder="Enter Wachtwoord"
                id="Wachtwoord"
                onChange={(e) => setWachtwoord(e.target.value)}
              />
            </div>
            <button class="button login__submit" onClick={Login}>
              <span class="button__text">Inloggen</span>
            </button>
          </form>
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
