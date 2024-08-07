namespace Products {
    export interface Item {
        id: number;
        name: string;
        description: string;
        price: number;
        image: string;
    }
}

namespace Orders {
    export interface Order {
        id: number;
        items: Products.Item[];
        total: number;
    }
}