import { config } from 'dotenv'
import { Client, Events, GatewayIntentBits, Collection } from 'discord.js'
config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
import { eventHandler } from './handlers/eventHandler';
import { rl } from './lib/InputLisener';
import * as webhook from './lib/WebhookSender';
export var MessagesArray: any = [];
eventHandler(client);

rl.on("line", (input: string) => {
    process.stdout.write('\x1Bc');
    MessagesArray.forEach((msg: string) => {
        console.log(msg);
    });
    if (input.length <= 0) return;
    webhook.send(input);
});

client.login(process.env.TOKEN);