import storeItems from '../components/info.json';

export default function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16">
      {storeItems.products.map((item) => (
        <div key={item.title} className="p-4 border rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
            <p className="mt-2 font-bold">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

