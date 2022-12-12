import PageWrapper from "../../components/modules/general-modules/PageWrapper";
import Overview from "../../components/modules/dashboard/Overview";
import ProductView from "../../components/modules/dashboard/ProductView";
import Promotions from "../../components/modules/dashboard/Promotions";
import PopularProducts from "../../components/modules/dashboard/PopularProducts";
import RefundRequest from "../../components/modules/dashboard/RefundRequest";

export default function DashBoard() {
  return (
    <>
      <PageWrapper>
          <h1 className="text-3xl font-semibold md:text-4xl">Dashboard</h1>
        <section className="mt-6 md:flex md:gap-x-4 lg:gap-x-3">
          <div className="space-y-4 w-full md:w-[65%] lg:w-[70%] lg:overflow-hidden">
            <Overview />
            <ProductView />
            <Promotions />
          </div>

          <div className="space-y-4 md:w-[35%] lg:w-[30%] mt-4 md:mt-0">
              <PopularProducts />
              <RefundRequest />
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
