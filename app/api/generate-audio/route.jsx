import { textToSpeech } from '@google-cloud/text-to-speech';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

const client = new textToSpeech.TextToSpeechClient({
    apiKey: process.env.GOOGLE_API_KEY
});
export async function POST(req) {

    const { text, id } = await req.json();

    const request = {
        input: { text: text },
        voice: { languageCode: 'en-US', name: 'FEMALE' },
        audioConfig: { audioEncoding: 'MP3' },
    };

    // Performs the text-to-speech request
    const [response] = await client.synthesizeSpeech(request);
    // Write the binary audio content to a local file
    const writeFile = util.promisify(fs.writeFile);
    await writeFile('output.mp3', response.audioContent, 'binary');
    console.log('Audio content written to file: output.mp3');

    return NextResponse.json({ Result: Success });
}