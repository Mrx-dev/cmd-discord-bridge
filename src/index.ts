import { config } from 'dotenv'
import { Client, Events, GatewayIntentBits, Collection } from 'discord.js'
config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });
import { eventHandler } from './handlers/eventHandler';

eventHandler(client);


client.login(process.env.TOKEN);