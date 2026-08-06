import glob
from bs4 import BeautifulSoup

html_files = glob.glob("**/*.html", recursive=True)
missing_alts = []

for filepath in html_files:
    if ".agents" in filepath or "scratch" in filepath:
        continue
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    soup = BeautifulSoup(content, "html.parser")
    
    imgs = soup.find_all("img")
    for img in imgs:
        if not img.has_attr("alt") or img["alt"].strip() == "":
            src = img.get("src", "unknown")
            missing_alts.append(f"{filepath} -> img src='{src}'")

print(f"Total missing alt attributes: {len(missing_alts)}")
for item in missing_alts[:20]:
    print(f"  - {item}")
