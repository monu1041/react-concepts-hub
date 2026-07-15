export function generateProducts() {
  return Array.from({ length: 5000000 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    price: Math.floor(Math.random() * 1000) + 100,
  }));
}