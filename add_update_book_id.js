import yargs from 'yargs';
import fetch from "node-fetch";
import { writeFileSync } from "fs";
import PromptSync from 'prompt-sync';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const prompt = PromptSync({ sigint: true });

const argv = yargs(process.argv)
  .option('volumeId', {
    alias: 'v',
    description: 'Volume ID of the book to download',
    type: 'string',
  })
  .option('token', {
    alias: 't',
    description: 'Token of the user',
    type: 'string',
  })
  .option('file', {
    alias: 'f',
    description: 'The output file (defaults to book name)',
    type: 'string',
  })
  .help()
  .alias('help', 'h').argv;

(async () => {

    let volumeId = argv.volumeId;
    let token = argv.token;

    while (!volumeId)
        volumeId = prompt("Input the volume ID: ");
    while (!token)
        token = prompt("Input the token: ");

    console.log("Obtaining volume info...");

    let response = await fetch("https://ms-api.hubscuola.it/meyoung/publication/" + volumeId, { method: "GET", headers: { "Token-Session": token, "Content-Type": "application/json" } });
    const code = response.status;
    if (code === 500) {
        console.log("Volume ID not valid.");
    } else if (code === 401) {
        console.log("Token Session not valid, you may have copied it wrong or you don't own this book.");
    } else {
        let result = await response.json();
        const title = result.title;

        // Adapted from: https://www.thecrazyprogrammer.com/2019/12/javascript-read-and-write-to-text-file.html
        // and from: https://www.itsolutionstuff.com/post/how-to-create-directory-if-does-not-exists-in-node-jsexample.html
        // import fs module in which writeFile function is defined.
        const fsLibrary  = require('fs');
        let folder = './books_id';

        if (!fsLibrary.existsSync(folder)){
            fsLibrary.mkdirSync(folder);
            //console.log('Folder created successfully.');
        }

        let overwriteFile = "";
        if (fsLibrary.existsSync(folder + '/' + volumeId + '.txt')) {
            do {
                overwriteFile = prompt("File " + volumeId + ".txt already exists in folder " + folder.substring(2) + ". Overwrite/Update it? (Y/N): ");
            } while ((overwriteFile.toUpperCase()!="Y") && (overwriteFile.toUpperCase()!="N"));
        }
  
        if (overwriteFile.toUpperCase() == "Y") {
            fsLibrary.unlinkSync(folder + '/' + volumeId + '.txt');
        } else if (overwriteFile.toUpperCase() == "N") {
           process.exit(0);
        }

        // Data which will need to add in a file.
        let data = volumeId + "\n" + token + "\n" + title;
  
        // Write data in 'volumeId.txt'.
        fsLibrary.writeFile(folder + '/' + volumeId + '.txt', data, (error) => {
      
            // In case of a error throw err exception.
            if (error) {
                console.log(err)
            } else {
                console.log(volumeId + ".txt file created successfully in folder " + folder.substring(2))
            };
        })
    }
})();