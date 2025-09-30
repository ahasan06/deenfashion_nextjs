import axios from "axios";
import Image from "next/image";
import Link from "next/link";

async function getDressProducts() {
  const categories = ["mens-shirts", "womens-dresses", "tops"];
  const requests = categories.map((cat) =>
    axios.get(`https://dummyjson.com/products/category/${cat}?limit=5`)
  );

  const responses = await Promise.all(requests);
  return responses.flatMap((res) => res.data.products);
}

export default async function DressGrid() {
  const products = await getDressProducts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-semibold tracking-wide text-gray-800">
        Shop Dresses & Fashion
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <Link
            key={p.id}
            href={`/product/${p.id}`}
            className="group relative rounded-xl border border-black/10 bg-white p-4 shadow-sm transition hover:shadow-lg"
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg bg-gray-50">
              <Image
                src={p.thumbnail}
                alt={p.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="text-sm font-medium text-gray-800 group-hover:text-indigo-600">
                {p.title}
              </h3>
              <p className="text-indigo-600 font-semibold">${p.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
