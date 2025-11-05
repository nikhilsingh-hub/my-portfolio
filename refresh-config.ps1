# Quick script to refresh configuration changes
Write-Host "🔄 Refreshing portfolio configuration..." -ForegroundColor Yellow

# Touch a React component to trigger hot reload
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
Add-Content -Path "src/utils/configLoader.js" -Value "// Config refreshed at $timestamp"

# Remove the comment line immediately
$content = Get-Content "src/utils/configLoader.js" | Where-Object { $_ -notmatch "// Config refreshed at" }
$content | Set-Content "src/utils/configLoader.js"

Write-Host "✅ Configuration refreshed! Check your browser." -ForegroundColor Green
