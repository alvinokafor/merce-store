import React from "react";

export default function PreviewImg({ previewImg }) {
  return (
    <div className={`w-full ${!previewImg && 'bg-gunmetal rounded-xl'} h-[200px]`}>
      {previewImg && (
        <img
          className="rounded-xl w-full object-cover h-full"
          src={previewImg}
          alt="Image"
        />
      )}
    </div>
  );
}
