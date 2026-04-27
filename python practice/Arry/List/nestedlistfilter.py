nested = [1, [2, 3], [4, 5], 6]
flat = []

for i in nested:
    if type(i)== list:
        for j in i:
            flat.append(j)
    else:
        flat.append(i)

print(flat)


# Another Way using Function

def flatten(lst):
    result = []
    for item in lst:
        if isinstance(item, list):
            result.extend(flatten(item))
        else:
            result.append(item)
    return result
print(flatten([1,[2,3],[4,[5,6]],7]))


#  in Beater Way

# Easy version: only handles ONE level of nesting
nested = [1, [2, 3], [4, 5], 6]
flat = []

for item in nested:
    # Is this item a list inside the list?
    if type(item) == list:
        # Yes! Add each element of inner list separately
        for inner in item:
            flat.append(inner)
    else:
        # No, it's a plain number - add directly
        flat.append(item)

print("Nested:", nested)
print("Flat  :", flat)