import { Events, Client } from "discord.js";
import { EventsType } from '../types/EventsType'

export let event: EventsType = {
    name: Events.ClientReady,
    once: true,
    execute: (client: any): void => {
        console.log(`Ready! Logged in as ${client.user.tag}`);
    }
};