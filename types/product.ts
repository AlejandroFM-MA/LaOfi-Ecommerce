export type ProductType = {
    id: number;
    color: string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    price: number;
        
    images: Array<{
        id: number,
        documentId: string,
        name: string,
        url: string,
        formats: {
            large?: { url: string },
            small?: { url: string },
            medium?: { url: string },
            thumbnail?: { url: string }
        }
    }>;
    
    category: {
        id: number,
        documentId: string,
        categoryName: string,
        slug: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string
    }
};
    
