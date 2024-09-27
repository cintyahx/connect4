import { Disc } from "./disc.model";
import { Player } from "./player.model";
import { Players } from "./players.model";

export interface Board {
    players: Players,
    discs: Array<Disc>,
    currentPlayer: Player,
    winner: Player,
    isOver: boolean
  }