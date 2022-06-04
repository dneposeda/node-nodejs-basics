import { writeFileSync, existsSync } from 'fs';

export const create = async () => {
     const file = 'files/fresh.txt';
     const text = 'I am fresh and young';
     const errorMessage = 'FS operation failed';

    try {
        const isFileExist = await existsSync(file);

        if (isFileExist) throw new Error();
        await writeFileSync(file, text);
    } catch (e) {
        throw new Error(errorMessage);
    }
};
