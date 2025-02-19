import type { Region } from "./general";

export interface Card {
    small: string;
    large: string;
    wide: string;
    id: string;
}

export interface V1AccountResponse {
    puuid: string;
    region: Region;
    account_level: number;
    name: string;
    tag: string;
    card: Card;
    last_update: string;
    last_update_raw: number;
}
