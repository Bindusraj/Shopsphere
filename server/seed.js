import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const products = [
  {
    name: "iPhone 15",
    price: 80000,
    image: "https://iplanet.one/cdn/shop/files/iPhone_15_Pink_PDP_Image_Position-1__en-IN_4ec3687d-4f79-47aa-b342-1ca19ca1f693.jpg?v=1695429352&width=1920",
    description: "Latest Apple iPhone",
    countInStock: 10,
    category: "Mobile",
  },
  {
    name: "Samsung Galaxy S23",
    price: 75000,
    image: "https://m.media-amazon.com/images/I/71goZuIha-L._SX679_.jpg",
    description: "Samsung flagship phone",
    countInStock: 8,
    category: "Mobile",
  },
  {
    name: "OnePlus 12",
    price: 65000,
    image: "https://m.media-amazon.com/images/I/61amb0CfMGL._SX679_.jpg",
    description: "Fast performance phone",
    countInStock: 12,
    category: "Mobile",
  },
  {
    name: "Sony Headphones",
    price: 15000,
    image: "https://sony.scene7.com/is/image/sonyglobalsolutions/WH-CH720N_Product_intro_Pink_01_M?$productIntroPlatemobile$&fmt=png-alpha",
    description: "Noise cancelling headphones",
    countInStock: 15,
    category: "Electronics",
  },
  {
    name: "Boat Earbuds",
    price: 2500,
    image: "https://m.media-amazon.com/images/I/61KNJav3S9L._SX679_.jpg",
    description: "Wireless earbuds",
    countInStock: 30,
    category: "Electronics",
  },
  {
    name: "Dell Laptop",
    price: 60000,
    image: "https://5.imimg.com/data5/KU/QR/MY-10167030/dell-laptops.jpg",
    description: "Work laptop",
    countInStock: 5,
    category: "Laptop",
  },
  {
    name: "HP Pavilion",
    price: 55000,
    image: "https://www.logicainfoway.com/wp-content/uploads/2023/10/002-25-600x600.jpg",
    description: "Lightweight laptop",
    countInStock: 7,
    category: "Laptop",
  },
  {
    name: "MacBook Air M2",
    price: 110000,
    image: "https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg",
    description: "Apple laptop",
    countInStock: 4,
    category: "Laptop",
  },
  {
    name: "Nike Shoes",
    price: 5000,
    image: "https://rukminim2.flixcart.com/image/480/640/jm573ww0/shoe/m/n/y/court-borough-mid-8-nike-white-gym-red-black-original-imaf8ayjg6yfs4qj.jpeg?q=20",
    description: "Running shoes",
    countInStock: 20,
    category: "Fashion",
  },
  {
    name: "Adidas Sneakers",
    price: 4500,
    image: "https://m.media-amazon.com/images/I/61utX8kBDlL._SX625_.jpg",
    description: "Stylish sneakers",
    countInStock: 25,
    category: "Fashion",
  },
  {
    name: "Puma Shoes",
    price: 4000,
    image: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/i/q/x/-original-imagyqyfrzxz65j4.jpeg?q=20",
    description: "Sports shoes",
    countInStock: 18,
    category: "Fashion",
  },
  {
    name: "Smart Watch",
    price: 3000,
    image: "https://vsprod.vijaysales.com/media/catalog/product/2/2/227197-image1_1.jpg?optimize=medium&fit=bounds&height=500&width=500",
    description: "Fitness watch",
    countInStock: 40,
    category: "Electronics",
  },
  {
    name: "Apple Watch",
    price: 35000,
    image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg",
    description: "Premium watch",
    countInStock: 10,
    category: "Electronics",
  },
  {
    name: "Bluetooth Speaker",
    price: 2000,
    image: "https://media.tatacroma.com/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/251614_0_ghxuff.png",
    description: "Portable speaker",
    countInStock: 50,
    category: "Electronics",
  },
  {
    name: "Gaming Mouse",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._SX679_.jpg",
    description: "Gaming mouse",
    countInStock: 35,
    category: "Electronics",
  },
  {
    name: "Mechanical Keyboard",
    price: 4000,
    image: "https://images.indianexpress.com/2021/06/Corsair-Mechanical-Keyboard.jpg",
    description: "RGB keyboard",
    countInStock: 20,
    category: "Electronics",
  },
  {
    name: "Backpack",
    price: 1200,
    image: "https://icon.in/cdn/shop/files/1_5b7bd7ae-1e7e-4cbe-a7fc-2f6d8b64f082.jpg?v=1763107481",
    description: "Travel bag",
    countInStock: 60,
    category: "Fashion",
  },
  {
    name: "Office Chair",
    price: 7000,
    image: "https://m.media-amazon.com/images/I/71-ZmhEo-aL._AC_UF894,1000_QL80_.jpg",
    description: "Comfortable chair",
    countInStock: 10,
    category: "Furniture",
  },
  {
    name: "Study Table",
    price: 9000,
    image: "https://caspianfurniture.com/cdn/shop/files/14.jpg?v=1753776990",
    description: "Wooden table",
    countInStock: 6,
    category: "Furniture",
  },
  {
    name: "LED TV",
    price: 30000,
    image: "https://prochipper.in/wp-content/uploads/2020/06/24-normal-tv-dianora.png",
    description: "Smart TV",
    countInStock: 9,
    category: "Electronics",
  },
  // 📱 MOBILE
  {
    name: "iPhone 15",
    price: 80000,
    image: "https://www.imagineonline.store/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN_e4ec8714-4f10-42a3-8655-71304a9c6866.jpg?v=1759733978",
    description: "Latest Apple iPhone",
    countInStock: 10,
    category: "Mobile",
  },
  {
    name: "Samsung Galaxy S23",
    price: 75000,
    image: "https://m.media-amazon.com/images/I/719zApN1mhL.jpg",
    description: "Samsung flagship",
    countInStock: 8,
    category: "Mobile",
  },
  {
    name: "OnePlus 12",
    price: 65000,
    image: "https://image01-in.oneplus.net/media/202407/10/a5965d66f91f3669481b04c776170d91.png?x-amz-process=image/format,webp/quality,Q_80",
    description: "Fast phone",
    countInStock: 12,
    category: "Mobile",
  },
  {
    name: "Redmi Note 13",
    price: 18000,
    image: "https://cdn.webshopapp.com/shops/256009/files/447245835/xiaomi-xiaomi-redmi-note-13-4g-8gb-256gb.jpg",
    description: "Budget phone",
    countInStock: 25,
    category: "Mobile",
  },

  // 💻 LAPTOP
  {
    name: "Dell Inspiron",
    price: 60000,
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/16-5640/pdp/laptop-inspiron-16-5640-sentry-pdp-mg.psd?fmt=png-alpha&wid=570&hei=400",
    description: "Work laptop",
    countInStock: 6,
    category: "Laptop",
  },
  {
    name: "HP Pavilion 15",
    price: 55000,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/2/OM/GW/DI/129540076/dell-latitude-e5270-laptop.jpg",
    description: "Light laptop",
    countInStock: 7,
    category: "Laptop",
  },
  {
    name: "MacBook Air M2",
    price: 110000,
    image: "https://m.media-amazon.com/images/I/719C6bJv8jL.jpg",
    description: "Apple laptop",
    countInStock: 4,
    category: "Laptop",
  },
  {
    name: "Lenovo IdeaPad",
    price: 50000,
    image: "https://i5.walmartimages.com/seo/Lenovo-Ideapad-14-PC-Laptop-Intel-Pentium-Gold-6405U-4GB-RAM-128GB-SSD-Windows-10-Blue-81WA00B1US_bb10b1e2-9158-46e3-a525-66cb9c3d32ea.0eed75e654927ff0bb31de19f78e04be.jpeg",
    description: "Student laptop",
    countInStock: 10,
    category: "Laptop",
  },

  // 🎧 ELECTRONICS
  {
    name: "Sony Headphones",
    price: 15000,
    image: "https://conceptkart.com/cdn/shop/files/Concept-Kart-Sony-WH-CH720N-Wireless-Headphone-Black-1-_1.jpg?v=1691475855",
    description: "Noise cancelling",
    countInStock: 15,
    category: "Electronics",
  },
  {
    name: "Boat Earbuds",
    price: 2500,
    image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Headphones%20and%20Earphones/Images/312009_0_pendvb.png",
    description: "Wireless earbuds",
    countInStock: 30,
    category: "Electronics",
  },
  {
    name: "Bluetooth Speaker",
    price: 2000,
    image: "https://shop.zebronics.com/cdn/shop/files/Zeb-Axon-200--pic-1.jpg?v=1734502510&width=2000",
    description: "Portable speaker",
    countInStock: 50,
    category: "Electronics",
  },
  {
    name: "Smart Watch",
    price: 3000,
    image: "https://m.media-amazon.com/images/I/71XA0QCW5lL._AC_UF1000,1000_QL80_.jpg",
    description: "Fitness watch",
    countInStock: 40,
    category: "Electronics",
  },

  // 👕 FASHION
  {
    name: "Nike Shoes",
    price: 5000,
    image: "https://cdn-images.farfetch-contents.com/20/66/21/46/20662146_50561305_600.jpg",
    description: "Running shoes",
    countInStock: 20,
    category: "Fashion",
  },
  {
    name: "Adidas Sneakers",
    price: 4500,
    image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/08c7c0fc4ae84932864226ad74075e6e_9366/Handball_Spezial_Shoes_Brown_IF6490_00_plp_standard.jpg",
    description: "Stylish sneakers",
    countInStock: 25,
    category: "Fashion",
  },
  {
    name: "Puma T-Shirt",
    price: 1200,
    image: "https://5.imimg.com/data5/YG/XV/MY-53107274/puma-t-shirt-500x500.jpg",
    description: "Casual wear",
    countInStock: 40,
    category: "Fashion",
  },
  {
    name: "Levi's Jeans",
    price: 2500,
    image: "https://assets.ajio.com/medias/sys_master/root1/20250925/v0X0/68d51aa13d468c61ab250b5d/-473Wx593H-469762125-darkindigo-MODEL.jpg",
    description: "Denim jeans",
    countInStock: 30,
    category: "Fashion",
  },

  // 🪑 FURNITURE
  {
    name: "Office Chair",
    price: 13000,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvUxnt3vxtAkaT6qeootyufLFeAqJjwyAKJQ7Z09SI4_THEB7G_Hgc999frLg406Do4OFFpyYiO6uy6p9LaXL3VDJhnYgWLnAio7o7hbYJq6EiUwMq4cQFWQqy&usqp=CAc",
    description: "Comfort chair",
    countInStock: 10,
    category: "Furniture",
  },
  {
    name: "Study Table",
    price: 900,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTd6C-APWrJa6oLxiKtQjzINc5u3GAVZXGRzGc0072bs7MVWqhfAaEcVXnEJTTNdxa__-1IJEkqgWT4VEqWcSfjuyZR6vPy8GW807NSNfmMFOH7iJE3a3p9uw",
    description: "Wooden table",
    countInStock: 6,
    category: "Furniture",
  },
  {
    name: "Sofa Set",
    price: 20000,
    image: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/26b19304-17df-456c-b463-094938619439/whatsapp-image-2023-02-20-at-12-53-22-am.jpeg",
    description: "Living room sofa",
    countInStock: 5,
    category: "Furniture",
  },
  {
    name: "Bed Frame",
    price: 15000,
    image: "https://www.nilkamalsleep.com/cdn/shop/files/1_61f9365a-c5b3-4b95-a64a-69b40203187c_650x.jpg?v=1724666320",
    description: "Queen size bed",
    countInStock: 4,
    category: "Furniture",
  },
];

const importData = async () => {
  try {
    await Product.deleteMany(); // optional
    await Product.insertMany(products);
    console.log("Products Added ✅");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();