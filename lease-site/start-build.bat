@echo off
cd /d "%~dp0"
echo Gerando build de producao...
npm run build
echo.
echo Build finalizado. Os arquivos de producao estao prontos.



