import type {Rank} from './general';

export interface Images {
    small: string;
    large: string;
    triangle_down: string;
    triangle_up: string;
}

export interface MMRHistoryGame {
    currenttier: number;
    currenttierpatched: Rank;
    images: Images;
    match_id: string;
    map: {
        name: string;
        id: string;
    };
    season_id: string;
    ranking_in_tier: number;
    mmr_change_to_last_game: number;
    elo: number;
    date: string;
    date_raw: number;
}

export type V1MMRHistoryResponse = MMRHistoryGame[];
