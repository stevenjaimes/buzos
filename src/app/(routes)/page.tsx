import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/componentsf/billboard";

import ProductList from "@/componentsf/product-list";
import Container from "@/componentsf/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard(`${process.env.NEXT_PUBLIC_BILLBOARD}`);
  const products = await getProducts({ isFeatured: true })

  return (
    <Container>    
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    
    </Container>
  )
}
