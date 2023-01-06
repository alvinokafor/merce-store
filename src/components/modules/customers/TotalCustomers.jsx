import React from "react";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import Filter from "../../ui-components/general-ui/Filter";
import { CustomerChart } from "../../ui-components/charts/MerceCharts";
import NewCustomers from "../../ui-components/dashboard-ui/NewCustomers";

export default function TotalCustomers() {
  return (
    <section className=" bg-soft-black py-6  rounded-lg">
      <div className="mx-6 flex justify-between items-center mb-8">
        <SectionTitle
          titleText="Total Customers"
          titleColor="bg-lavender-blue"
        />

        <Filter />
      </div>

      <div className="mx-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">1,509 customers</h2>
        <div className="space-x-3 text-sm">
          <span className="bg-bud-green bg-opacity-5 text-bud-green px-2 py-1 rounded-md">
            % 37.9
          </span>
          <span>vs. Sep 8, 2021</span>
        </div>
      </div>

      <div className="mx-6">
        <CustomerChart />
        <div className="mt-8">
        <NewCustomers />
        </div>
      </div>
    </section>
  );
}
