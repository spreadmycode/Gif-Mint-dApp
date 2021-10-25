import Head from 'next/head'

import { useState } from "react";
import { Toaster } from 'react-hot-toast';
import Header from '../components/header';
import Footer from '../components/footer';
import { MintCard } from '../components/mintcard';
import { Faq } from '../components/faq';
import { Members } from '../components/members';
import { RoadMap } from '../components/roadmap';
import useCandyMachineBaby from '../hooks/use-candy-machine-baby';
import useCandyMachineToddler from '../hooks/use-candy-machine-toddler';
import useCandyMachineTeenager from '../hooks/use-candy-machine-teenager';
import useCandyMachineAdult from '../hooks/use-candy-machine-adult';
import useCandyMachineMystery from '../hooks/use-candy-machine-mystery';
import usePreSaleContract, { Presale } from '../hooks/use-pre-sale';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  const presaleContract: Presale = usePreSaleContract();
  const candyMachineBaby = useCandyMachineBaby(presaleContract);
  const candyMachineToddler = useCandyMachineToddler(presaleContract);
  const candyMachineTeenager = useCandyMachineTeenager(presaleContract);
  const candyMachineAdult = useCandyMachineAdult(presaleContract);
  const candyMachineMystery = useCandyMachineMystery(presaleContract);

  // Minting status to all mint buttons
  const isMinting = candyMachineBaby.isMinting || candyMachineToddler.isMinting || candyMachineTeenager.isMinting || candyMachineAdult.isMinting || candyMachineMystery.isMinting;

  return (
    <main className="main-container">

      <Toaster />

      <Head>
        <title>TAMADODGY</title>
        <meta name="description" content="You can purchase TAMADODGY." />
        <link rel="icon" href="/mmtchi.png" />
      </Head>

      <Header 
        isActive={isActive} 
        setIsActive={setIsActive} 
        mintStartDate={candyMachineBaby.mintStartDate} 
        presaleStartDate={presaleContract.presaleStartDate}
        presaleEndDate={presaleContract.presaleEndDate}
      />

      <div className="flex flex-col justify-center items-center flex-1 mt-20">

        <div className="flex flex-col justify-center items-center flex-1 space-y-3 advertise">
          <div className="flex flex-col lg:flex-row space-y-2 lg:w-7/12 pb-5">
            <img
              className="object-none object-left-bottom top-z-index"
              src={`/images/mmtchi.webp`}
              alt="MMTCHI" />

            <div className="flex flex-row lg:-ml-8">
              <div className="overview-background-color rounded-lg border-white overflow-hidden border-8 space-y-3 p-8">
                <p className="text-3xl text-yellow-400 amiga-font color-936">936</p>
                <p className="text-xl text-white amiga-font">UNIQUE</p>
                <p className="text-xl text-white amiga-font">TAMADODGY</p>
                <p className="text-base amiga-font color-lightpink">LIVE ON SOLANA</p>
                <p className="text-base text-white leading-5">TamaDodgy is a limited NFT collection on the Solana blockchain. First generation supply is capped at 936. Your TamaDodgy allows you to earn dodgy royalties by staking in dodgy pools of dodgy DAO.</p>
                <p className="text-base text-white leading-5">All TamaDodgys are programmatically generated to include numerous dodgy traits and rarity. Adopting a TamaDodgy also gives you access to an extra dodgy version of your TamaDodgy and access to features within our TamaDodgy Pet Arcade Game, a virtual pet game with old school classic mini games.</p>
                <p className="text-base text-white leading-5">All TamaDodgy will be revealed shortly after being minted along with activating dodgy community features based on the roadmap. Please also join our dodgy Discord and connect via Grape to show off you as the verified dodgy owner of TamaDodgy.</p>
                <p className="text-base text-white leading-5">These dodgy creatures earn you passive income for life. Profits go to the community.</p>
              </div>
              
              <div className="pt-5 flex flex-col space-y-2">
                <a href="https://www.facebook.com/wix" target="_blank">
                  <img
                    className="object-contain"
                    width={250}
                    height={250}
                    src={`/images/btn_facebook.webp`}
                    alt="MMTCHI" />
                </a>
                <a href="https://www.twitter.com/wix" target="_blank">
                  <img
                    className="object-contain"
                    width={250}
                    height={250}
                    src={`/images/btn_tweek.webp`}
                    alt="MMTCHI" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="ribbon hidden lg:flex lg:flex-row relative">
          <div className="flex flex-col space-y-3 w-6/12 ml-60 mt-5">
            <p className="text-3xl text-white amiga-font">
              THE STORY .....
            </p>
            <div className="h-40 overflow-y-auto flex flex-col space-y-1">
              <p className="text-sm text-white leading-4">
                TamaDodgy is inspired by the Millennial childhood Tamagochi Egg Watch handheld digital pet that was created in Japan by Akihiro Yokoi in 1997. They are the spawn of what happens when you have a bunch of 1997 pet creatures mixed with the 2021dodgy pixelated punk world. This lot are looking for a new home and are up for adoption. They were originally going to Ethereum, but they were too dodgy for Vitalik. So the TamaDodgy decided to spawn in the more dodgy island - Solana, the blockchain of every dodgy pixel's dream, by the extra dodgy Sam.
              </p>
              <p className="text-sm text-white leading-4">
                All they need is the right person to adopt them and give them all the dodgy love and care. These TamaDodgy may be dodgy but they have big dreams and their properties uniquely reflect who they are and promise to reward their owners handsomely.
              </p>
            </div>
          </div>
          <div className="start-date-badge flex flex-col space-y-1 justify-center items-center relative ml-16 top-5">
            <p className="text-3xl text-center amiga-font">MINT</p>
            <p className="text-3xl text-center amiga-font border-b-2 border-black">DATE</p>
            <p className="text-2xl text-center amiga-font pt-5">OCT 17</p>
            <p className="text-2xl text-center amiga-font">2021</p>
          </div>
        </div>

        <div className="grid md:grid-cols-6 sm:grid-cols-2 gap-3 mt-10 md:ml-20 md:mr-20" id="mint">
          <MintCard 
            title="Baby" 
            image={`/images/BabyDemo.gif`} 
            description="26 Characters Random Generated with 3 Style of Shell and Background 26 Characters Random Generated with 3 Style of Shell and Background"
            price="1.0 SOL"
            onMint={candyMachineBaby.onMint}
            onPackMint={candyMachineBaby.onMintMultiple}
            isSoldOut={candyMachineBaby.isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={candyMachineBaby.nftsData}
          />
          <MintCard 
            title="TODDLER" 
            image={`/images/ToddlerDemo.gif`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            price="1.0 SOL"
            onMint={candyMachineToddler.onMint}
            onPackMint={candyMachineToddler.onMintMultiple}
            isSoldOut={candyMachineToddler.isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={candyMachineToddler.nftsData}
          />
          <MintCard 
            title="TEENAGER" 
            image={`/images/TeenDemo.gif`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            price="1.0 SOL"
            onMint={candyMachineTeenager.onMint}
            onPackMint={candyMachineTeenager.onMintMultiple}
            isSoldOut={candyMachineTeenager.isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={candyMachineTeenager.nftsData}
          />
          <div className="col-span-1"></div>
          <MintCard 
            title="ADULT" 
            image={`/images/AdultDemo.gif`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            price="1.5 SOL"
            onMint={candyMachineAdult.onMint}
            onPackMint={candyMachineAdult.onMintMultiple}
            isSoldOut={candyMachineAdult.isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={candyMachineAdult.nftsData}
          />
          <MintCard 
            title="ELDER" 
            image={`/images/ElderDemo.gif`} 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
            price="2.0 SOL"
            onMint={candyMachineMystery.onMint}
            onPackMint={candyMachineMystery.onMintMultiple}
            isSoldOut={candyMachineMystery.isSoldOut}
            isMinting={isMinting}
            isActive={isActive}
            nftsData={candyMachineMystery.nftsData}
          />
          <div className="col-span-1"></div>
        </div>

        <RoadMap />

        <Members />

        <Faq />

      </div>

      <Footer />

    </main>
  );
};

export default Home;