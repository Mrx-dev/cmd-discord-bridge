import { Events, Client, Message } from "discord.js";
import { EventsType } from '../types/EventsType'
import { MessageType } from '../types/MessageType';
import { MessagesArray } from "../index";
export let event: EventsType = {
    name: Events.MessageCreate,
    once: false,
    execute: (message: Message): void => {
        let messageObject: MessageType = {
            username: message.author.username,
            message: message.content,
            timestamps: message.createdAt
        }
        let messageFormat = `[${new Date(messageObject.timestamps).toLocaleString("en-US")}] ${messageObject.username}: ${messageObject.message}`;
        console.log(messageFormat);
        MessagesArray.push(messageFormat);

    }
};