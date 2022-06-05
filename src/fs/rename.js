import { existsSync, renameSync } from 'fs';
import { dirname  } from 'path';
import { fileURLToPath } from 'url';

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const srcFile = `${__dirname}/files/wrongFilename.txt`;
    const destFile = `${__dirname}/files/properFilename.md`;
    const errorMessage = 'FS operation failed';

    try {
        const isSrcFileExist = await existsSync(srcFile);
        const isDestFileExist = await existsSync(destFile);

        if (!isSrcFileExist || isDestFileExist) throw new Error();

        await renameSync(srcFile, destFile)

    } catch (e) {
        throw new Error(errorMessage);
    }
};

rename();