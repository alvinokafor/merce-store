import React, { useState } from "react";
import PageWrapper from "../../components/modules/general-modules/PageWrapper";
import ProductName from "../../components/modules/products/ProductName";
import PreviewProduct from "../../components/modules/products/PreviewProduct";
import ImgUpload from "../../components/modules/products/ImgUpload";
import ProductPrice from "../../components/modules/products/ProductPrice";

export default function AddProduct() {
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <>
      <PageWrapper>
        <h1 className="text-4xl font-semibold mb-6">New product</h1>

        <section className="flex gap-x-2">
          <div className="space-y-2 w-full md:w-[65%] lg:w-[70%]">
            <ProductName />
            <ImgUpload setPreviewImg={setPreviewImg} previewImg={previewImg} />
            <ProductPrice />
          </div>

          <div className="hidden md:block md:w-[35%] lg:w-[30%] mt-4 md:mt-0">
            <PreviewProduct previewImg={previewImg} />
          </div>
        </section>

        <div className="space-x-4 mt-6">
          <button className="py-3 px-5 bg-azure-blue rounded-lg font-semibold">
            Publish
          </button>

          <button className="py-3 px-5 bg-azure-blue rounded-lg font-semibold">
            Save to draft
          </button>
        </div>
      </PageWrapper>
    </>
  );
}
