@echo off
cd /d "d:\Project\TecBus Data\GoVio Company Website\public"
if exist "Govio app" (
    ren "Govio app" "app"
    echo Rename successful
) else (
    echo "Govio app" folder not found or already renamed
)
if exist "test.txt" del "test.txt"
dir
