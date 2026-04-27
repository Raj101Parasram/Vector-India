l= [10,5,30,80,40,65,2,73,11]
i=1

while i<len(l)+1:
    for j in (l):
        if i<j:
            i=j
    s=i
    
print(s)


s1=s2=s3=-1

for n in (l):
    if n>s1:
        s3=s2
        s2=s1
        s1=n
    elif n>s2 and n!=s1:
        s3=s2
        s2=n
    elif n>s3 and n!=s2 and n!=s1:
        s3=n
        
print("largest num :", s1)
print("2nd largest num :", s2)
print("3rd largest num :", s3)