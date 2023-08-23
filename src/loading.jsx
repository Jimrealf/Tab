import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="loading">
      <Triangle
        height="500"
        width="500"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}
