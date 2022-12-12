import Filter from "../../ui-components/general-ui/Filter";
import SectionTitle from "../../ui-components/general-ui/SectionTitle";
import { ProductViewsChart } from "../../ui-components/charts/MerceCharts";

export default function ProductView() {
  return (
    <section className="bg-soft-black p-6  rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <SectionTitle titleText="Product Views" titleColor="bg-lavender-blue" />

        <Filter />
      </div>

      <ProductViewsChart />
    </section>
  );
}
