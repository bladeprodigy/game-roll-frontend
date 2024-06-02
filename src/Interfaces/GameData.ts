export interface GameData {
    id: number;
    name: string;
    description: string;
    price: number;
    publisher: string;
    img?: string;
    buyState?: boolean;
}