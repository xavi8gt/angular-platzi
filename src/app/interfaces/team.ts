import { Player, Countries } from './player';

export interface Team {
    $Key?: string;
    name: string;
    country: Countries;
    players: Player[]
}