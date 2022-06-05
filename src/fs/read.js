import { existsSync, readFileSync } from 'fs';

export const read = async () => {
    const file = 'files/fileToRead.txt';
    const errorMessage = 'FS operation failed';
    const encoding = 'utf8';

    try {
        const isFileExist = await existsSync(file);

        if (!isFileExist) throw new Error();

        const content = await readFileSync(file, encoding);

        console.log(content)
    } catch (e) {
        throw new Error(errorMessage);
    }
};

read();