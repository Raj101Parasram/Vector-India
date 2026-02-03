# s=input()
# s=s.replace(" ", "")
# s=s.lower()
# if s==s[::-1]:
#     print("palindrome")
# else:
#     print("not palindrome")

# another way

# s=input().replace(" ","").lower()
# print("palindrome" if s==s[::-1] else "not palindrome")

#  another way

# s=input().replace(" ","").lower()
# rev="".join(reversed(s))
# if s==rev:
#     print("yes")
# else:
#     print("no")

# another Question

# s=list(input())
# i=0
# j=len(s)-1
# while i<j:
#     if not s[i].isalnum():
#         i=i+1
#     elif not s[j].isalnum():
#         j=j-1
#     else:
#         s[i],s[j]=s[j],s[i]
#         i=i+1
#         j=j-1
# print("".join(s))

# another way

# s = list(input())
# letters = [ch for ch in s if ch.isalnum()]
# print(letters)
# letters.reverse()
# print(letters)
# k = 0
# for i in range(len(s)):
#     print(s[i])
#     if s[i].isalnum():
#         s[i] = letters[k]
#         k += 1
# print(s)
# print("".join(s))

# another question


# s=input()
# l=[]
# for ch in s:
#     if ch.isdigit():
#         l.append(ch)
# print(l)
# l.sort(reverse=True)
# for i in range(len(l)-1,-1,-1):
#     if int(l[i])%2==0:
#         l.append(l.pop(i))
#         print("".join(l))
#         break
# else:
#     print(-1)

# another way

#
# s = input()
#
# digits = sorted([ch for ch in s if ch.isdigit()], reverse=True)
#
# odd = None
# for d in reversed(digits):
#     if int(d) % 2 == 0:
#         odd = d
#         digits.remove(d)
#         break
#
# if odd:
#     print("".join(digits) + odd)
# else:
#     print(-1)

#  another Question

# s=input()
# sub=input()
# l=[]
# for i in set(sub):
#     l.append(s.count(i)// sub.count(i))
# print(l)
# print(min(l))


# another question

# s= input()
# sub= input()
# i=0
# for ch in sub:
#     i=s.find(ch,i)
#     if i==-1:
#         print("no")
#         break
#     else:
#         i=i+1
# else:
#     print("yes")

#  another way

# s = input()
# sub = input()
# i = 0
# j = 0
# while i < len(s) and j < len(sub):
#     if s[i] == sub[j]:
#         j += 1
#     i += 1
# if j == len(sub):
#     print("yes")
# else:
#     print("no")


# s = "python is easy python is powerful"
# words = s.split()
# print(words)
# d = {}
#
# for w in words:
#     if w in d:
#         d[w] += 1
#     else:
#         d[w] = 1
#
# print(d)

s = "abc1234"
count = 0

for ch in s:
    if ch.isdigit():
        count += 1

print(count)
