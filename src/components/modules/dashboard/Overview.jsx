import { useState } from "react";
import Filter from "../../ui-components/general-ui/Filter";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import Stats from "../../ui-components/dashboard-ui/Stats";
import NewCustomers from "../../ui-components/dashboard-ui/NewCustomers";
import { IncomeChart } from "../../ui-components/charts/MerceCharts";

export default function Overview() {
  const [customerStat, setCustomerStat] = useState(true);
  const [incomeStat, setIncomeStat] = useState(false);

  return (
    <section className="bg-soft-black p-6  rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle titleText="Overview" titleColor="bg-peach" />

        <Filter />
      </div>

      <Stats
        customerStat={customerStat}
        setCustomerStat={setCustomerStat}
        setIncomeStat={setIncomeStat}
        incomeStat={incomeStat}
      />
      {customerStat && <NewCustomers />}
      {incomeStat && <IncomeChart />}
    </section>
  );
}
