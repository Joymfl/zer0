import {
  Keypair,
  PublicKey,
  Connection,
  LAMPORTS_PER_SOL,
  SystemProgram,
} from "@solana/web3.js";
import idl from "./idl/test_web_app.json" assert { type: "json" };

import express from "express";
const app = express();
import { AnchorProvider, Program, Wallet } from "@project-serum/anchor";

const wallet = Keypair.generate();
let ANCHOR_WALLET = new Wallet(wallet);
const programId = new PublicKey("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

const connection = new Connection("http://localhost:8899", "confirmed");
const provider = new AnchorProvider(connection, ANCHOR_WALLET, "confirmed");
const program = new Program(idl, programId, provider);
const tweetAccount = PublicKey.findProgramAddressSync(
  [wallet.publicKey.toBuffer()],
  programId
);
app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});
app.post("/airdrop", async (req) => {
  await provider.connection.confirmTransaction(
    await provider.connection.requestAirdrop(
      wallet.publicKey,
      LAMPORTS_PER_SOL * 100
    )
  );
});
app.get("/balance", async (req, res) => {
  await res.send(provider.connection.getBalance(wallet.publicKey, "confirmed"));
});
app.get("/keypair", (req, res) => {
  res.json({ keypair: wallet.publicKey.toString() });
});
app.post("/init", (req, res) => {
  program.methods
    .initialize()
    .accountsStrict({
      funder: wallet.publicKey,
      tweet: tweetAccount[0],
      systemProgram: SystemProgram.programId,
    })
    .signers([wallet])
    .rpc();
  // .then((r) => console.log(r));
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
