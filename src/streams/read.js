import { dirname  } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';
import { stdout } from 'process';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const encoding = 'utf8';

    const file = `${__dirname}/files/fileToRead.txt`;

    const stream = createReadStream(file, encoding);

    stream.on('data', (text) => stdout.write(text))
};

read();