import { Webhook } from "discord-webhook-node";
import { MessageType } from '../types/MessageType';
import { } from '../types/Environment';
export let send = (message: String): void => {
    const hook = new Webhook(process.env.WEBHOOK_URL);
    hook.setUsername(process.env.WEBHOOK_USERNAME)
    hook.send(message);
};