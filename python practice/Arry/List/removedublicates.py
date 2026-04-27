nums = [1, 3, 2, 5, 3, 1, 4, 2, 6]
seen = []    # list to track already seen numbers
result = []  # final answer list

for n in nums:
    # Have we seen this number before?
    if n not in seen:
        result.append(n)  # first time - add to answer
        seen.append(n)    # mark as seen
    # else: already seen, skip it!

print("Original:", nums)
print("Unique  :", result)

# Another Way

for i in nums:
    if i not in seen:
        seen.append(i)
print(seen)