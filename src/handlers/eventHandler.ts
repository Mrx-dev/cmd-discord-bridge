import * as fs from 'fs';
import { EventsType } from '../types/EventsType'
import { Client, Message } from 'discord.js';
import * as path from 'node:path';
export let eventHandler = (client: Client) => {
    fs.readdirSync(path.join(__dirname, '../events')).forEach((file) => {
        if (!file.endsWith('.ts')) return;
        let event: EventsType = require(`../events/${file}`).event;
        if (event.once) return client.once(event.name, (client: Client) => event.execute(client));
        client.on(event.name, (client: Client, message: Message) => event.execute(client, message));
    });
};