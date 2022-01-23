import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import UserProvider from "./context/UserProvider";
import Wallet from "./pages/Wallet";

function App() {
  return (
    <UserProvider>
      <main>
        <h1>Trybe Wallet Com Context/Hooks</h1>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/carteira" component={Wallet} />
        </Switch>
      </main>
    </UserProvider>
  );
}

export default App;
