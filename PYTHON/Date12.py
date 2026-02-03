"""print("Enter 4 Number with space :-")
a,b,c,d=map(int,input().split())
if a>b and a>c and a>d:
    if b>c and b>d and c>d:
        print(d,c,b,a)
    elif c>b and c>d and b>d:
        print(d,b,c,a)
    elif d>c and d>b and b>c:
        print(c,b,d,a)
    else:
        print(b,c,d,a)
elif b>a and b>c and b>d:
    if a>c and c>d:
        print(d,c,a,b)
    elif c>a and a>d:
        print(d,a,c,b)
    elif d>a and a>c:
        print(c,a,d,b)
    else:
        print(a,c,d,b)
elif c>a and c>b and a>d:
    if a>b and b>d:
        print(d,b,a,c)
    elif b>a and a>d:
        print(d,a,b,c)
    elif d>a and a>b:
        print(b,a,d,c)
    else:
        print(a,b,d,c)
elif d>a and d>c and d>b:
    if a>b and b>c:
        print(c,b,a,d)
    elif b>a and a>c:
        print(c,a,b,d)
    elif c>a and a>b:
        print(b,a,c,d)
    else:
        print(a,b,c,d)
else:
    print("enter valid number")"""

# m=float(input())
# w=float(input())
# h=m*m
# bmi=w/h
# if bmi<18.5:
#     print("under")
# elif bmi<24.9:
#     print("normal")
# elif bmi<29.9:
#     print("over")
# elif bmi>30 and bmi<80:
#     print("obes")
# else:
#     print("enter valid")

l=list(map(int,input().split()))
K=0
i=0
for j in range (len(l)):
    if l[j]<0:
        l.insert(i,l.pop(j))
        i=i+1
print(l)