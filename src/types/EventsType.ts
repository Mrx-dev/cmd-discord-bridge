import { Events } from "discord.js"
export interface EventsType {
    name: Events | string,
    once: Boolean,
    execute: Function
}