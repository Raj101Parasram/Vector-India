nums = [1, 2, 3, 4, 5]
k = 2
print(nums)
for i in range(k):
    l=nums[-1]
    nums=[l]+ nums[:-1]
    
print(nums)

# Another Way

k = k % len(nums)
rotated = nums[-k:] + nums[:-k]
print("Rotated:", rotated)