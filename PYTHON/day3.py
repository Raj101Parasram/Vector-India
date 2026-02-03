# answer 1

s="python"
for i in range(0,len(s)):
    print(i,s[i])

#  answer 2

# s=list("banana")
# d={}
# for ch in s:
# i dont know how to solve this pls explain chat gtp
# print(d)

# answer 3

s="sky"
v="aeiou"
for i in s:
    if i in v:
        print("vowels")
        break
else:
    print("only consonants")

#  answer 4

# s=input()
# for i in range(0,len(s)):
#     if s[i].isalpha():
#         print("consonants")
#         continue
#     elif s[i].isdigit():
#         print("digite")
#     else:
#         print("special character")
#         break

#  answer 5

s="HeLlO"
for i in s:
    if i.isupper():
        print(f"{i}, is uppercase")
    else:
        print(f"{i}, is lowercase")

# answer 6
s=list("hello")
l=[]
i=len(s)-1
while i>=0:
    l.append(s[i])
    i=i-1
print("".join(l))

#  answer 7

# s=list("education")
# v="aeiou"
# for i in s:
#     if i in v:
#         s.pop(i)
# print(s)

#  answer 8

s=tuple("code")
for i in range(0,len(s),1):
    print(i, s[i])

#  answer 9

# s="banana"
# d={}
# for i in s:
#     if i=="aeiou":
#         d[i]=d.get(i,0)+1
# print(d)

#  answer 10

s=list("python is easy")
key=[]
d={}
for i in s:
    if i==0:
        key.append(s[i]*6)
    elif i==1:
        key.append(s[i]*2)
    else:
        key.append(i*4)
print(key)
for i in key:
    d[i]=d.get(i,0)+1
print(d)