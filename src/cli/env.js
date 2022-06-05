import { env } from 'process'

export const parseEnv = () => {
    for (const key in env) {
        if (key.includes('RSS_')) {
            console.log(`${key}=${env[key]}`)
        };
    };
};

parseEnv();

