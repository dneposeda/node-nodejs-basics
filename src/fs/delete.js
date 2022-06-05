import { existsSync, unlinkSync } from 'fs';

export const remove = async () => {
    const destFile = 'files/fileToRemove.txt';
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