# factorial of a number
# def fac(n):
#     f=1
#     for i in range(1,n+1):
#         f=f*i
#     return f
# print(fac(5))
# from math import prod
from selectors import SelectSelector

# question count vowels

# def vow(n):
#     c=1
#     for i in n:
#         if i=="a" or i=="e" or i=="i" or i=="o" or i=="u":
#             c=c+1
#     return c
# print(vow("hello world"))

# question 3 append only even number

# def even(n):
#     l=[]
#     for i in range(0,len(n)):
#         if n[i]%2==0:
#             l.append(n[i])
#     return l
# a=[1,2,5,3,6,4,8,89,5,6,22]
# print(even(a))

# question 5 square the all value of list with lambda and map function

# l=[1,2,5,3,6,4,8,89,5,6,22]
# print(list(map(lambda x: x**2,l)))

# remove all negative numbers from list in function

# def ne(n):
#     i=0
#     while i < len(n):
#         if n[i]<0:
#             n.pop(i)
#         else:
#             i=i+1
#     return n
#
# a=[1,2,5,3,-6,4,-8,89,5,-6,-22]
# print(ne(a))

# Another Way

# a=[1,2,5,3,-6,4,-8,89,5,-6,-22]
# print(list(filter(lambda x:x>0,a)))
# print(list(map(lambda x: a.pop(x) if x<0 else x, a)))

# accept any num as a argument and return there product

# def pord(*n):
#     c=1
#     for i in range(0,len(n)):
#         c=c*n[i]
#     return c
# print(pord(2,3,5))

# longest word in list

def words(w):
    c=0
    for i in w:
        if len(i)>c:
            c=len(i)
    return c
s="hello world i am raj from nagpur my age is 23".split()
print(words(s))