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
    interface Items extends Products.Item {
        quantity: number;
        total: number;
    }
    export interface Order {
        id: number;
        items: Items[];
        total: number;
    }
}