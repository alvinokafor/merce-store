import UsersImg from "../general-ui/UsersImg";

export default function NewCustomers() {
  const demoUsers = [
    {
      id: "user1",
      name: "Dennis",
      img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },

    {
      id: "user2",
      name: "Gladys",
      img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },

    {
      id: "user3",
      name: "Leo",
      img: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    },
  ];

  const screenSize = window.innerWidth;
  const slicedUsers = demoUsers.slice(0, 2);

  return (
    <section className="text-sonic-silver mt-6">
      <p className="mb-8 font-medium">You have 12 new customers</p>

      <div className="flex justify-between items-center mb-8">
        {screenSize >= 768
          ? demoUsers.map((user) => (
              <div key={user.id}>
                <UsersImg userImg={user.img} />
                <p className="text-white font-medium text-center mt-3">
                  {user.name}
                </p>
              </div>
            ))
          : slicedUsers.map((slicedUser) => (
              <div key={slicedUser.id}>
                <UsersImg userImg={slicedUser.img} />
                <p className="text-white font-medium text-center mt-3">
                  {slicedUser.name}
                </p>
              </div>
            ))}

        <div>
          <button className="group hover:bg-white transition-all duration-150 flex items-center justify-center bg-gunmetal w-16 h-16 rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="group-hover:fill-soft-black transition-all duration-150"
                d="M13.2929 17.7929C12.9024 18.1834 12.9024 18.8166 13.2929 19.2071C13.6834 19.5976 14.3166 19.5976 14.7071 19.2071L20.5 13.4142C21.281 12.6332 21.281 11.3668 20.5 10.5858L14.7071 4.79289C14.3166 4.40237 13.6834 4.40237 13.2929 4.79289C12.9024 5.18342 12.9024 5.81658 13.2929 6.20711L18.0858 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13H18.0858L13.2929 17.7929Z"
                fill="#6F767E"
              />
            </svg>
          </button>
          <p className="text-white font-medium text-center mt-3">View all</p>
        </div>
      </div>
    </section>
  );
}
