$ErrorActionPreference = 'Stop'

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlPath = Join-Path $scriptDir 'customization-guide.html'
$pdfPath = Join-Path $scriptDir 'customization-guide.pdf'

if (-not (Test-Path $htmlPath)) {
    throw "HTML file not found: $htmlPath"
}

$browser = $null
foreach ($candidate in @('msedge', 'chrome', 'chromium', 'chromium-browser', 'google-chrome')) {
    $command = Get-Command $candidate -ErrorAction SilentlyContinue
    if ($command) {
        $browser = $command.Source
        break
    }
}

if (-not $browser) {
    throw 'No Chrome or Edge browser executable was found on this machine.'
}

Write-Host "Using browser: $browser"

$resolvedHtml = (Resolve-Path $htmlPath).Path
$resolvedPdf = (Resolve-Path $scriptDir).Path + '\customization-guide.pdf'

& $browser --headless --disable-gpu --print-to-pdf="$resolvedPdf" "$resolvedHtml" | Out-Null

if (Test-Path $resolvedPdf) {
    Write-Host "PDF created successfully: $resolvedPdf"
} else {
    throw 'PDF generation did not produce an output file.'
}
