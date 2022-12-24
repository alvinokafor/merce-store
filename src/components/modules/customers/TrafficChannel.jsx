import React from "react";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import Filter from "../../ui-components/general-ui/Filter";
import { TrafficChannelChart } from "../../ui-components/charts/MerceCharts";

export default function TrafficChannel() {
  return (
    <section className=" bg-soft-black py-6  rounded-lg">
      <div className="mx-6 flex justify-between items-center mb-8">
        <SectionTitle
          titleText="Traffic Channel"
          titleColor="bg-lavender-blue"
        />

        <Filter />
      </div>

      <div className="mx-6">
        <TrafficChannelChart />
      </div>
    </section>
  );
}
