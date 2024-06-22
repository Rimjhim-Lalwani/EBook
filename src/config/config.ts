import { config as conf} from "dotenv";
conf();
const _config={
    port: process.env.PORT
}

export const config=Object.freeze(_config);
//Object.freeze is used to make the object as read-only