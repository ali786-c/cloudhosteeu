$files = Get-ChildItem -Path "c:\Users\Muhammad Aliyan\Desktop\localhost.pixellyo.com\localhost.pixellyo.com" -Filter *.html
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Regex to match the Tools column div completely and delete it
    $regexTools = '(?s)<div class="col">\s*<h6[^>]*>Tools</h6>.*?</div>'
    
    if ($content -match $regexTools) {
        $content = [regex]::Replace($content, $regexTools, "")
    }
    
    Set-Content -Path $file.FullName -Value $content
}
Write-Output "Successfully removed the entire Tools column from the footer of all HTML files."
