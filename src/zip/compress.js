import { dirname  } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises'

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const archiveName = 'archive.gz';

    const file = `${__dirname}/files/fileToCompress.txt`;
    const archive = `${__dirname}/files/${archiveName}`;

    const gzip = createGzip();
    const source = createReadStream(file);
    const target = createWriteStream(archive);

    await pipeline(source, gzip, target);
};

compress();