
export default function PageWrapper({ children }) {
  return (
    <div className="pb-12 mt-28 mx-4 md:mt-32 md:mx-3 lg:ml-[300px] lg:mt-32 lg:mr-8">
      {children}
    </div>
  );
}
