import PageWrapper from "../../components/modules/general-modules/PageWrapper";
import TotalCustomers from "../../components/modules/customers/TotalCustomers";
import RefundRequest from '../../components/modules/dashboard/RefundRequest'
import TrafficChannel from "../../components/modules/customers/TrafficChannel";
import TopDevice from "../../components/modules/customers/TopDevice";


export default function Customers() {
  return (
    <>
      <PageWrapper>
        <h1 className="text-4xl font-semibold mb-6">Customers</h1>

        <section className="flex flex-col md:flex-row gap-x-2">
          <div className="space-y-4 w-full md:w-[65%] lg:w-[70%]">
            <TotalCustomers />
            <TrafficChannel />
          </div>

          <div className="space-y-4 md:w-[35%] lg:w-[30%] mt-4 md:mt-0">
            <RefundRequest />
            <TopDevice />
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
