import { existsSync, renameSync } from 'fs';

export const rename = async () => {
    const srcFile = 'files/wrongFilename.txt';
    const destFile = 'files/properFilename.md';
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