import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import Billboard from "@/componentsf/billboard";
import Footer from "@/componentsf/footer";
import Navbar from "@/componentsf/navbar";
import ProductList from "@/componentsf/product-list";
import Container from "@/componentsf/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const billboard = await getBillboard("adb55b48-a49b-4449-8da8-63dcbce29097");
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
