import sys

with open('app/catalog/data.ts', 'r', encoding='utf-8') as f:
    content = f.read(500)

b_list = bytearray()
for i, c in enumerate(content):
    try:
        b_list.extend(c.encode('cp1251'))
    except UnicodeEncodeError:
        if ord(c) < 256:
            b_list.append(ord(c))
        else:
            b_list.append(ord('?'))

print('Bytes:', list(b_list[100:150]))
