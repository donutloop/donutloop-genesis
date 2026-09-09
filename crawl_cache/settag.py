import sys, re, json
idx = int(sys.argv[1]); tag = sys.argv[2]
rows = json.load(open('crawl_cache/rows.json'))
target = rows[idx]['link']
lines = open('reference_coverage.md').read().split('\n')
for n, line in enumerate(lines):
    if line.startswith('|') and '](http' in line and '| :---' not in line and target in line:
        # split cells
        parts = line.strip().strip('|').split('|')
        parts = [p.strip() for p in parts]
        # ensure 8 cols
        while len(parts) < 8: parts.append('')
        parts[7] = tag
        newline = '| ' + ' | '.join(parts) + ' |'
        lines[n] = newline
        open('reference_coverage.md','w').write('\n'.join(lines))
        print('updated row', idx)
        sys.exit(0)
print('ROW NOT FOUND', idx)
sys.exit(1)
