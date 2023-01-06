import React from 'react'
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import { TopDeviceChart } from '../../ui-components/charts/MerceCharts';
import TopDeviceList from '../../ui-components/customers-ui/TopDeviceList';

export default function TopDevice() {
  return (
    <section className=" bg-soft-black py-6 rounded-lg">
    <div className="mx-6 mb-8">
      <SectionTitle
        titleText="Top Device"
        titleColor="bg-uranian-blue"
      />
    </div>

    <div className="mx-6">
      <TopDeviceChart />
    </div>

    <TopDeviceList />
  </section>
  )
}
