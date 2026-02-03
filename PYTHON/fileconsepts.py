#  read and display

# f=open("file.txt", "r")
# s=f.read()
# print(s)
# f.close()

# copying and pasting form one file to another

# f=open("file.txt", "r")
# f2=open("output.txt", "w")
# f2.write(f.read())
# print("copied")
# f.close()
# f2.close()

# revers contain of a file

# f=open("file.txt","r")
# s=f.read()
# f.close()
# f=open("output.txt","w")
# f.write(s[::-1])
# f.close()
# f2=open("output.txt","r")
# s2=f2.read()
# print(s2)

# revers contain in line

# f=open("output.txt", "r")
# l=f.readlines()
# f.close()
# l[0]=l[0].strip()
# l[-1]=l[-1]+"\n"
# for i in range(len(l)):
#     l[i]=l[i][::-1]
# f=open("output.txt", "w")
# f.writelines(l)
# f.close()

# count word, character and line

f=open("file.txt","r")
s=f.read()
f.close()
w=s.count(" ")+s.count("\n")+1
c=len(s)-s.count("\n")
l=s.count("\n")+1
print(w,c,l)

# another way
f=open("file.txt","r")
s=f.read()
w=l=c=0
for ch in s:
    if ch=="\n":
        l=l+1
        w=w+1
    elif ch==" ":
        w=w+1
    else:
        c=c+1
print(w+1,c,l+1)


with open("file.txt", "r") as f:
    s=f.read()

    lines = s.split("\n")
    words = s.split()
    char = len(s)

    f.close()
print(len(lines))
print(len(words))
print(char)