import React, { useState, useEffect } from "react";
import NavBar from "../public/components/navBar";
import Web3 from "web3";
import NFTContract from '../public/nftContract.json'

const NFTCollection = [
  {
    id: 1,
    name: "In My Head",
    href: "#",
    description:
      "Song: Arcando - In My Head (feat. Britt Lari) [NCS Release] Music provided by NoCopyrightSounds",
    imageSrc:
      "https://ipfs.io/ipfs/bafybeibuk5kmw4ngqe4gjuzwmtmrplsbye72l63clvyubbtxnxw6grd4ga",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
];

const MyNfts = () => {
  const [isConnected, setConnect] = useState("");

  const nftContract = new Web3()


  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((res) => setConnect(res[0]));
    }
  }, []);
  return (
    <>
      <NavBar connected={isConnected} />
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {NFTCollection.map((music) => (
              <div key={music.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={music.imageSrc}
                    alt={music.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4">
                  <audio controls src="https://ipfs.io/ipfs/bafybeic4vuwhhnl6ipohbc7ipr4cvyqjqnt2dwzz5qt4grkqnn4xixgaym" className="w-full">
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {music.name}
                </h3>
                <p className="mt-1 text-sm  text-gray-900">
                  {music.description}
                </p>
                <button className="bg-[#5a25b9] px-4 py-2 mt-3 text-white">Mint Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyNfts;
