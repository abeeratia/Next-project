"use client";
import { ColorRing } from "react-loader-spinner";

function Loading() {
  return (
    <div>
      <div className="d-flex vh-100 bg-dark justify-content-center align-items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    </div>
  );
}

export default Loading;
