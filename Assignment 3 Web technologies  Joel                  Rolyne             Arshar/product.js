// Supermarket products: 50 items with product codes (prices in UGX)
const products = [
  // Grains & Staples
  { code: "P001", name: "Rice 1kg", category: "Grains", price: 5000 },
  { code: "P002", name: "Maize Flour 1kg", category: "Grains", price: 3500 },
  { code: "P003", name: "Wheat Flour 1kg", category: "Grains", price: 4000 },
  { code: "P004", name: "Spaghetti 500g", category: "Grains", price: 3000 },
  { code: "P005", name: "Beans 1kg", category: "Grains", price: 5500 },
  { code: "P006", name: "Posho 2kg", category: "Grains", price: 6500 },

  // Cooking Essentials
  { code: "P007", name: "Cooking Oil 1L", category: "Cooking", price: 9000 },
  { code: "P008", name: "Salt 500g", category: "Cooking", price: 1000 },
  { code: "P009", name: "Sugar 1kg", category: "Cooking", price: 5500 },
  { code: "P010", name: "Tomato Paste 70g", category: "Cooking", price: 1500 },
  { code: "P011", name: "Royco Cubes", category: "Cooking", price: 500 },
  { code: "P012", name: "Curry Powder 50g", category: "Cooking", price: 2000 },

  // Dairy & Eggs
  { code: "P013", name: "Fresh Milk 1L", category: "Dairy", price: 3000 },
  { code: "P014", name: "Yoghurt 500ml", category: "Dairy", price: 4000 },
  { code: "P015", name: "Butter 250g", category: "Dairy", price: 7000 },
  { code: "P016", name: "Cheese 200g", category: "Dairy", price: 10000 },
  { code: "P017", name: "Eggs (Tray of 30)", category: "Dairy", price: 12000 },
  { code: "P018", name: "Margarine 500g", category: "Dairy", price: 6000 },

  // Beverages
  { code: "P019", name: "Mineral Water 1.5L", category: "Beverages", price: 2000 },
  { code: "P020", name: "Soda 500ml", category: "Beverages", price: 1500 },
  { code: "P021", name: "Orange Juice 1L", category: "Beverages", price: 5000 },
  { code: "P022", name: "Tea Leaves 250g", category: "Beverages", price: 3500 },
  { code: "P023", name: "Instant Coffee 100g", category: "Beverages", price: 8000 },
  { code: "P024", name: "Energy Drink 300ml", category: "Beverages", price: 3000 },

  // Bakery & Snacks
  { code: "P025", name: "Bread (Loaf)", category: "Bakery", price: 4500 },
  { code: "P026", name: "Biscuits Pack", category: "Snacks", price: 2000 },
  { code: "P027", name: "Chips 100g", category: "Snacks", price: 2500 },
  { code: "P028", name: "Chocolate Bar", category: "Snacks", price: 3000 },
  { code: "P029", name: "Peanuts 250g", category: "Snacks", price: 3500 },
  { code: "P030", name: "Cake Slice", category: "Bakery", price: 2500 },

  // Fruits & Vegetables
  { code: "P031", name: "Tomatoes 1kg", category: "Vegetables", price: 3000 },
  { code: "P032", name: "Onions 1kg", category: "Vegetables", price: 3500 },
  { code: "P033", name: "Irish Potatoes 1kg", category: "Vegetables", price: 2500 },
  { code: "P034", name: "Cabbage (Head)", category: "Vegetables", price: 2000 },
  { code: "P035", name: "Bananas (Bunch)", category: "Fruits", price: 8000 },
  { code: "P036", name: "Oranges 1kg", category: "Fruits", price: 4000 },
  { code: "P037", name: "Pineapple", category: "Fruits", price: 3000 },

  // Meat & Fish
  { code: "P038", name: "Beef 1kg", category: "Meat", price: 15000 },
  { code: "P039", name: "Chicken 1kg", category: "Meat", price: 14000 },
  { code: "P040", name: "Fish (Tilapia) 1kg", category: "Meat", price: 12000 },

  // Household & Cleaning
  { code: "P041", name: "Laundry Soap Bar", category: "Household", price: 2500 },
  { code: "P042", name: "Washing Powder 1kg", category: "Household", price: 7000 },
  { code: "P043", name: "Dish Soap 500ml", category: "Household", price: 3500 },
  { code: "P044", name: "Toilet Paper (4 rolls)", category: "Household", price: 5000 },
  { code: "P045", name: "Bleach 750ml", category: "Household", price: 4000 },

  // Personal Care
  { code: "P046", name: "Bathing Soap", category: "Personal Care", price: 2000 },
  { code: "P047", name: "Toothpaste 100ml", category: "Personal Care", price: 4500 },
  { code: "P048", name: "Shampoo 400ml", category: "Personal Care", price: 9000 },
  { code: "P049", name: "Body Lotion 400ml", category: "Personal Care", price: 12000 },
  { code: "P050", name: "Sanitary Pads (Pack)", category: "Personal Care", price: 3500 },
];

// ---------- Helper functions ----------

// Find one product by its code
function findByCode(code) {
  return products.find(p => p.code === code.toUpperCase());
}

// Get all products in a category
function filterByCategory(category) {
  return products.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

// Search products by name
function searchByName(text) {
  return products.filter(p => p.name.toLowerCase().includes(text.toLowerCase()));
}

// Calculate the total for a list of codes
function calculateTotal(codes) {
  return codes.reduce((sum, code) => {
    const item = findByCode(code);
    return sum + (item ? item.price : 0);
  }, 0);
}

// ---------- Demo ----------
console.log("Total products:", products.length);
console.log("Find P007:", findByCode("P007"));
console.log("Dairy products:", filterByCategory("Dairy"));
console.log("Search 'soap':", searchByName("soap"));
console.log("Total for P001, P007, P009:", calculateTotal(["P001", "P007", "P009"]), "UGX");