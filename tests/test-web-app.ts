import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TestWebApp } from "../target/types/test_web_app";

describe("test-web-app", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.TestWebApp as Program<TestWebApp>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
