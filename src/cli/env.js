import { env } from 'process';

export const parseEnv = () => {
    // set environment variables in cli 'RSS_TAG=123123 RSS_VALUE=qweqwe node env.js'
    const prefix = 'RSS_';
    const envVars = [];

    for (const item in env) {
        if (item.startsWith(prefix)) envVars.push(`${item}=${env[item]}`)
    }

    console.log(envVars.join('; '))
};