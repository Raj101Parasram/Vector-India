num=[1,2,4,5,6,7,8,9]
n= len(num)+1

tsum=n*(n+1)//2
miss=tsum-sum(num)
print(miss)



nums = [2, 7, 11, 7, 4, 15, 1, 2, 3 ,8]
target = 9

# Easy way: check every pair using two loops
# Loop 1: pick first number
for i in range(len(nums)):
    # Loop 2: pick second number (after first)
    for j in range(i + 1, len(nums)):
        # Do these two numbers add up to target?
        if nums[i] + nums[j] == target:
            print("Found!")
            print("Index", i, "+", "Index", j)
            print(nums[i], "+", nums[j], "=", target)



for x in range(len(nums)):
    for y in range(len(nums)):
        if nums[x]+nums[y]==target:
            print(nums[x], nums[y])

f=[]
for s in range(len(nums)):
    for a in range(len(nums)):
        if nums[s]==nums[a]:
            f.append((nums[s], nums[a]))
print(f)