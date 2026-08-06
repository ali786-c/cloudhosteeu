$files = Get-ChildItem -Path "c:\Users\Muhammad Aliyan\Desktop\localhost.pixellyo.com\localhost.pixellyo.com" -Filter *.html
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Regex to match website-builder.html link and its li tags
    $regexBuilder = '(?s)<li>\s*<a[^>]*href="website-builder.html"[^>]*>\s*Website\s+Builder\s*</a>\s*</li>'
    
    # Regex to match ssl-certificate.html link and its li tags
    $regexSSL = '(?s)<li>\s*<a[^>]*href="ssl-certificate.html"[^>]*>\s*SSL\s+Certificates\s*</a>\s*</li>'
    
    if ($content -match $regexBuilder) {
        $content = [regex]::Replace($content, $regexBuilder, "")
    }
    if ($content -match $regexSSL) {
        $content = [regex]::Replace($content, $regexSSL, "")
    }
    
    Set-Content -Path $file.FullName -Value $content
}
Write-Output "Successfully removed Website Builder and SSL Certificates links from footer of all HTML files."
