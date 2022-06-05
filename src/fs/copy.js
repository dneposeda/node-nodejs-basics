import { existsSync, readdirSync, statSync, mkdirSync, copyFileSync, constants } from 'fs';

export const copy = async () => {
    const srcFolder = 'files';
    const targetFolder = 'files_copy';
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