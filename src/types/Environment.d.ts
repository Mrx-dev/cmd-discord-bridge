declare global {
    module NodeJS {
        interface ProcessEnv {
            TOKEN: string;
            WEBHOOK_USERNAME: string;
            WEBHOOK_URL: string;
        }
    }
}
export { };