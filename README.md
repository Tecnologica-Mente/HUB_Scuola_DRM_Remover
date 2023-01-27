# HUB_Scuola_DRM_Remover
DRM Protection Removal and Downloader for Hub Scuola Platform

ITALIAN

1) Scaricare l'archivio ed estrarlo in una posizione a piacere
2) Scaricare la versione binaria (.zip) di Node.js LTS a 32-bit o 64-bit (a seconda del sistema operativo installato) dal sito:
https://nodejs.org/en/download/
Se non si sa quale versione installare, scegliere quella a 32-bit.
Estrarre l'archivio appena scaricato e spostare tutti i file nella stessa cartella dove si è estratto l'archivio del punto 1) (vedi immagine allegata "files_position_image.png" - tutti i file devono stare nella stessa cartella).
3) Fare doppio clic sul file "Hub_Scuola_DRM_Remover_AIO.cmd" e premere il tasto 1 sulla tastiera per avviare l'installazione/aggiornamento del programma. Attendere il completamento dell'operazione.
4) Collegarsi al sito:
https://www.hubscuola.it/
ed eseguire l'accesso con le proprie credenziali.
5) Nella schermata "Libri", dove vengono visualizzati i propri libri, cliccare su "Esplora" in corrispondenza del libro che si vuole scaricare e, successivamente, sul link che permette di aprire il libro in digitale. Premere sulla tastiera il tasto F12 per visualizzare la DevTools.
a) Se si sta utilizzando Google Chrome, spostarsi nella scheda "Network" e premere F5 per aggiornare la pagina. Tra i numerosi file elencati, cercare quello che ha lo stesso nome del numero indicato nell'URL https://young.hubscuola.it/viewer/########?page=1 sulla barra degli indirizzi del browser (quello che c'è al posto dei caratteri indicati con ########) [vedi immagine allegata "DevTools_Network_Tab.png"]. Se sono presenti più file con lo stesso nome, cercare quello che contiene la "token-session" (scorrere verso il basso nel nuovo menu che si apre).
b) Se si sta utilizzando Firefox, spostarsi nella scheda "Rete" e ripetere gli stessi passi del punto a).
c) Se si sta utilizzando Microsoft Edge, spostarsi nella scheda "Rete" e ripetere gli stessi passi del punto a).
6) Andare sul menù di Hub Scuola DRM Remover e premere il tasto 2 sulla tastiera. Quando richiesto inserire come Volume ID il numero presente nell'URL https://young.hubscuola.it/viewer/########?page=1 (viene indicato al posto dei caratteri con ########) e come token il valore riportato nel campo "token-session". Nella cartella books_id verrà automaticamente creato un file di testo contenente queste informazioni che saranno utilizzate per il download successivo del file PDF del libro.
7) Per memorizzare le informazioni di altri libri da scaricare, ripetere i passi a partire dal punto 5).
8) Chiudere il DevTools ed eseguire il Logout dalla piattaforma Hub Scuola.
9) Andare sul menù di Hub Scuola DRM Remover e premere il tasto 3 sulla tastiera. Il programma chiederà quale libro si vuole scaricare. Digitare l'ID del libro che si vuole scaricare tra quelli elencati e attendere il completamento dell'operazione. Il PDF sbloccato del libro verrà scaricato nella stessa cartella dove si trova il file "download.js" con il nome del libro selezionato.
10) Per scaricare gli altri libri sarà sufficiente ripetere i passi a partire dal punto 9). Nel caso in cui compaia il messaggio di errore "Token Session not valid, you may have copied it wrong or you don't own this book" che non permetterà il download del PDF del libro, sarà sufficiente ripetere i passi a partire dal punto 4).

Divertitevi ;-)

p.s. Ricorda che sei responsabile di ciò che stai facendo su Internet e anche se questo script esiste, potrebbe non essere legale nel tuo paese creare backup personali dei libri.

