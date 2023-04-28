import React, { useEffect, useState } from "react";
import { PublicKey } from "@solana/web3.js";

function App() {
  const [backEndData, setBackendData] = useState([{}]);
  const [accountData, setAccountData] = useState({});
  const [tx, setTx] = useState("");
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log("here");
        setBackendData(data);
      });
  }, []);
  useEffect(() => {
    fetch("/keypair")
      .then((res) => res.json())
      .then((data) => setAccountData(data));
  }, []);
  const onCLick = () => {
    fetch("/airdrop", {
      method: "POST",
    });
  };
  function init() {
    fetch("/init", { method: "POST" });
  }
  return (
    <div>
      <div>
        {typeof backEndData.users === "undefined" ? (
          <p>....Loading</p>
        ) : (
          backEndData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
      <div>
        <h1>Keypair</h1>
        <p>{accountData.keypair}</p>
      </div>
      <div>
        <button onClick={onCLick}>Airdrop</button>
      </div>
      <div>
        <button onClick={init}>Init Program</button>
      </div>
    </div>
  );
}

export default App;
