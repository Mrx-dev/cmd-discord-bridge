import { Events, Client, Message } from "discord.js";
import { EventsType } from '../types/EventsType'
import { MessageType } from '../types/MessageType';
export let event: EventsType = {
    name: Events.MessageCreate,
    once: false,
    execute: (message: Message): void => {
        if (message.author.username === process.env.WEBHOOK_USERNAME) return;
        let messageObject: MessageType = {
            username: message.author.username,
            message: message.content,
            timestamps: message.createdAt
        }
        console.log(`[${new Date(messageObject.timestamps).toLocaleString("en-US")}] ${messageObject.username}:${messageObject.message}`);
    }
};