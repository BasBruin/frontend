import React from "react";
import "./Login.css";
import MenuAppbar from "./components/Appbar";
import { useState } from "react";


function Login() {
    const [Wachtwoord, setWachtwoord] = useState([]);
    const [Gebruikersnaam, setGebruikersnaam] = useState([]);
    const [Id, setId] = useState([]);

    function Login(e) {
        e.preventDefault();
        fetch("https://localhost:7046/api/LoginCheckPassword?Username=" + Gebruikersnaam + "&Password="+ Wachtwoord)
          .then((response) => response.json())
          .then((json) => setId(json));
          
           if(Id !== 0)
           {
             console.log("Login goed");
           }
           else{
            console.log("Login fout");
           }
          
      }

  return (
    <div class="inlog_achtergrond">
      <MenuAppbar />
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className="login__field">
              <input
                type="text"
                className="input"
                placeholder="Enter Gebruikersnaam"
                id="Gebruikersnaam"
                onChange={(e) => setGebruikersnaam(e.target.value)}
              />
            </div>
            <div className="login__field">
              <input
                type="password"
                className="input"
                placeholder="Enter Wachtwoord"
                id="Wachtwoord"
                onChange={(e) => setWachtwoord(e.target.value)}
              />
            </div>
            <button className="button login__submit" onClick={Login}>
              <span className="button__text">Inloggen</span>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}

export default Login;
