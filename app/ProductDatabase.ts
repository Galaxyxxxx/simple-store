import Store from "@/types/store";

const products: Store.Product[] = [
    {
        id: 1,
        title: "Samsung Galaxy S21 Ultra",
        price: 299,
        description: "The Samsung Galaxy S21 Ultra features a 6.8-inch Dynamic AMOLED 2X display, powerful Exynos 2100 or Snapdragon 888 chipset, a versatile quad-camera system with a 108MP main sensor, and a 5000mAh battery with fast and wireless charging. It supports 5G, has IP68 water resistance, and is compatible with the S Pen.",
        category: "Electronics",
        image: "/product1.jpg",
        rating: {
            rate: 7.5,
            count: 257
        },
    },
    {
        id: 2,
        title: "Samsung TV 55U",
        price: 1500,
        description: "The Samsung 55-inch Crystal UHD TVs, feature Dynamic Crystal Display for vibrant and clear colors, 4K resolution for sharp and detailed images, HDR technology to enhance brightness and reveal more details in dark scenes, a Smart TV with Tizen OS providing access to apps, streaming services, and smart home integration, Game Enhancer to reduce input lag for smoother gaming, and a slim, bezel-less design that complements any space.",
        category: "Electronics",
        image: "/product2.jpg",
        rating: {
            rate: 10,
            count: 1560
        },
    },
    {
        id: 3,
        title: "Samsung Smartfridge Nofrozr",
        price: 360,
        description: "The Samsung Smart Fridge with No Frost technology is designed to make your life easier and more efficient. It features advanced cooling systems that prevent frost buildup, ensuring consistent temperatures and eliminating the need for manual defrosting. With built-in Wi-Fi and SmartThings integration, you can monitor and control the fridge remotely, adjust settings, and even receive alerts if the door is left open. The fridge also includes energy-saving AI features, spacious compartments for organized storage, and a sleek, modern design that complements any kitchen.",
        category: "Electronics",
        image: "/product3.jpg",
        rating: {
            rate: 1,
            count: 1
        },
    },
    {
        id: 4,
        title: "Samsung Headphones WH1000XM3",
        price: 55,
        description: "The Sony WH1000XM3 headphones deliver excellent noise cancellation, high-quality sound, 30-hour battery life, quick charging, touch controls, and a comfortable wireless design perfect for extended use.",
        category: "Electronics",
        image: "/product4.jpg",
        rating: {
            rate: 8.0,
            count: 1000
        },
    },
    {
        id: 5,
        title: "Samsung Galaxy Watch Ultra",
        price: 350,
        description: "The Samsung Galaxy Watch Ultra is a durable and versatile smartwatch with a titanium case, sapphire glass, dual-frequency GPS, advanced health tracking, and a battery lasting up to 100 hours in power-saving mode, making it perfect for extreme conditions and daily use.",
        category: "Electronics",
        image: "/product5.jpg",
        rating: {
            rate: 8.7,
            count: 542
        },
    },
    {
        id: 6,
        title: "Samsung Odyssey G3",
        price: 450,
        description: "The Samsung Odyssey G3 is a gaming monitor with a Full HD VA panel, 180Hz refresh rate, 1ms response time, and AMD FreeSync support. Its ergonomic design and features like Eye Saver Mode ensure comfort for immersive, fast-paced gaming sessions.",
        category: "Electronics",
        image: "/product6.jpg",
        rating: {
            rate: 4.6,
            count: 190
        },
    },{
        id: 7,
        title: "Samsung Gear VR",
        price: 500,
        description: "The Samsung Gear VR is a virtual reality headset developed by Samsung in collaboration with Oculus. Released in 2015, it uses compatible Samsung Galaxy smartphones as its display and processor, connecting via USB-C or micro-USB. The headset features a touchpad, back button, and proximity sensor for user interaction, along with a 96° to 101° field of view depending on the model. Designed for mobile VR experiences, it supports gaming, simulations, and educational applications, offering an accessible entry point into virtual reality.",
        category: "Electronics",
        image: "/product7.jpg",
        rating: {
            rate: 7.2,
            count: 38
        },
    }];

export default products;