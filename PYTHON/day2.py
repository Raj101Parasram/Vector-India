# answer 1

s="python"
print(s[0],s[-1])

# answer 2

s="apple"
v="aeiou"
c=0
for i in s:
    if i in "aeiou":
        c+=1
print(c)

# answer 3

s="madam"
i=0
j=len(s)-1
while i<j:
    if s[i]==s[j]:
        i=i+1
        j=j-1
    else:
        print("not palindrome")
        break
else:
    print("palindrome")

# answer 4

s="a1b2c3"
l=list(s)
l1=[]
for i in l:
    if i.isdigit():
        l1.append(int(i))
print(l1)