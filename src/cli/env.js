import { env } from 'process';

export const parseEnv = () => {
    // set environment variables in cli 'RSS_TAG=123123 RSS_VALUE=qweqwe node env.js'
    const prefix = 'RSS_';
    const envVars = {};

    for (const item in env) {
        if (item.startsWith(prefix)) {
            envVars[item] = env[item]
        }
    }

    console.log(Object.entries(envVars).map(([name,value])=>`${name}=${value}`).join('; '))
};

parseEnv();