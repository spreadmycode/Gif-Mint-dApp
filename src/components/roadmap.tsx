import { RoadMapItem } from "./roadmapitem";

export const RoadMap = () => {
    return <div className="roadmap flex flex-col justify-center items-center flex-1 mt-10 p-10" id="roadmap">
    <p className="text-pink-400 lg:text-7xl md:text-6xl text-4xl text-center mb-5 amiga-font">ROADMAP</p>

    <RoadMapItem
      title="P1"
      list={['September 1 - Project launched', 'October - Partner with other dodgy projects in Solana', 'Mint Date - October 17th, 2021']}
      image={`/images/p1.webp`}
    />
    <RoadMapItem
      title="P2"
      list={['20% Sold - NFT Giveaway', 'A random airdrop of 10 NFTs to early community members in our discord.​', '80% Sold - Extra Dodgy Collection', 'We will create a limited collection of Extra Dodgy TamaDodgy and make them available for holders.', '100% Sold - Virtual Pet Game', 'Commence the building of a virtual pet game of TamaDodgy where owners will be able to interact with their TamaDodgy.']}
      image={`/images/p2.webp`}
    />
    <RoadMapItem
      title="P3"
      list={['Collaboration with artists on limited edition 1:1 pieces that will be available to TamaDodgy holders', 'Creation of DAO and staking for royalties']}
      image={`/images/p3.webp`}
    />
    <RoadMapItem
      title="P4"
      list={['Liquidity wallet to be used to buy floor of TamaDodgy NFTs and doing charity/community projects', 'Metaverse Collabs, 3D Open World RPG']}
      image={`/images/p4.webp`}
    />
  </div>;
};
  