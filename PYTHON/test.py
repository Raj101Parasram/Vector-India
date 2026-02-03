# s = "(())()"
# stack = []
#
# for ch in s:
#     if ch == "(":
#         stack.append(ch)
#     elif ch == ")":
#         stack.pop()
#     else:
#         print("stack is empty")
#         break
#
# if not stack:
#     print("Balanced")
# else:
#     print("Not Balanced")

# stack = []
# stack.append(1)
# print(stack)
# stack.append(2)
# print(stack)
# stack.append(3)
# print(stack)
# stack.pop()
# print(stack)
# print(stack[-1])
# stack.pop()
# stack.pop()

# s="Revers"
# stak=[]
# rev=""
# for ch in s:
#     stak.append(ch)
# for i in range (len(stak)-1,-1,-1):
#     rev +=stak.pop()
# print(rev)

# st=[]
# s="[]"
# for ch in s:
#     if ch in "({[":
#         st.append(ch)
#     else:
#         if len(st)==0:
#             print("Not Valid End")
#             break
#         else:
#             if ch=="}" and st[-1]=="{":
#                 st.pop()
#             elif ch=="]" and st[-1]=="[":
#                 st.pop()
#             elif ch==")" and st[-1]=="(":
#                 st.pop()
#             else:
#                 print("not valid bracket was not in sequences")
#                 break
# else:
#     if len(st)==0:
#         print("yes all match")
#     else:
#         print("no one opening brackets")

# s=[]
# s.append(1)
# s.append(2)
# s.append(3)
# print(s)
# s.pop(0)
# print(s)
# s.append(4)
# print(s)
# print(s[0],s[-1])
# if len(s)==0:
#     print("queue is empty")
# else:
#     print(f"queue is not empty {s}")

# q=[]
# while True:
#     print("1.enqueue    2.dequeue   3.display   4.exit")
#     ch=int(input("Enter your choice:"))
#     match ch:
#         case 1:
#             q.append((int(input())))
#         case 2:
#             if len(q)==0:
#                 print("queue is empty")
#             else:
#                 print(q.pop(0))
#         case 3:
#             if len(q)==0:
#                 print(f"queue is empty... {q}")
#             else:
#                 print(q)
#         case 4:
#             print("Exiting...")
#             break

# def add(n,m):
#     return n+m
# def sub(n,m):
#     return n-m
# def iseven(n):
#     if n%2==0:
#         print("even")
#     else:
#         print("odd")
#
# print(add(2,22))
# print(sub(add(2,22), 20))
# iseven(sub(add(2,22), 20))

# s="hello world I am raj goo straight turn right and fuckoff"
# s=s.split()
# r=""
# for i in s:
#     if len(set(i))== len(i):
#         if len(i) > len(r):
#             r=i
# print(r)
#
# def fact(a):
#     f=1
#     for i in range(1,a+1):
#         f=f*i
#     return f
# n= int(input())
# print(fact(n))


# def isprime(n):
#     if n<2:
#         return "Not Prime"
#     elif n==2:
#         return "prime"
#     else:
#         for i in range(2,n):
#             if n%i==0:
#                 return "Not Prime"
#             else:
#                 return "Prime"
# a=int(input())
# print(isprime(a))

# def pal(n):
#     n=str(n)
#     return n==n[::-1]
# a=input()
# print(pal(a))

# d=int(input())
# for i in range(1,d+1):
#     if isprime(i):
#         print(i)