import Store from "@/types/store";

const products: Store.Product[] = [
    {
        id: 1,
        title: "Samsung Galaxy S21 Ultra",
        price: 299,
        description: "The Samsung Galaxy S21 Ultra features a 6.8-inch Dynamic AMOLED 2X display, powerful Exynos 2100 or Snapdragon 888 chipset, a versatile quad-camera system with a 108MP main sensor, and a 5000mAh battery with fast and wireless charging. It supports 5G, has IP68 water resistance, and is compatible with the S Pen.",
        category: "Smartphones",
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
        category: "TVs",
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
        category: "AGD",
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
        category: "Headphones",
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
        category: "Smartwatches",
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
        category: "Monitors",
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
        category: "VR headsets",
        image: "/product7.jpg",
        rating: {
            rate: 7.2,
            count: 38
        },
    },{
        "id": 8,
        "title": "Samsung Galaxy Watch 5",
        "price": 300,
        "description": "The Samsung Galaxy Watch 5 is a smartwatch that combines advanced health tracking with elegant design. Released in 2022, it features a robust 1.4-inch AMOLED display, customizable watch faces, and is powered by Samsung's Exynos W920 chipset. With sensors for heart rate, sleep, and blood oxygen monitoring, it supports over 90 workouts and integrates seamlessly with Samsung smartphones for notifications, music control, and more.",
        "category": "Smartwatches",
        "image": "/product8.jpg",
        "rating": {
            "rate": 8.5,
            "count": 152
        }
    },{
        "id": 9,
        "title": "Samsung Galaxy Z Fold 5",
        "price": 1800,
        "description": "The Samsung Galaxy Z Fold 5 is a cutting-edge foldable smartphone that combines a compact design with a massive 7.6-inch foldable AMOLED display. Released in 2023, it features a powerful Snapdragon 8 Gen 2 processor, 12GB RAM, and up to 1TB storage. The device offers a unique multitasking experience, allowing users to run multiple apps simultaneously on the large display, along with an ultra-durable hinge and improved durability over previous models.",
        "category": "Smartphones",
        "image": "/product9.jpg",
        "rating": {
            "rate": 9.0,
            "count": 325
        }
    },{
        "id": 10,
        "title": "Samsung QLED 8K TV QN900B",
        "price": 5000,
        "description": "The Samsung QLED 8K TV QN900B delivers an immersive viewing experience with its stunning 8K resolution, vibrant colors, and deep contrast. Released in 2023, it features Quantum Dot technology and an ultra-slim bezel for a sleek design. Powered by the Neural Quantum Processor 8K, it upscales content to near-8K quality, providing sharp detail and smooth motion for both movies and sports. The TV also supports Dolby Atmos sound for an enhanced audio experience.",
        "category": "TVs",
        "image": "/product10.jpg",
        "rating": {
            "rate": 9.3,
            "count": 42
        }
    },{
        "id": 11,
        "title": "Samsung Odyssey G9 Curved Monitor",
        "price": 1500,
        "description": "The Samsung Odyssey G9 is an ultra-wide, curved gaming monitor with a 49-inch display and a 1000R curvature for an immersive experience. Released in 2020, it features a 240Hz refresh rate, 1ms response time, and Quantum Dot technology for vibrant, true-to-life colors. The monitor also supports NVIDIA G-Sync and AMD FreeSync Premium Pro for smooth gameplay. With a 32:9 aspect ratio, it’s perfect for both gaming and multitasking.",
        "category": "Monitors",
        "image": "/product11.jpg",
        "rating": {
            "rate": 8.8,
            "count": 76
        }
    },{
        "id": 12,
        "title": "Samsung Galaxy Buds Pro",
        "price": 200,
        "description": "The Samsung Galaxy Buds Pro provide an exceptional audio experience with active noise cancellation and 360 Audio for an immersive soundstage. Released in 2021, they feature a comfortable, ergonomic design with IPX7 water resistance, making them ideal for workouts or everyday use. The Buds Pro offer 28 hours of battery life with the charging case and seamlessly integrate with Samsung smartphones for enhanced features.",
        "category": "Headphones",
        "image": "/product12.jpg",
        "rating": {
            "rate": 8.7,
            "count": 150
        }
    },{
        "id": 13,
        "title": "Samsung Galaxy Watch 4",
        "price": 250,
        "description": "The Samsung Galaxy Watch 4 is a stylish smartwatch designed to help you stay connected and healthy. It features a sleek design, enhanced health tracking, including body composition measurement, sleep tracking, and heart rate monitoring. With Google Wear OS integrated, it allows access to a wide variety of apps, fitness tracking features, and seamless integration with Samsung smartphones. The watch also supports calls, notifications, and has a built-in GPS.",
        "category": "Smartwatches",
        "image": "/product13.jpg",
        "rating": {
            "rate": 8.5,
            "count": 215
        }
    },];

export default products;