$files = Get-ChildItem -Path "c:\Users\Muhammad Aliyan\Desktop\localhost.pixellyo.com\localhost.pixellyo.com" -Filter *.html
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Define targets for both CR+LF and LF newlines
    $targetCRLF = '<h6 class="mb-3 text-light fs-18 mt-auto">Follow Us</h6>' + [char]13 + [char]10 + '<ul class="list list-row flex-wrap gap-4 align-items-center">' + [char]13 + [char]10 + '<li>' + [char]13 + [char]10 + '<a class="link d-inline-block" href="#">' + [char]13 + [char]10 + '<iconify-icon class="text-light fs-20" icon="skill-icons:instagram"></iconify-icon>' + [char]13 + [char]10 + '</a>' + [char]13 + [char]10 + '</li>' + [char]13 + [char]10 + '<li>' + [char]13 + [char]10 + '<a class="link d-inline-block" href="#">' + [char]13 + [char]10 + '<iconify-icon class="text-light fs-20" icon="logos:youtube-icon"></iconify-icon>' + [char]13 + [char]10 + '</a>' + [char]13 + [char]10 + '</li>' + [char]13 + [char]10 + '<li>' + [char]13 + [char]10 + '<a class="link d-inline-block" href="#">' + [char]13 + [char]10 + '<iconify-icon class="text-light fs-20" icon="logos:facebook"></iconify-icon>' + [char]13 + [char]10 + '</a>' + [char]13 + [char]10 + '</li>' + [char]13 + [char]10 + '</ul>'
    
    $targetLF = '<h6 class="mb-3 text-light fs-18 mt-auto">Follow Us</h6>' + [char]10 + '<ul class="list list-row flex-wrap gap-4 align-items-center">' + [char]10 + '<li>' + [char]10 + '<a class="link d-inline-block" href="#">' + [char]10 + '<iconify-icon class="text-light fs-20" icon="skill-icons:instagram"></iconify-icon>' + [char]10 + '</a>' + [char]10 + '</li>' + [char]10 + '<li>' + [char]10 + '<a class="link d-inline-block" href="#">' + [char]10 + '<iconify-icon class="text-light fs-20" icon="logos:youtube-icon"></iconify-icon>' + [char]10 + '</a>' + [char]10 + '</li>' + [char]10 + '<li>' + [char]10 + '<a class="link d-inline-block" href="#">' + [char]10 + '<iconify-icon class="text-light fs-20" icon="logos:facebook"></iconify-icon>' + [char]10 + '</a>' + [char]10 + '</li>' + [char]10 + '</ul>'
    
    if ($content.Contains($targetCRLF)) {
        $content = $content.Replace($targetCRLF, "")
    } elseif ($content.Contains($targetLF)) {
        $content = $content.Replace($targetLF, "")
    } else {
        # Abstract regex fallback just in case some formatting or classes vary slightly in some files
        $regex = '(?s)<h6[^>]*>Follow\s+Us</h6>\s*<ul class=\"list list-row flex-wrap gap-4 align-items-center\">\s*<li>\s*<a[^>]*>\s*<iconify-icon[^>]*icon=\"skill-icons:instagram\"></iconify-icon>\s*</a>\s*</li>\s*<li>\s*<a[^>]*>\s*<iconify-icon[^>]*icon=\"logos:youtube-icon\"></iconify-icon>\s*</a>\s*</li>\s*<li>\s*<a[^>]*>\s*<iconify-icon[^>]*icon=\"logos:facebook\"></iconify-icon>\s*</a>\s*</li>\s*</ul>'
        $content = [regex]::Replace($content, $regex, "")
    }
    
    Set-Content -Path $file.FullName -Value $content
}
Write-Output "Successfully removed Follow Us and social icons from footer of all HTML files."
