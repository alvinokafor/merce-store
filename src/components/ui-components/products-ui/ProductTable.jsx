import { allProducts } from "../../../merce-dummy-data";
import ProductListItem from "./ProductListItem";

export default function ProductTable() {
  return (
    <div className="mx-6 ">
      <div className="flex text-left items-center text-sonic-silver border-b-2 border-gunmetal pb-5">
        <div className="flex gap-x-4 basis-2/5">
          <input className="checkbox" type="checkbox" name="" id="" />
          <p>Product</p>
        </div>
        <p className="basis-1/4">Status</p>
        <p className="basis-1/4">Price</p>
        <p className="basis-1/4">Sales</p>
      </div>

      <div className="space-y-8">
        {allProducts.map((item) => (
          <ProductListItem
            key={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            sales={item.sales.allSales}
            perf={item.sales.performance}
            img={item.img}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}
