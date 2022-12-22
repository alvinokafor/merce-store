import React, { useState } from "react";
import PageWrapper from "../../components/modules/general-modules/PageWrapper";
import ProductName from "../../components/modules/products/ProductName";
import PreviewProduct from "../../components/modules/products/PreviewProduct";
import ImgUpload from "../../components/modules/products/ImgUpload";
import ProductPrice from "../../components/modules/products/ProductPrice";

export default function AddProduct() {
  const [previewImg, setPreviewImg] = useState(null);
  const [productTitle, setProductTitle] = useState("Title");
  const [productPrice, setProductPrice] = useState(0);

  //resets add product data
  const clearDataHandler = (e) => {
    setPreviewImg(null)
    setProductTitle('Title')
    setProductPrice(0)
  };

  return (
    <>
      <PageWrapper>
        <h1 className="text-4xl font-semibold mb-6">New product</h1>

        <section className="flex gap-x-2">
          <div className="space-y-2 w-full md:w-[65%] lg:w-[70%]">
            <ProductName setProductTitle={setProductTitle} />
            <ImgUpload setPreviewImg={setPreviewImg} previewImg={previewImg} />
            <ProductPrice setProductPrice={setProductPrice} />
          </div>

          <div className="hidden md:block md:w-[35%] lg:w-[30%] mt-4 md:mt-0">
            <PreviewProduct
              productTitle={productTitle}
              productPrice={productPrice}
              previewImg={previewImg}
            />
          </div>
        </section>

        <div className="space-x-4 mt-6 text-sm">
          <button className="py-2 px-4 bg-azure-blue rounded-lg font-semibold">
            Publish
          </button>

          <button className="py-2 px-4 bg-azure-blue rounded-lg font-semibold">
            Save to draft
          </button>

          <button
            onClick={clearDataHandler}
            className="py-2 px-4 bg-transparent border-2 border-gunmetal rounded-lg font-semibold"
          >
            Clear data
          </button>
        </div>
      </PageWrapper>
    </>
  );
}
