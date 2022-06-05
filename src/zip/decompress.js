import { dirname  } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { pipeline } from 'stream/promises';

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const archiveName = 'archive.gz';

    const file = `${__dirname}/files/fileToCompress.txt`;
    const archive = `${__dirname}/files/${archiveName}`;

    const gunzip = createGunzip();
    const source = createReadStream(archive);
    const target = createWriteStream(file)

    await pipeline(source, gunzip, target);
};

decompress();