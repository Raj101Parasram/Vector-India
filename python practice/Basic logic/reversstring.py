s="Hello World kasakaye"
rev=""
for i in s:
    rev=i+rev
print(rev)

# count how many vovels are there

c=0
for i in s:
    if i=="a" or i=="e" or i=="i" or i=="o" or i=="u":
        c=c+1
print ("total vovels are :", c)

# another way


count = sum(1 for ch in s.lower() if ch in "aeiou")
print("Vowel count:", count)