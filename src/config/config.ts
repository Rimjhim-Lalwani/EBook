import { config as conf} from "dotenv";
conf();
const _config={
    port: process.env.PORT,
    db: process.env.MONGO,
    env: process.env.NODE_ENV
}

export const config=Object.freeze(_config);
//Object.freeze is used to make the object as read-only