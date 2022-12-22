import React from "react";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import PriceInput from "../../ui-components/products-ui/PriceInput";

export default function ProductPrice({setProductPrice}) {
  return (
    <section className=" bg-soft-black py-6  rounded-lg ">
      <div className="mx-6 justify-between items-center mb-8">
        <SectionTitle titleText="Price" titleColor="bg-uranian-blue" />
      </div>

      <PriceInput setProductPrice={setProductPrice}/>
    </section>
  );
}
