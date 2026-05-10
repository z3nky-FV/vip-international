with open('app/catalog/data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

bad_chars = set()
for c in text:
    try:
        c.encode('cp1251')
    except UnicodeEncodeError:
        bad_chars.add(c)

for c in bad_chars:
    print(repr(c), hex(ord(c)))
