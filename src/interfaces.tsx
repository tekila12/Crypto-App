export interface Item {
    id: string;
    name: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
    score: number;
    price_btc:number;
}

export interface Coin {
    item: Item;
}

export interface ResponseObject{
    coins: Coin[];
   
}
