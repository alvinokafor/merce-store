import ProductImg from "../general-ui/ProductImg";

export default function ProductItem({title, img, category, status, earnings}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center ">
        <ProductImg img={img}/>

        <div className="text-sm lg:text-base ml-3 font-semibold">
          <p>{title}</p>
          <p>{category}</p>
        </div>
      </div>

      <div>
        <p className="text-sm font-semibold lg:text-base text-right">${earnings}</p>
        
        <p className="text-xs mt-1 text-center rounded px-2 py-1 text-bud-green bg-bud-green bg-opacity-20">{status}</p>
      </div>

    </div>
  );
}
