import { NFTStorage, File } from "nft.storage";
import mime from "mime";

const NFT_STORAGE_KEY: string = process.env.NEXT_PUBLIC_NFT_STORAGE_KEY!;

const useNFTStorage = () => {
  const storeNFT = async (image: File, name: string, description: string) => {
    const type = mime.getType(image);

    // todo. inspect file and determine if new File ...
    const imageFile = new File([image], image.name, { type });

    const nftstorage = new NFTStorage({ token: NFT_STORAGE_KEY });

    return nftstorage.store({
      image: imageFile,
      name: name,
      description: description,
    });
  };

  return storeNFT;
};
