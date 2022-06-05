import { writeFileSync, existsSync } from 'fs';
import { dirname  } from 'path';
import { fileURLToPath } from 'url';

export const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
     const file = `${__dirname}/files/fresh.txt`;
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

create();