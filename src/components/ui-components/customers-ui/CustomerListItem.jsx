import Increase from "/assets/icons/increase.svg";
import UsersImg from "../general-ui/UsersImg";

export default function CustomerListItem({name, username, email, img, purchases, lifetime}) {
  return (
    <div className="product-item px-3 hover:rounded-md hover:bg-gunmetal transition-all duration-100 border-b py-4 border-gunmetal cursor-pointer">
      <div className="flex  text-left items-center">
        <div className="flex basis-2/5 gap-x-4">
          
          <div className="flex gap-x-3 items-center">
            <UsersImg userImg={img} />
            <aside>
              <p>{name}</p>
              <p className="text-sonic-silver text-sm">{username}</p>
            </aside>
          </div>
        </div>
        <p className="basis-2/5">
          <span className="text-sonic-silver text-sm font-semibold">{email}</span>
        </p>
        <p className="basis-1/4">
          <span className=" p-1.5 text-black bg-lavender-blue text-sm rounded-md font-semibold">
            {purchases}
          </span>
        </p>
        <p className="basis-1/4">${lifetime}</p>
      </div>
    </div>
  );
}
