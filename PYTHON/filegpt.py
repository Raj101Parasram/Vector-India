f=open("output.txt", "r")
s=f.read()
f.close()
f=open("output.txt","w")
f.write(s[::-1])
f.close()
f=open("output.txt","r")
l=f.readlines()
f.close()
l[0]=l[0].strip()
l[-1]=l[-1]+"\n"
for i in range(len(l)):
    l[i]=l[i][::-1]
f=open("output.txt", "w")
f.writelines(l)
f.close()

