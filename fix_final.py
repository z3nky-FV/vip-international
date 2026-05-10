import sys

with open('app/catalog/data.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# We need to map each character to a byte.
# Most characters are in CP1251.
# Some characters (like U+0098) might not be encodable.
# If they are not encodable, they are likely the literal byte value from Windows-1252 or similar mappings.

b_array = bytearray()
for c in text:
    try:
        b_array.extend(c.encode('cp1251'))
    except UnicodeEncodeError:
        # If it fails, it's a character that CP1251 doesn't have.
        # But wait, it might be U+0098 which should map to byte 0x98.
        if ord(c) < 256:
            b_array.append(ord(c))
        else:
            # It's some other Unicode character that the user actually meant to be there (like an emoji, or a real Cyrillic char that wasn't double-encoded).
            # Wait, if the user pasted normal Cyrillic mixed with double-encoded Cyrillic...
            # Then we can't just encode everything to cp1251.
            # But wait, if it's already correct UTF-8 Cyrillic, encode('cp1251') WILL SUCCEED!
            # Because real Cyrillic chars ARE in CP1251!
            # BUT if it's real Cyrillic, encode('cp1251') gives their CP1251 byte, and then we decode as UTF-8, which will scramble the REAL Cyrillic!
            # Ah! If the file is MIXED (some double-encoded, some real), we have a problem.
            pass

# Let's see if the WHOLE file is double-encoded or just parts.
# Let's just do a string replacement for the double-encoded parts instead?
# Or just fix the whole file assuming it's all double encoded?
