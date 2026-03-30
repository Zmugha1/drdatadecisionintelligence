<#
.SYNOPSIS
  Clone or update the STZ_Training repo and open the folder for work.

.DESCRIPTION
  Use this after the repo exists at https://github.com/Zmugha1/STZ_Training
  GitHub Codespaces: open the repo in the browser, click Code -> Codespaces -> Create codespace on main
  (uses .devcontainer in the repo).

.PARAMETER ParentPath
  Directory that will contain the project folder (default: Documents).

.PARAMETER FolderName
  Local folder name (default: STZ_Training).

.PARAMETER OpenEditor
  If set, opens the folder in Cursor (cursor) or VS Code (code) when available.
#>
param(
  [string] $ParentPath = (Join-Path $env:USERPROFILE "Documents"),
  [string] $FolderName = "STZ_Training",
  [ValidateSet("None", "Cursor", "VSCode")]
  [string] $OpenEditor = "None"
)

$ErrorActionPreference = "Stop"
$repoUrl = "https://github.com/Zmugha1/STZ_Training.git"
$dest = Join-Path $ParentPath $FolderName

if (-not (Test-Path $ParentPath)) {
  New-Item -ItemType Directory -Path $ParentPath -Force | Out-Null
}

$gitDir = Join-Path $dest ".git"
if (-not (Test-Path $gitDir)) {
  Write-Host "Cloning $repoUrl -> $dest"
  git clone $repoUrl $dest
} else {
  Write-Host "Updating existing repo at $dest"
  Push-Location $dest
  try {
    git fetch origin
    git pull origin (git rev-parse --abbrev-ref HEAD)
  } finally {
    Pop-Location
  }
}

Set-Location $dest
Write-Host "Working directory: $dest"

switch ($OpenEditor) {
  "Cursor" {
    if (Get-Command cursor -ErrorAction SilentlyContinue) { cursor $dest }
    else { Write-Warning "cursor CLI not on PATH; open $dest manually." }
  }
  "VSCode" {
    if (Get-Command code -ErrorAction SilentlyContinue) { code $dest }
    else { Write-Warning "code CLI not on PATH; open $dest manually." }
  }
}
