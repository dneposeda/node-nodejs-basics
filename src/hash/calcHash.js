import { dirname  } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { createHash } from 'crypto';

export const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const encoding = 'utf8';

    const file = `${__dirname}/files/fileToCalculateHashFor.txt`;
    const fileData = await readFileSync(file, encoding)

    const hash = createHash('sha256');
    const hex = hash.update(fileData).digest('hex');

    console.log(hex)
    return hex;
};

calculateHash();