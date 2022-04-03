export type Image = {
    id: number;
    height: string;
    src: string;
    width: string;
};

export type Price = {
    id: number;
    price: string;
    priceDate: Date;
};

export type Type = {
    id: number;
    type: string;
};

export type Variant = {
    id: number;
    variantTitle: string;
    featuredImage: Image;
    grams: number;
    available: boolean;
    prices: Price[];
};

export type Product = {
    id: number;
    productTitle: string;
    images: Image[];
    types: Type[];
    variants: Variant[];
};
