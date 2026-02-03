# l=[1,66,85,5,4,6,8,4]
# # l.sort()
# # l.reverse()
# # l.sort(reverse=True)
# # l=sorted(l,reverse=True)
# # l.append(100)
# k=int(input())
# for i in range(len(l)):
#     if l[i]==k:
#         print("Found at ",i)
#         break
# print(l)

# p=[10, "raj", 3.14, True]
# print(p[0],p[1],p[2])
# print(p[1])
# print(p[2])
# print(p[3])
# print(p[1:5])

# f=["apple", "banana", "mango", "stobary", "kela"]
# print(f)
# print(f[1], f[3], f[4])
# print(f)
# f.append("org")
# f.append("goww")
# print(f)
# f.extend(["orange", "gowWA"])
# print(f)
# f[1]="kiwi"
# print(f)
# f[5]="healdhi salad"
# print(f)
# f.pop(2)
# print(f)

n=list(map(int,input().split()))
n.sort()
print(n)
print(max(n))
print(min(n))
print(sum(n))
print(n)
print(n.count(2))
print(n)
print(len(n))
print(sorted(n))

s=[x*x for x in range(6)]
print(s)

s=int(input())
print(s)
m=[]
for i in range (1,s+1):
    m.append(i*i)
print(m)

s=list(map(int,input().split()))
m=[]
for i in  s:
    if i%2==0:
        m.append(i)
print(sorted(set(m)))

s=list(map(int,input().split()))
m=list(map(int,input().split()))
print(len(s))
print(len(m))
for i in m:
    s.append(i)
print(s)
print(len(s))
print(sorted(set(s)))



