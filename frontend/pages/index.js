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
            <strong>Your connected account is</strong>
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
          <p id="aboutsection">
            Muzilla is a music NFT marketplace and streaming platform. It is like a decentralized version of Spotify, with
            a special touch of blockchain added on top. The blockchain aspect of this project is the standout feature. One can 
            claim ownership of a track or an album. Artists will soon be able to sell special edition and exclusive edition
            albums, tracks and collectibles. The team kept the fundamentals and the soul of web3 alive by focussing on decentralization
            of data. We believe in empowering the ones who use our platform, ie. the artists and the listeners. Made with love,
             hard-work and ERC1155
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
            <h2 className="font-medium text-xl text-yellow-400">REGULAR TRACKS</h2>
            <p className="mt-6 text-left">
              Regular Tracks are somewhat fungible in the sense that two tokens of the same track can be interchanged and 
              exchanged without hassle. But, buying a different track is not possible directly. You would have to convert it 
              to another token (like eth) and then buy the track you wish to buy using that eth. The price of the tracks in eth
              depends completely on how valuable the people find them.
            </p>
          </div>
          <div className=" bg-[#32246a] w-[22%] h-full p-6 text-center text-white">
            <h2 className="font-medium text-xl text-yellow-400">SPECIAL EDITION</h2>
            <p className="mt-6 text-left">
              Special edition albums will be functionally similar to regular albums but with a catch: their supply
              will be very limited. The 
              artists will be able to specify the max supply and those many number of copies will be created.This will allow fans to get access to rare content made by their favourite artists. 
            </p>
          </div>
          <div className=" bg-[#32246a] w-[22%] h-full p-6 text-center text-white">
            <h2 className="font-medium text-xl text-yellow-400">OWNERSHIP</h2>
            <p className="mt-6 text-left">
              Artists will have the option to completely sell the rights of a certain track/album to someone. This will be possible
              by storing all the copyright information in the metadata and modifying it when ownership gets transferred to someone
              else. This will be completely non fungible, ie. only one of these can exist in the world per track/album.
            </p>
          </div>
          <div className=" bg-[#32246a] w-[22%] h-full p-6 text-center text-white">
            <h2 className="font-medium text-xl text-yellow-400">EXCLUSIVE EDITION</h2>
            <p className="mt-6 text-left">
              Exclusive edition tracks and albums will be a game-changer in the music industry, just like the project itself.
              Artists will be able to deliver personalized content to their super-fans. We plan to implement generative NFTs to 
              display the name of the buyer and the date of miniting of these NFTs. 
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
