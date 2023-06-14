import { Events, Client, Message } from "discord.js";
import { EventsType } from '../types/EventsType'
import { LogType } from '../types/LogType';
export let event: EventsType = {
    name: Events.MessageCreate,
    once: false,
    execute: (message: Message): void => {
        let logObject: LogType = {
            username: message.author.username,
            message: message.content,
            timestamps: message.author.createdTimestamp
        }
        console.log(logObject);
    }
};