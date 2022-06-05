import { existsSync, unlinkSync } from 'fs';
import { dirname  } from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const destFile = `${__dirname}/files/fileToRemove.txt`;
    const errorMessage = 'FS operation failed';

    try {
        const isDestFileExist = await existsSync(destFile);

        if (!isDestFileExist) throw new Error();

        await unlinkSync(destFile);
    } catch (e) {
        throw new Error(errorMessage);
    }
};

remove();