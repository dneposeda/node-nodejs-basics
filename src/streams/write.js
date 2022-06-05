import { dirname  } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';
import { stdin } from 'process';

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const destFile = `${__dirname}/files/fileToWrite.txt`;
    const stream = createWriteStream(destFile);

    stdin.on('data', data => stream.write(data));
};

write();