export const ProductService = {
    getProducts() {
        const products = [
            {
                id: 1,
                name: "Vicineko",
                category: "Categoría A",
                inventoryStatus: "INSTOCK",
                price: 19.98,
                image: "/src/assets/Imagenes/vicineko.jpg",
            },
            {
                id: 2,
                name: "Producto 2",
                category: "Categoría B",
                inventoryStatus: "LOWSTOCK",
                price: 29.99,
                image: "/src/assets/Imagenes/vicineko.jpg",
            },
            {
                id: 3,
                name: "EOs",
                category: "Categoría C",
                inventoryStatus: "OUTOFSTOCK",
                price: 80.20,
                image: "/src/assets/Imagenes/trabajador.png",
            },
            {
                id: 4,
                name: "EhjOs",
                category: "Catejgh",
                inventoryStatus: "OUTOFSTOCK",
                price: 80.20,
                image: "/src/assets/Imagenes/trabajador.png",
            },
            {
                id: 5,
                name: "EhkjlkOs",
                category: "Catego",
                inventoryStatus: "OUTOFSTOCK",
                price: 80.20,
                image: "/src/assets/Imagenes/trabajador.png",
            },

        ];

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 0);
        });
    },
};
