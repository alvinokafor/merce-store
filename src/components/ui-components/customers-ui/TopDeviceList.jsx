import { topDevicesData } from "../../../merce-dummy-data";

export default function TopDeviceList() {
  return (
    <div className="mx-6 flex items-center justify-between mt-8">
      {topDevicesData.map((item) => (
        <div>
          <img className="mb-2" src={item.img} alt="icon" />
          <p className="text-sonic-silver text-sm">{item.title}</p>
          <h3 className="text-xl font-semibold">{item.data}</h3>
        </div>
      ))}
    </div>
  );
}
