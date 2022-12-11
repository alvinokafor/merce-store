import Filter from "../../ui-components/general-ui/Filter";
import Stats from "../../ui-components/dashboard-ui/Stats";

export default function Overview() {
  return (
    <section className="bg-soft-black p-6  rounded-lg">
      <div className="flex justify-between items-center mb-8">
        
        <div className="flex items-center space-x-4">
          <div className="bg-peach w-4 h-8 rounded-[4px]"></div>
          <p>Overview</p>
        </div>

        <Filter />
      </div>

      <Stats />
    </section>
  );
}
