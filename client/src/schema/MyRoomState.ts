// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 2.0.36
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { Player } from './Player'

export class MyRoomState extends Schema {
    @type({ map: Player }) public players: MapSchema<Player> = new MapSchema<Player>();
    @type("number") public currentTurn!: number;
}
