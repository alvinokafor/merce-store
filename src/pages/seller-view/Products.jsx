import PageWrapper from "../../components/modules/general-modules/PageWrapper";
import Overview from "../../components/modules/products/Overview";
import ProductList from "../../components/modules/products/ProductList";

export default function Products() {
  return (
    <>
      <PageWrapper>
        <h1 className="text-3xl font-semibold md:text-4xl">Products overview</h1>
        <section className="mt-6">
          <Overview />
          <ProductList />
        </section>
      </PageWrapper>
    </>
  );
}
