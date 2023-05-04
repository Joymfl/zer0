import React, { useEffect, useState } from "react";
import { PublicKey, AccountInfo } from "@solana/web3.js";

function App() {
  const [backEndData, setBackendData] = useState([{}]);
  const [accountData, setAccountData] = useState({});
  const [accountInfo, setAccountInfo] = useState({});
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
  const getData = () => {
    fetch("/getInfo")
      .then((res) => res.json())
      .then((data) => {
        setAccountInfo(data);
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
      <div>
        <button onClick={getData}>Get Data</button>
      </div>
      <div>
        <p>{JSON.stringify(accountInfo.data.body)}</p>
      </div>
    </div>
  );
}

export default App;
