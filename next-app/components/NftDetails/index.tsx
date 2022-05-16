import React from "react";
import Image from "next/image";
function index({ img, name, price }) {
  return (
    <div
      className={`flex justify-between mb-2 px-3 ${
        img && "font-bold"
      } capitalize`}
    >
      <p>{name}</p>

      <p>
        {img && (
          <span>
            <Image src={img} width={10} height={15} />{" "}
          </span>
        )}
        {price}
      </p>
    </div>
  );
}

export default index;
