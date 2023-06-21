import { activedirectory } from 'activedirectory';
import { dotenv } from 'dotenv';

dotenv.config();

const config = {
    url: process.env.AD_URL,
    baseDN: process.env.AD_BASE_DN,
    username: process.env.AD_USERNAME,
    password: process.env.AD_PASSWORD,
};

const ad = new activedirectory(config);

export default ad;