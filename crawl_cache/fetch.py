import json, subprocess, os, re, html, sys
rows = json.load(open('crawl_cache/rows.json'))
start = int(sys.argv[1]) if len(sys.argv)>1 else 0
end = int(sys.argv[2]) if len(sys.argv)>2 else len(rows)
os.makedirs('crawl_cache/text', exist_ok=True)
for i in range(start, min(end,len(rows))):
    r = rows[i]
    fn = f'crawl_cache/text/{i}.txt'
    if os.path.exists(fn) and os.path.getsize(fn)>50:
        continue
    url = r['link']
    try:
        out = subprocess.run(['curl','-s','-m','20','-A','Mozilla/5.0 (Windows NT 10.0; Win64; x64)','-L','--max-redirs','5',url], capture_output=True, text=True, timeout=30)
        t = out.stdout
        t = re.sub(r'<script[^>]*>.*?</script>', ' ', t, flags=re.S|re.I)
        t = re.sub(r'<style[^>]*>.*?</style>', ' ', t, flags=re.S|re.I)
        t = re.sub(r'<[^>]+>', ' ', t)
        t = html.unescape(t)
        t = re.sub(r'\s+', ' ', t)
        open(fn,'w').write(t[:120000])
    except Exception as e:
        open(fn,'w').write(f'ERROR {e}')
print('done', start, end)
