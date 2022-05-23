import React, { FC } from "react";
import NFTCard from "../Card/NFTCard";

interface IProps {
  data: { [key: string]: string }[];
}

const NFTList: FC<IProps> = ({ data }) => {
  const renderList = (): JSX.Element[] => {
    return data.map((element, index) => {
      return (
        <div key={index}>
          <NFTCard
            name={element.name}
            address={element.contractAddress}
            image={element.image256}
            tokenId={element.tokenId}
          />
        </div>
      );
    });
  };
  return (
    <div className="flex flex-row gap-5 flex-wrap justify-evenly">
      {renderList()}
    </div>
  );
};

export default NFTList;
