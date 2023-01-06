// import { allProducts } from "../../../merce-dummy-data";
import { allCustomersData } from "../../../merce-dummy-data";
import CustomerListItem from "../../ui-components/customers-ui/CustomerListItem";

export default function CustomerTable() {
  return (
    <div className="mx-6 hidden md:block">
      <div className="flex text-left items-center px-3 text-sonic-silver border-b-2 border-gunmetal pb-5">
        <div className="flex gap-x-4 basis-2/5">
          <p>Name</p>
        </div>
        <p className="basis-2/5">Email</p>
        <p className="basis-1/4">Purchases</p>
        <p className="basis-1/4">Lifetime</p>
      </div>

      <div>
        {allCustomersData.map((item) => (
          <CustomerListItem
            key={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
            purchases={item.purchases}
            lifetime={item.lifetime}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
