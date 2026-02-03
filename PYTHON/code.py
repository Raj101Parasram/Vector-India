# n = int(input())

# sum = 0
# for i in range(1, n):
#     if n % i == 0:
#         sum += i
        
# if sum == n:
#     print(f"Perfect")
    
# elif sum <= n:
#     print("deficient")
    
# else:
#     print("Abondent")

# n=int(input())
# s=0
# while n!=0:
#     d=n%10
#     n=n//10
#     s=s+d
# print(s)

# n=int(input())
# c=0
# while n!=0:
#     c=c+1
#     n=n//10
# print(c)

# n=int(input())
# while n!=0:
#     d=n%10
#     n=n//10
#     if d==5:
#         print("in this number 5 is avalable")
#     elif d==7:
#         print("in this number 7 is avalable")
#         break
# else:
#         print("in this number there are no 5 & 7")

# l=list(map(int,input().split()))
# min=l[0]
# max=l[0]
# for i in l:
#     if min>i:
#         min=i
#     elif max<i:
#         max=i
# print(min)
# print(max)



# l=list(map(int,input().split()))
# k=int(input())
# m=[]
# for i in l:
#     if i==k:
#       m.append(i)
# print(m)
# print(len(m))


# l=list(map(int,input().split()))
# m=[]
# n=[]
# for i in l:
#     for j in l:
#         if i==j:
#             m.insert(0,i)
#         else:
#             n.insert(0,i)
#     j=j+1
# i=i+1
# print(n)
# print(m)
# # n.extend(m)
# # print(n)

# s=input()
# d={}
# for ch in s:
#     if ()
#     d[ch]=d.get(ch,0)+1
# print(d)
# print(sorted(d))
# # print(sorted(d.items(), reverse=True, key=lambda x:x[1])[0])

# s=input()
# d={}
# a="aeiou"
# for ch in a:
#     for i in s:
#         if ch==i:
#             d[ch]=d.get(ch,0)+1
# print(d)

# s=input()
# d={}
# for ch in s:
#     if ((ch=='a')or(ch=='e')or(ch=='i')or(ch=='o')or(ch=='u')):
#         d[ch]=d.get(ch,0)+1
# print(d)


# ch=input()
# ca=sorted(ch)
# print(ca)
# sum=0
# for i in ca:
#     sum=sum+ord(i)
# print(sum)

            
    



# cd=ord(ch)
# print(cd)



# l=input().split()
# for i in range(len(l)):
#     l[i]=l[i][::-1]
# print(" ".join(l))

ch = input("Enter a character: ")

if ch.isalpha():
    print("Alphabet")
elif ch.isdigit():
    print("Digit")
else:
    print("Special character")





