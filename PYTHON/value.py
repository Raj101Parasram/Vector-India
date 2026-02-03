s=input()
d={}
for ch in s:
    d[ch]=d.get(ch,0)+1
print(d)
print(sorted(d))
print(sorted(d.items(), reverse=True, key=lambda x:x[1])[0])