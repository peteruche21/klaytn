import React from "react";
import Image from "next/image";
function index({ img, token }) {
  return (
    <div className="nftAbout flex items-center">
      <div className="">
        <Image src={img} width={36} height={36} />
      </div>
      <div className="ml-1 md:ml-4">
        <p className="font-bold">
          <span className="bg-[red] mr-1 p-1 mb-4 rounded">Info</span>
          Teraforms by Mat
        </p>
        <p className="flex items-center mt-2">
          {token && (
            <span className="mr-2 ">
              <Image src={token} width={18} height={18} />
            </span>
          )}
          ETH
        </p>
      </div>
    </div>
  );
}

export default index;
