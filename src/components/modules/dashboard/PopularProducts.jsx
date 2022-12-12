import { popularProducts } from "../../../merce-dummy-data";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import ProductItem from "../../ui-components/dashboard-ui/ProductItem";

export default function PopularProducts() {
  return (
    <section className="p-6 bg-soft-black rounded-lg">
      <div>
        <SectionTitle
          titleText="Popular Products"
          titleColor="bg-uranian-blue"
        />
        <div className="flex justify-between items-center font-medium text-sonic-silver text-sm border-b pb-4 mt-6 border-gunmetal ">
          <p>Products</p>
          <p>Earning</p>
        </div>

        <div className="mt-6 space-y-7">
          {popularProducts.map((item) => (
            <ProductItem
              key={item.id}
              title={item.title}
              category={item.category}
              img={item.img}
              status={item.status}
              earnings={item.earnings}
            />
          ))}
        </div>

        <button className="hover:border-white hover:text-white transition-all duration-150 font-semibold text-sonic-silver text-center w-full py-3 border-2 border-sonic-silver rounded-xl mt-8">
          All products
        </button>
      </div>
    </section>
  );
}
