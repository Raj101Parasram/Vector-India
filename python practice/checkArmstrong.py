n= int(input("enter number :"))
num=str(n)
power=len(num)
t=0
for i in num:
    t= int(i)**power +t

if t==n:
    print(n,"is Armstrong number")
else:
    print(n,"is not Armstrong number")
    
# Another Way

total=sum(int(d)**power for d in num)
print(n, " is Armstrong" if total==n else "it is not Armstrong")