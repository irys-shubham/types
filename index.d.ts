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
    type Items = { quantity: number; total: number; } & Products.Item;
    export interface Order {
        id: number;
        items: Items[];
        total: number;
    }
}