first = input().split()
second = input().split()
n = 0

while first and second:
    n += 1
    a, b = first.pop(0), second.pop(0)

    if a > b and (b, a) != ('0', '9') or (a, b) == ('0', '9'):
         first += [a, b]
    else:
         second += [a, b]
    print('first', first)
    print('second', second)
    if n == 1000000:
         print('botva')
         break
else:
    print('first' if first else 'second', n)