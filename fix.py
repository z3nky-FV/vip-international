import sys

with open('app/catalog/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

b_list = bytearray()
for i, c in enumerate(content):
    try:
        b_list.extend(c.encode('cp1251'))
    except UnicodeEncodeError:
        if ord(c) < 256:
            b_list.append(ord(c))
        else:
            # We lost this byte. Let's just append a ?
            b_list.append(ord('?'))

fixed_content = b_list.decode('utf-8', errors='replace')

with open('app/catalog/data_fixed.ts', 'w', encoding='utf-8') as f:
    f.write(fixed_content)

print("Done. Sample:", fixed_content[100:300])
