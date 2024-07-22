import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      width: "500px",
    }}>
      <h3>👋 ERC-721 NFT Staking App ⏳</h3>
      <div>
      <br />
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking />
      </div>
    </div>
  );
}