import { existsSync, readdirSync } from 'fs';

export const list = async () => {
    const folder = 'files';
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