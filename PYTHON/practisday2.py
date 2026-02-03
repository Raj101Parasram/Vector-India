# question 1: count characters
# from curses.ascii import isdigit, isalpha
# from shlex import split, join

# s="Hello World I am R@j And my age is 23"
# s=s.lower()
# vc=0
# dc=0
# ac=0
# c=0
# for i in s:
#     if i=="a" or i=="e" or i=="i" or i=="o" or i=="u":
#         vc=vc+1
#     elif i.isdigit():
#         dc=dc+1
#     elif i.isalpha() and i!=" ":
#         ac=ac+1
#     elif i==" ":
#         continue
#     else:
#         c=c+1
# else:
#     print("string is not correct")
# print(vc)
# print(dc)
# print(ac)
# print(c)

# question 2: revers a number in string and int format

# s="123456"
# s=list(s)
# ss=[]
# i=0
# while i<len(s):
#     ss.insert(0,s[i])
#     i+=1
# print("".join(ss))

# int format

# s=123456
# rev=0
# while s>0:
#     d=s%10
#     rev=rev*10+d
#     s=s//10
# print(rev)

#  Another way
# s="123456"
# print(int(s[::-1]))

# question 3: palindrome or not

# s="Madam"
# s=s.lower()
# i=0
# j=len(s)-1
# while i<j:
#     if s[i]!=s[j]:
#         print("not palindrome")
#         break
#     i+=1
#     j-=1
#
# else:
#     print("palindrome")

# another way
