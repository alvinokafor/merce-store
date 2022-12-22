import React from "react";
import UploadIcon from "/assets/icons/upload.svg";

export default function UploadImg({ setPreviewImg }) {

  const imgHandler = (e) => {
    setPreviewImg(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="z-20">
      <label
        className="flex gap-x-2 bg-black w-[200px] justify-center cursor-pointer py-3 rounded-lg"
        htmlFor="upload-file"
      >
        <input type="file" id="upload-file" onChange={imgHandler} />

        <img src={UploadIcon} alt="upload" />
        <span>Upload image</span>
      </label>
    </div>
  );
}
