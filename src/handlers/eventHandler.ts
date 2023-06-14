import * as fs from 'fs';
import { EventsType } from '../types/EventsType'
import { Client } from 'discord.js';

export let eventHandler = (client: Client) => {
    fs.readdirSync('./events').forEach((file) => {
        if (!file.endsWith('.ts')) return;
        let event: EventsType = require(`../events/${file}`).event;
        if (event.once) return client.once(event.name, (client: Client) => event.execute(client));
        client.on(event.name, (client: Client) => event.execute(client));
    });
};