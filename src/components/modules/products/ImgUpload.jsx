import React from "react";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import UploadImg from "../../ui-components/products-ui/UploadImg";
import CategoryInput from "../../ui-components/products-ui/CategoryInput";

export default function ImgUpload({ setPreviewImg, previewImg }) {
  return (
    <section className=" bg-soft-black py-6  rounded-lg">
      <div className="mx-6 justify-between items-center mb-8">
        <SectionTitle
          titleText="Image & Category"
          titleColor="bg-uranian-blue"
        />
      </div>

      <>
        <h2 className="mb-3 mx-6">Product image</h2>
        <div
          className={`relative flex items-center justify-center ${
            !previewImg && "bg-gunmetal rounded-xl"
          }  bg-cover bg-center mx-6 h-[200px]`}
        >
          {previewImg && (
            <img
              className="w-full h-full object-center object-cover absolute z-10 rounded-xl"
              src={previewImg}
              alt="preview"
            />
          )}

          <UploadImg setPreviewImg={setPreviewImg} />
        </div>
      </>

      <div className="mx-6 mt-6">
        <h2 className="mb-3">Category</h2>
        <CategoryInput />
      </div>
    </section>
  );
}
