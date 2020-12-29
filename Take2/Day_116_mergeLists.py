def merge_arrays(first, second): 
    third = first + second
    fourth = []
    for i in third:
        if i not in fourth:
            fourth.append(i)
    print(fourth.sort())
    return(fourth)
    