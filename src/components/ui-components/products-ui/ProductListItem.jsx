import ProductImg from "../general-ui/ProductImg";
import Increase from "/assets/icons/increase.svg";

export default function ProductListItem({title, perf, price, sales, status, img, category}) {
  return (
    <div className="mt-3">
      <div className="flex  text-left items-center">
        <div className="flex basis-2/5 gap-x-4">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="flex gap-x-3 items-center">
            <ProductImg img={img} />
            <aside>
              <p>{title}</p>
              <p className="text-sonic-silver text-sm">{category}</p>
            </aside>
          </div>
        </div>
        <p className="basis-1/4">
          <span className="p-1.5 rounded-md font-semibold bg-bud-green bg-opacity-10 text-bud-green w-2">
            {status}
          </span>
        </p>
        <p className="basis-1/4">${price}</p>
        <p className="basis-1/4">
          ${sales}
          <span className="text-bud-green w-2 ml-2 text-sm font-semibold">
            {" "}
            <img
              className="inline"
              src={Increase}
              alt="sales performance"
            />{" "}
            {perf}%
          </span>
        </p>
      </div>
    </div>
  );
}
