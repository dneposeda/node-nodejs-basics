import { Transform } from 'stream';
import { stdin, stdout } from 'process';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const chunkStr = chunk.toString().trim();
            const reverseChunk = chunkStr.split('').reverse().join('');

            callback(null, `${reverseChunk}\n`);
        },
    });

    stdin.pipe(reverse).pipe(stdout);
};

transform();