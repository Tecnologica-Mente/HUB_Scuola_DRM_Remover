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

// Adapted from: https://blog.hubspot.com/website/call-function-javascript
async function get_pdf(pdf_volumeId, pdf_token) {
    let volumeId = pdf_volumeId;
    let token = pdf_token;
    //let title = title2;   // It will be derived later
    //console.log(volumeId + "  " + token);

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
        console.log(`Downloading "${title}"\nObtaining access token...`);
        let auth = await fetch(`https://ms-pdf.hubscuola.it/i/d/${volumeId}/auth`, { 
            method: "POST", 
            body: JSON.stringify({jwt: result.jwt, origin: `https://young.hubscuola.it/viewer/${volumeId}?page=1`}), 
            headers: { 
                "PSPDFKit-Platform": "web", 
                "PSPDFKit-Version": "protocol=3, client=2020.6.0, client-git=63c8a36705"
            } 
        }).then(res => res.json());
        console.log(`Downloading PDF (may take a couple of seconds)...`);
        let pdf = await fetch(`https://ms-pdf.hubscuola.it/i/d/${volumeId}/h/${auth.layerHandle}/pdf?token=${auth.token}`).then(res => res.arrayBuffer());
        console.log(`Saving PDF...`);
        writeFileSync(argv.file || (title + '.pdf'), Buffer.from(pdf));
        console.log("DONE!");
    }
};

(async () => {

    // Adapted from: https://attacomsian.com/blog/nodejs-check-if-directory-exists
    // Check if the directory books_id exists
    const fs = require('fs')

    // Directory to check if exists
    const dir = './books_id'

    // Check if directory exists
    if (fs.existsSync(dir)) {
        //console.log('Directory exists!')
        // Adapted from: https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
        // and from: https://www.golinuxcloud.com/node-js-get-all-files-in-directory/

        const testFolder = dir + '/';
        const path = require('path');
        const readline = require('readline');

        // Adapted from: https://stackoverflow.com/questions/33775113/count-the-number-of-files-in-a-directory-using-javascript-nodejs
        // Count the number of files in a directory
        const number_of_files = fs.readdirSync(dir).length
        //console.log(number_of_files);

        // Adapted from: https://stackoverflow.com/questions/69866769/count-all-files-with-specific-type-in-folder
        // (other alternative here: https://stackoverflow.com/questions/44199883/how-do-i-get-a-list-of-files-with-specific-file-extension-using-node-js)
        // Count all files with specific type in folder (all the ".txt" files)
        fs.readdir(dir, (err, files) => {
            const number_of_txt_files = files.filter(f => path.extname(f).toLowerCase() === ".txt").length
            //console.log(number_of_txt_files);

            if (number_of_txt_files>0) {
                try {
                    let counter = 0;
                    const volumeIDArray = [];
                    console.log("Book list:");
                    fs.readdirSync(testFolder).forEach(file => {
                        if (path.extname(file) == ".txt")
                        //console.log(file);

                        // Adapted from: https://www.mattepuffo.com/blog/articolo/1783-leggere-file-con-node.js.html
                        // Read the contents of all text files
                        fs.readFile(testFolder + file, 'utf8', function (err, data) {
                            if (err) {
                                console.log(err);
                            } else {
                                //console.log(data);
                                const myArray1 = data.split("\n");
                                let volumeId1 = myArray1[0];
                                let token1 = myArray1[1];
                                let title1 = myArray1[2];
                                console.log(counter + ") " + title1);
                                volumeIDArray[counter] = volumeId1;
                                counter = counter + 1;

                                if (counter == number_of_txt_files) {
                                    let volumeId2 = prompt("Please input Book ID: ");
                                    //console.log(volumeId2 + " " + volumeIDArray[volumeId2]);
                                    if ((volumeId2.trim() < 0) || (volumeId2.trim() >= counter) || (volumeId2.trim() == "") || isNaN(volumeId2)) {
                                        console.log("Invalid Book ID!");
                                    } else {
                                        // Opens the affected text file and extracts all the data needed to download the PDF
                                        fs.readFile(testFolder + volumeIDArray[volumeId2] + '.txt', (err, data) => {
                                            if (err) console.log(err);
                                            //console.log(data.toString());
                                            const myArray2 = data.toString().split("\n");
                                            let volumeId2 = myArray2[0];
                                            let token2 = myArray2[1];
                                            let title2 = myArray2[2];
                                            //console.log(volumeId2 + " " + token2);
                                            get_pdf(volumeId2, token2);
                                        })
                                    }                                    
                                }
                            }
                        });
                    });

                } catch (error) {
                    console.log(error);
                }

            } else {  // (number_of_txt_files == 0)
                console.log('No books in your library!');
            }
        });
    } else {
        console.log('Directory books_id not found.')
    }
})();