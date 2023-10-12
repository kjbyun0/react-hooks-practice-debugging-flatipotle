import React, { useState } from "react";
import Form from "./Form";
import Order from "./Order";
import logo from "../images/logo.png";
import "./App.css";

function App() {
  const [orders, setOrders] = useState([]);

  function addOrder(order) {
    setOrders(orders.concat(order));
  }

  const displayOrders = orders.map((order, idx) => 
    (<Order key={idx} {...order} />)
  );

  console.log('in App, orders: ', ...orders);
  console.log('in App, displayOrders: ', displayOrders);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form addOrder={addOrder} />
      <div className="ui raised container segment">
        <h1 className="ui block header">All Orders</h1>
        <div className="ui three cards">{displayOrders}</div>
      </div>
    </div>
  );
}

export default App;
