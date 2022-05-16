import React from "react";
import Image from "next/image";
function index({ img, token }) {
  return (
    <div className="nftAbout flex items-center">
      <div className="">
        <Image src={img} width={36} height={36} />
      </div>
      <div className="">
        <p className="font-bold">
          <span className="color-red">Info</span>
          Teraforms by Mat
        </p>
        <p className="flex items-center">
          {token && (
            <span>
              <Image src={token} />
            </span>
          )}
          ETH
        </p>
      </div>
    </div>
  );
}

export default index;
