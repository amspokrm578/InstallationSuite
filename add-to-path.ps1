# Script to permanently add Git and Node.js to system PATH
# Run this script as Administrator

$gitPath = "C:\Program Files\Git\cmd"
$nodePath = "C:\Program Files\nodejs"

# Get current system PATH
$currentPath = [Environment]::GetEnvironmentVariable("Path", "Machine")

# Check if paths are already in PATH
if ($currentPath -notlike "*$gitPath*") {
    Write-Host "Adding Git to PATH..." -ForegroundColor Green
    [Environment]::SetEnvironmentVariable("Path", "$currentPath;$gitPath", "Machine")
} else {
    Write-Host "Git is already in PATH" -ForegroundColor Yellow
}

if ($currentPath -notlike "*$nodePath*") {
    Write-Host "Adding Node.js to PATH..." -ForegroundColor Green
    $updatedPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
    [Environment]::SetEnvironmentVariable("Path", "$updatedPath;$nodePath", "Machine")
} else {
    Write-Host "Node.js is already in PATH" -ForegroundColor Yellow
}

Write-Host "`nPATH updated successfully!" -ForegroundColor Green
Write-Host "Please restart your terminal/PowerShell for changes to take effect." -ForegroundColor Cyan

