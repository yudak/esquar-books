import { BookItem } from './book-item';


export interface SearchResponse {
    kind: string;
    totalItems: number;
    items: BookItem[];
}



