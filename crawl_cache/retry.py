import json, subprocess, os, re, html
rows = json.load(open('crawl_cache/rows.json'))
bad = [int(x) for x in open('crawl_cache/bad.txt').read().split()]
fixed=0
for i in bad:
    fn=f'crawl_cache/text/{i}.txt'
    url=rows[i]['link']
    try:
        out=subprocess.run(['curl','-s','-m','40','-A','Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36','-L','--max-redirs','10','-H','Accept: text/html,application/xhtml+xml','--compressed',url],capture_output=True,text=True,timeout=45)
        t=out.stdout
        t=re.sub(r'<script[^>]*>.*?</script>',' ',t,flags=re.S|re.I)
        t=re.sub(r'<style[^>]*>.*?</style>',' ',t,flags=re.S|re.I)
        t=re.sub(r'<[^>]+>',' ',t)
        t=html.unescape(t)
        t=re.sub(r'\s+',' ',t)
        open(fn,'w').write(t[:120000])
        if len(t)>50 and not t.startswith('ERROR'):
            fixed+=1
    except Exception as e:
        open(fn,'w').write(f'ERROR {e}')
print('fixed',fixed,'of',len(bad))
