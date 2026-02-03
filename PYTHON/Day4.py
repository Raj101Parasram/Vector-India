# s=input()
# if len(s)>6:
#     print(f"string having {len(s)} characters")
#     for i in s:
#         if i.isalnum():
#             print("string having an alphanumeric character")
#             if i.isascii():
#                 print("string has a ascii character")
#             else:
#                 print("string has a non-ascii character")
#         else:
#             print("string having a non-alphanumeric character")
# else:
#     print("string doesn't have 6 characters, add more characters")

# s= input()
# a=0
# n=0
# sp=0
# if len(s)>6:
#     print(f"string having {len(s)} characters")
#     for ch in s:
#         if ch.isalpha():
#             a=a+1
#         elif ch.isnumeric():
#             n=n+1
#         else:
#             sp=sp+1
#     if a>0 and n>0 and sp>0:
#         print("string is valid")
#         print(f"string having {a} alphabets characters")
#         print(f"string having {n} numbers characters")
#         print(f"string having {sp} special characters")
#     else:
#         print("string is not valid")
# else:
#     print("string doesn't have 6 characters, add more characters")


# s=list("programming")
# i=0
# while i<len(s):
#     j=i+1
#     while j<len(s):
#         if s[i]==s[j]:
#             s.pop(j)
#         else:
#             j+=1
#     i+=1
# print("".join(s))


# s="programming"
# w=[]
# s=list(s)
# for i in range (0,len(s)):
#     if s[i] not in w:
#         w.append(s[i])
#     # for j in range (i+1, len(s)):
#     #     if s[i]==s[j]:
#     #         s.pop(j)
# print("".join(w))

# s="mississippi"
# d={}
# for ch in s:
#     d[ch]=d.get(ch,0)+1
# print(d)
# c=max(d.values())
# for ch,count in d.items():
#     if count==c:
#         print(ch,count)
#         break

# s="python is easy"
# r=""
# l=[]
# for i in range(len(s)):
#     for j in s[i]:
#         r=j+r
# r=split(r)
# for ch in r:
#     l.insert(0,ch)
# print(" ".join(l))

# s="listen"
# s1="silent"
# for ch in s:
#     if not ch in s1:
#         print("it's not an anagram")
#         break
# else:
#     if len(s)==len(s1):
#         print("it's an anagram")
#     else:
#         print("it's not an anagram")


# s="listen"
# s1="silent"
# for ch in s:
#     if s.count(ch)!=s1.count(ch):
#         print(" not anagram")
#         break
# else:
#     print('anagram')