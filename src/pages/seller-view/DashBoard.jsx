import PageWrapper from "../../components/modules/general-modules/PageWrapper";
import Overview from "../../components/modules/dashboard/Overview";

export default function DashBoard() {
  return (
    <>
      <PageWrapper>
          <h1 className="text-3xl font-semibold md:text-4xl">Dashboard</h1>
        <section className="mt-6 md:flex">
          <div className="w-full md:w-[560px] lg:w-[680px] lg:overflow-hidden">
            <Overview />
          </div>

          <div className="lg:w-[25%]">
              <h1>Popular Products</h1>
          </div>
        </section>
      </PageWrapper>
    </>
  );
}
