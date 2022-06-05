import { existsSync, readFileSync } from 'fs';
import { dirname  } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = `${__dirname}/files/fileToRead.txt`;
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