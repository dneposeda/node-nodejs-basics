import { argv } from 'process';

export const parseArgs = () => {
    // set arguments in cli 'RSS_TAG=123123 RSS_VALUE=qweqwe node env.js'
    const prefix = '--';
    const argumentsCLI = {};

    argv.forEach((val, index) => {
        if (val.startsWith(prefix)) {
            argumentsCLI[val.replace(prefix,'')] = argv[index+1]
        }
    });

    console.log(Object.entries(argumentsCLI).map(([propName,value])=>`${propName} is ${value}`).join(', '))
};

parseArgs()