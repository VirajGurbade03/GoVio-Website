@echo off
if not exist "public\Govio app" mkdir "public\Govio app"
copy "Govio app\GoVio.apk" "public\Govio app\GoVio.apk" /Y
if %ERRORLEVEL% EQU 0 (echo COPY SUCCESS) else (echo COPY FAILED)
dir "public\Govio app\GoVio.apk"
