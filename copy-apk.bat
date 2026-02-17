@echo off
copy "Govio app\app-release.apk" "public\app-release.apk" /Y
if %ERRORLEVEL% EQU 0 (echo COPY SUCCESS) else (echo COPY FAILED)
dir "public\app-release.apk"
