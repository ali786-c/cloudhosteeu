$files = Get-ChildItem -Path "c:\Users\Muhammad Aliyan\Desktop\localhost.pixellyo.com\localhost.pixellyo.com" -Filter *.html
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Try different combinations of formatting (CRLF, LF, spacing)
    # The standard format:
    # <li>\n<a class="link d-inline-block text-light text-opacity-80 hover:text-opacity-100 fs-14" href="email-service.html">\n\t\t\t\t\t\t\t\t\t\tEmail Services\n\t\t\t\t\t\t\t\t\t</a>\n</li>
    
    # Let's use a very robust regex that matches this list item regardless of white spaces, newlines, tabs, and casing.
    $regex = '(?s)<li>\s*<a[^>]*href="email-service.html"[^>]*>\s*Email\s+Services\s*</a>\s*</li>'
    
    if ($content -match $regex) {
        $content = [regex]::Replace($content, $regex, "")
    }
    
    Set-Content -Path $file.FullName -Value $content
}
Write-Output "Successfully removed Email Services link from footer of all HTML files."
