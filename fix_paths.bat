@echo off
cd /d "d:\Project\TecBus Data\GoVio Company Website\public"
if exist "Govio app" (
    echo "Govio app" folder verified
) else (
    echo "Govio app" folder not found - please check public directory
)
if exist "test.txt" del "test.txt"
dir
