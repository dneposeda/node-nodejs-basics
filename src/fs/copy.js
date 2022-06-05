import { existsSync, readdirSync, statSync, mkdirSync, copyFileSync, constants } from 'fs';
import { dirname  } from 'path';
import { fileURLToPath } from 'url';

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const srcFolder = `${__dirname}/files`;
    const targetFolder = `${__dirname}/files_copy`;
    const errorMessage = 'FS operation failed';

    try {
        const isSrcFolderExist = await existsSync(srcFolder);
        const isTargetFolderExist = await existsSync(targetFolder);

        if (!isSrcFolderExist || isTargetFolderExist) throw new Error();

        await mkdirSync(targetFolder)

        const files = await readdirSync(srcFolder);

        for (const item of files) {
            const statusFile= await statSync(srcFolder+'/'+item)

            if (statusFile.isFile()) {
                await copyFileSync(srcFolder+'/'+item, targetFolder+'/'+item, constants.COPYFILE_EXCL);
            }
        }
    } catch (e) {
        throw new Error(errorMessage);
    }
};

copy();