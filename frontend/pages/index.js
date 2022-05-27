import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../public/components/navBar";
import Web3 from "web3";

export default function Home() {
  const [isConnected, setConnect] = useState("");

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((res) => setConnect(res[0]));
    }
  }, []);

  const connectWallet = () => {
    window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => {
        setConnect(res[0])
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <NavBar connected={isConnected} connectWallet={connectWallet} />
      <div className="flex justify-center items-center h-[700px] w-full bg-slate-500 bg-[url('/images/nft-background.jpg')] bg-cover	 bg-center	">
        {!isConnected ? (
          <button
            className="p-4 bg-yellow-500 text-black  font-medium mt-40"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        ) : (
          <div className="p-4 bg-yellow-500 text-center">
            <strong>You are connected to </strong>
            <br /> {isConnected}
          </div>
        )}
      </div>
      <div
        id="about"
        className="flex justify-between items-center h-[600px] w-full bg-slate-500 bg-[url('/images/nft-background-2.jpg')] bg-cover	 bg-center	"
      >
        <div className="h-full w-[55%] flex justify-center items-center font-bold text-white">
          <h1 className="text-5xl ">ABOUT MUZILLA</h1>
        </div>
        <div className="h-full w-[45%] bg-[#5a25b9] p-8 text-white text-justify">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. <br /> This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>
      </div>
      <div
        className=" h-[600px] w-full bg-slate-500 bg-[#e0cfff] pt-8	"
        id="features"
      >
        <div className="m-auto text-center">
          <h1 className="text-4xl font-bold ">FEATURES</h1>
        </div>
        <div className="flex justify-around items-center h-[400px]	mt-14">
          <div className=" bg-[#32246a] w-[22%] h-full p-6 text-center text-white">
            <h2 className="font-medium text-xl text-yellow-400">FEATURE 1</h2>
            <p className="mt-6 text-left">
              comes from a line in section 1.10.32. The standard chunk of Lorem
              Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
          <div className=" bg-[#32246a] w-[22%] h-full p-6 text-center text-white">
            <h2 className="font-medium text-xl text-yellow-400">FEATURE 2</h2>
            <p className="mt-6 text-left">
              comes from a line in section 1.10.32. The standard chunk of Lorem
              Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
          <div className=" bg-[#32246a] w-[22%] h-full p-6 text-center text-white">
            <h2 className="font-medium text-xl text-yellow-400">FEATURE 3</h2>
            <p className="mt-6 text-left">
              comes from a line in section 1.10.32. The standard chunk of Lorem
              Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
          <div className=" bg-[#32246a] w-[22%] h-full p-6 text-center text-white">
            <h2 className="font-medium text-xl text-yellow-400">FEATURE 4</h2>
            <p className="mt-6 text-left">
              comes from a line in section 1.10.32. The standard chunk of Lorem
              Ipsum used since the 1500s is reproduced below for those
              interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
              et Malorum" by Cicero are also reproduced in their exact original
              form, accompanied by English versions from the 1914 translation by
              H. Rackham.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-48 bg-[url('/images/music-wave-background.jpg')] bg-cover">
        <button className="p-4  bg-yellow-500 text-black  font-medium mt-6 ">
          Mint Your Music Now!
        </button>
      </div>
      <div className="h-14 mt-10 text-center mt-4 pb-10 flex justify-center items-center flex-col"><img src="/images/muzillaLogo.jpg" className="h-20 w-20 pb-2"/>Powered By Team Muzilla</div>
    </>
  );
}
