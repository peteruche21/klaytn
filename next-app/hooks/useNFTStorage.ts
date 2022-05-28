import { NFTStorage } from "nft.storage";

const NFT_STORAGE_KEY: string = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY!;

const useNFTStorage = () => {
  const storeNFT = async (image: File, name: string, description: string) => {

    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

    return nftstorage.store({
      image: image,
      name: name,
      description: description,
    });
  };

  return storeNFT;
};

export default useNFTStorage;
