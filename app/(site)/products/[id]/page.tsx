import { products } from "@/lib/productsData";
import { useI18nStore } from "@/store/i18nStore";
import ProductDetailClient from "./ProductDetailClient";
import Link from "next/link";

// 预生成所有产品页面的静态路径
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// 产品详情页面 - 服务器组件
const ProductDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <main className="bg-slate-100 text-slate-900">
        <section className="py-10">
          <div className="mx-auto max-w-c-1390 px-4 md:px-8 xl:px-0">
            <Link
              href="/products"
              className="text-sm font-semibold text-amber-600 hover:text-amber-700"
            >
              返回产品列表
            </Link>
            <div className="mt-6 rounded-xl border border-slate-300 bg-slate-50 p-6 text-slate-700">
              产品不存在
            </div>
          </div>
        </section>
      </main>
    );
  }

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;
