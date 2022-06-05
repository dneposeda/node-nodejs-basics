import { existsSync, readdirSync } from 'fs';
import { dirname  } from 'path';
import { fileURLToPath } from 'url';


export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const folder = `${__dirname}/files`;
    const errorMessage = 'FS operation failed';

    try {
        const isFolderExist = await existsSync(folder);

        if (!isFolderExist) throw new Error();

        const files = await readdirSync(folder);

        console.log(files)
    } catch (e) {
        throw new Error(errorMessage);
    }
};

list();