L'UTILIZZO DEL SOFTWARE È A PROPRIO ESCLUSIVO RISCHIO E PERICOLO. IL SOFTWARE È FORNITO DAI DETENTORI DEL COPYRIGHT E DAI COLLABORATORI "COSÌ COM'È" E NON SI RICONOSCE ALCUNA ALTRA GARANZIA ESPRESSA O IMPLICITA, INCLUSE, A TITOLO ESEMPLIFICATIVO, GARANZIE IMPLICITE DI COMMERCIABILITÀ E IDONEITÀ PER UN FINE PARTICOLARE. IN NESSUN CASO IL PROPRIETARIO DEL COPYRIGHT O I RELATIVI COLLABORATORI POTRANNO ESSERE RITENUTI RESPONSABILI PER DANNI DIRETTI, INDIRETTI, INCIDENTALI, SPECIALI, PUNITIVI, O CONSEQUENZIALI (INCLUSI, A TITOLO ESEMPLIFICATIVO, DANNI DERIVANTI DALLA NECESSITÀ DI SOSTITUIRE BENI E SERVIZI, DANNI PER MANCATO UTILIZZO, PERDITA DI DATI O MANCATO GUADAGNO, INTERRUZIONE DELL'ATTIVITÀ), IMPUTABILI A QUALUNQUE CAUSA E INDIPENDENTEMENTE DALLA TEORIA DELLA RESPONSABILITÀ, SIA NELLE CONDIZIONI PREVISTE DAL CONTRATTO CHE IN CASO DI "STRICT LIABILITY", ERRORI (INCLUSI NEGLIGENZA O ALTRO), ILLECITO O ALTRO, DERIVANTI O COMUNQUE CORRELATI ALL'UTILIZZO DEL SOFTWARE, ANCHE QUALORA SIANO STATI INFORMATI DELLA POSSIBILITÀ DEL VERIFICARSI DI TALI DANNI.

Licenza MIT (Massachusetts Institute of Technology)

------------------------------------------------------------------------------------
ENGLISH

1) Download the archive and extract it to a location of your choice
2) Download the binary version (.zip) of Node.js LTS 32-bit or 64-bit (depending on the installed operating system) from the site:
https://nodejs.org/en/download/
If you don't know which version to install, choose the 32-bit version.
Extract the archive just downloaded and move all the files to the same folder where the archive of point 1) was extracted (see attached image "files_position_image.png" - all files must be in the same folder).
3) Double click on the "Hub_Scuola_DRM_Remover_AIO.cmd" file and press the 1 key on your keyboard to start installing/updating the program. Wait for the operation to complete.
4) Connect to the site:
https://www.hubscuola.it/
and log in with your credentials.
5) In the "Books" screen, where your books are displayed, click on "Explore" next to the book you want to download and then click on the link that allows you to open the digital book. Press the F12 key on the keyboard to display the DevTools.
a) If you are using Google Chrome, navigate to the "Network" tab and press F5 to refresh the page. Among the numerous files listed, look for the one that has the same name as the number indicated in the URL https://young.hubscuola.it/viewer/########?page=1 on the address bar of the browser (what is there in place of the characters indicated with ########) [see attached image "DevTools_Network_Tab.png"]. If there are multiple files with the same name, look for the one that contains the "token-session" (scroll down to the new menu that opens).
b) If you are using Firefox, go to the "Network" tab and repeat the same steps in point a).
c) If you are using Microsoft Edge, move to the "Network" tab and repeat the same steps in point a).
6) Go to the Hub Scuola DRM Remover menu and press the 2 key on the keyboard. When prompted, enter the number present in the URL https://young.hubscuola.it/viewer/########?page=1 as the Volume ID (it is indicated instead of the characters with ########) and as token the value reported in the "token-session" field. A text file will automatically be created in the books_id folder containing this information which will be used for the subsequent download of the PDF file of the book.
7) To store the information of other books to download, repeat the steps from step 5).
8) Close the DevTools and logout from the Hub Scuola platform.
9) Go to the Hub Scuola DRM Remover menu and press the 3 key on the keyboard. The program will ask which book you want to download. Type the ID of the book you want to download from those listed and wait for the operation to complete. The unlocked PDF of the book will be downloaded to the same folder where the "download.js" file with the selected book name is located.
10) To download the other books, simply repeat the steps starting from point 9). In the event that the error message "Token Session not valid, you may have copied it wrong or you don't own this book" appears, which will not allow you to download the PDF of the book, simply repeat the steps starting from point 4).

Enjoy ;-)

p.s. Remember that you are sesponsible for what you are doing on the internet and even tho this script exists it might not be legal in your country to create personal backups of books.

USE OF THE SOFTWARE IS AT YOUR OWN RISK. THE SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND COLLABORATORS "AS IS" AND THERE IS NO EXPRESS OR IMPLIED WARRANTY, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR. IN NO EVENT SHALL THE OWNER OF THE COPYRIGHT OR ITS COLLABORATORS BE HELD LIABLE FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, DAMAGES, DAMAGES ARISING FROM THE LOSS OF DATA OR FAILURE TO EARN, INTERRUPTION OF BUSINESS), CAUSED BY ANY CAUSE AND REGARDLESS OF THE THEORY OF LIABILITY, BOTH IN THE CONDITIONS PROVIDED BY THE CONTRACT AND IN CASE OF "STRICT LIABILITY", ERRORS (INCLUDING NEGLIGENCE OR OTHERWISE), ARISING OR OTHERWISE RELATED TO YOUR USE OF THE SOFTWARE, EVEN IF YOU HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGES.

MIT (Massachusetts Institute of Technology) licence
