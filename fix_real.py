import sys

with open('app/catalog/data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

b_array = bytearray()
for c in text:
    if c == '\ufeff':
        continue
    try:
        b_array.extend(c.encode('cp1251'))
    except UnicodeEncodeError:
        if ord(c) < 256:
            b_array.append(ord(c))
        else:
            b_array.append(ord('?'))

try:
    fixed_text = b_array.decode('utf-8')
    with open('app/catalog/data.ts', 'w', encoding='utf-8') as f:
        f.write(fixed_text)
    print('Success!')
except Exception as e:
    print('Decode error:', e)
