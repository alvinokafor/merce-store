import { allProducts } from "../../../merce-dummy-data";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import ProductSearch from "../../ui-components/products-ui/ProductSearch";
import ProductTable from "../../ui-components/products-ui/ProductTable";
import MobileProductItem from "../../ui-components/products-ui/MobileProductItem";

export default function ProductList() {
  return (
    <section className="mt-3 bg-soft-black py-6  rounded-lg">
      <div className="mx-6 flex justify-between items-center md:mb-8">
        <div className="flex gap-x-6">
          <SectionTitle titleText="Products" titleColor="bg-lavender-blue" />

          <div className="hidden md:block">
            <ProductSearch />
          </div>
        </div>
        <div className="p-2 border-2 border-gunmetal rounded-lg">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.2356 10.9274C10.7182 11.3065 11 11.8863 11 12.5V19.1761L13 18.4724V12.5C13 11.8863 13.2818 11.3065 13.7644 10.9274L19.6178 6.32821C19.8591 6.13863 20 5.84875 20 5.54189V4H4V5.54189C4 5.84876 4.14089 6.13863 4.38218 6.32821L10.2356 10.9274ZM20.8535 7.90085L15 12.5V19.1806C15 19.605 14.7322 19.9831 14.3319 20.124L10.3319 21.5314C9.68145 21.7602 9 21.2776 9 20.5881V12.5L3.14654 7.90085C2.42266 7.33209 2 6.46248 2 5.54189V4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V5.54189C22 6.46248 21.5773 7.33209 20.8535 7.90085Z"
              fill="#6F767E"
            />
          </svg>
        </div>
      </div>

      <ProductTable />

      <div className="mx-6 my-4 md:hidden">
        <ProductSearch />
      </div>

      <div className="space-y-5 md:hidden">
        {allProducts.map((item) => (
          <MobileProductItem
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

      <div className="md:hidden mx-6 items-center mt-4">
        <button className="md:hidden mx-auto flex items-center justify-self-auto py-3 text-sm font-semibold px-5 border-2 border-gunmetal rounded-xl">
          {/* <svg
          className="animate-spin"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 2C13.0523 2 13.5 2.44772 13.5 3V5C13.5 5.55228 13.0523 6 12.5 6C11.9477 6 11.5 5.55228 11.5 5V3C11.5 2.44772 11.9477 2 12.5 2Z"
              fill="#FCFCFC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.5 18C13.0523 18 13.5 18.4477 13.5 19V21C13.5 21.5523 13.0523 22 12.5 22C11.9477 22 11.5 21.5523 11.5 21V19C11.5 18.4477 11.9477 18 12.5 18Z"
              fill="#FCFCFC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.42879 4.92912C5.81931 4.5386 6.45248 4.5386 6.843 4.92912L8.25721 6.34334C8.64774 6.73386 8.64774 7.36703 8.25721 7.75755C7.86669 8.14808 7.23352 8.14808 6.843 7.75755L5.42879 6.34334C5.03826 5.95281 5.03826 5.31965 5.42879 4.92912Z"
              fill="#FCFCFC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.7428 16.2426C17.1333 15.8521 17.7664 15.8521 18.157 16.2426L19.5712 17.6568C19.9617 18.0473 19.9617 18.6805 19.5712 19.071C19.1807 19.4616 18.5475 19.4616 18.157 19.071L16.7428 17.6568C16.3522 17.2663 16.3522 16.6331 16.7428 16.2426Z"
              fill="#FCFCFC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.5 12C2.5 11.4477 2.94772 11 3.5 11L5.5 11C6.05228 11 6.5 11.4477 6.5 12C6.5 12.5523 6.05228 13 5.5 13L3.5 13C2.94772 13 2.5 12.5523 2.5 12Z"
              fill="#FCFCFC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.5 12C18.5 11.4477 18.9477 11 19.5 11L21.5 11C22.0523 11 22.5 11.4477 22.5 12C22.5 12.5523 22.0523 13 21.5 13L19.5 13C18.9477 13 18.5 12.5523 18.5 12Z"
              fill="#FCFCFC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.42912 19.0712C5.0386 18.6807 5.0386 18.0475 5.42912 17.657L6.84334 16.2428C7.23386 15.8523 7.86703 15.8523 8.25755 16.2428C8.64808 16.6333 8.64808 17.2665 8.25755 17.657L6.84334 19.0712C6.45281 19.4617 5.81965 19.4617 5.42912 19.0712Z"
              fill="#FCFCFC"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.7426 7.75725C16.3521 7.36672 16.3521 6.73356 16.7426 6.34304L18.1568 4.92882C18.5473 4.5383 19.1805 4.5383 19.571 4.92882C19.9616 5.31935 19.9616 5.95251 19.571 6.34304L18.1568 7.75725C17.7663 8.14777 17.1331 8.14777 16.7426 7.75725Z"
              fill="#FCFCFC"
            />
          </svg> */}
          <span>Load more</span>
        </button>
      </div>

      <div className="hidden md:block text-center mx-6 mt-4">
        {/* Arrow Left */}
        <button className="group  hover:border-white transition-all duration-150 border-2 border-gunmetal p-2 rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="group-hover:fill-white transition-all duration-100"
              d="M10.707 17.7929C11.0975 18.1834 11.0975 18.8166 10.707 19.2071C10.3164 19.5976 9.68327 19.5976 9.29274 19.2071L3.49985 13.4142C2.7188 12.6332 2.7188 11.3668 3.49985 10.5858L9.29274 4.79289C9.68327 4.40237 10.3164 4.40237 10.707 4.79289C11.0975 5.18342 11.0975 5.81658 10.707 6.20711L5.91406 11H19.9998C20.5521 11 20.9998 11.4477 20.9998 12C20.9998 12.5523 20.5521 13 19.9998 13H5.91406L10.707 17.7929Z"
              fill="#6F767E"
            />
          </svg>
        </button>

        {/* Arrow Right */}
        <button className="group hover:border-white transition-all duration-150 ml-2 border-2 border-gunmetal p-2 rounded-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
            className="group-hover:fill-white transition-all duration-100"
              d="M13.2929 17.7929C12.9024 18.1834 12.9024 18.8166 13.2929 19.2071C13.6834 19.5976 14.3166 19.5976 14.7071 19.2071L20.5 13.4142C21.281 12.6332 21.281 11.3668 20.5 10.5858L14.7071 4.79289C14.3166 4.40237 13.6834 4.40237 13.2929 4.79289C12.9024 5.18342 12.9024 5.81658 13.2929 6.20711L18.0858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H18.0858L13.2929 17.7929Z"
              fill="#6F767E"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
