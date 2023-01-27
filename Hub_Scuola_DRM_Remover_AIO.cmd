@setlocal DisableDelayedExpansion
@echo off


::===========================================================================================================
::
::   This script is a DRM Protection Removal and Downloader for Hub Scuola Platform.
::   (It can be used to download books in PDF format from Hub Scuola, Hub Young and Hub Kids)
::
::   Homepage: https://github.com/Tecnologica-Mente
::      Email: <not available>
::
::   ********************************************************************************************************
::
::   Born from an idea of ​​Enrico. Thanks to Fulvio for providing me the access credentials to Hub Scuola
::
::===========================================================================================================




::========================================================================================================================================
:MainMenu

cls
color 07
title  Hub Scuola DRM Remover AIO v1.0.0
mode 100, 30
set "hsdrmrtemp=%SystemRoot%\Temp\__HSDRMR"
if exist "%hsdrmrtemp%\.*" rmdir /s /q "%hsdrmrtemp%\" %nul%

echo:
echo:
echo:             Welcome to Hub Scuola DRM Remover AIO v1.0.0
echo:
echo:       ____________________________________________________________________________________
echo:
echo:             Please select:
echo:
echo:             [1] To install/upgrade all the required dependencies
echo:             [2] To create/set/update your Hub Scuola Cookie files with
echo:                 all information to download your PDF eBook later
echo:             [3] To remove the DRM protection and download your PDF eBooks
echo:             ________________________________________________________________________
echo:                                                                     
echo:             [4] Read Me
echo:             [5] Exit
echo:       ____________________________________________________________________________________
echo:
echo:             Enter a menu option in the Keyboard [1,2,3,4,5]:
echo:
choice /C:12345 /N
set _erl=%errorlevel%

if %_erl%==5 exit /b
if %_erl%==4 start https://github.com/Tecnologica-Mente/Hub_Scuola_DRM_Remover & goto :MainMenu
if %_erl%==3 setlocal & call :DownloadPDF       & cls & endlocal & goto :MainMenu
if %_erl%==2 setlocal & call :SaveCookieFile    & cls & endlocal & goto :MainMenu
if %_erl%==1 setlocal & call :IUDependencies    & cls & endlocal & goto :MainMenu
goto :MainMenu

::========================================================================================================================================
:IUDependencies
@setlocal DisableDelayedExpansion
@echo off

set mypath=%cd%
::@echo %mypath%

if not exist "package.json" (
   echo Cannot find the package.json file. Operation aborted
   goto :End
)
if not exist "%mypath%\node_modules\npm\bin\npm-cli.js" (
   echo All the required dependencies has been already installed/updated
) else (
if exist "npm.cmd" (
   call npm.cmd i
   echo All the required dependencies has been installed/updated
) else (
   echo Cannot find the npm.cmd file. Make sure Node.js has been installed correctly
)
)
:End
echo:
echo Press any key to continue...
pause >nul
popd
exit /b

::========================================================================================================================================
:SaveCookieFile
@setlocal DisableDelayedExpansion
@echo off

:: Adapted from: https://stackoverflow.com/questions/4165387/create-folder-with-batch-but-only-if-it-doesnt-already-exist
:: and from: https://stackoverflow.com/questions/21033801/checking-if-a-folder-exists-using-a-bat-file
rem set myDIR=books_id
rem if not exist %myDIR% (mkdir %myDIR%)
if exist "node.exe" if exist "add_update_book_id.js" call node add_update_book_id.js
if not exist "node.exe" echo Cannot find the node.exe file. Operation aborted
if not exist "add_update_book_id.js" echo Cannot find the add_update_book_id.js file. Operation aborted
echo:
echo Press any key to continue...
pause >nul
popd
exit /b

::========================================================================================================================================
:DownloadPDF
@setlocal DisableDelayedExpansion
@echo off

:: Adapted from: https://stackhowto.com/batch-file-to-check-if-multiple-files-exist/
set mypath=%cd%
::@echo %mypath%
if exist "node.exe" if exist "download.js" call node download.js
if not exist "node.exe" echo Cannot find the node.exe file. Operation aborted
if not exist "download.js" echo Cannot find the download.js file. Operation aborted
echo:
echo Press any key to continue...
pause >nul
popd
exit /b

::========================================================================================================================================
