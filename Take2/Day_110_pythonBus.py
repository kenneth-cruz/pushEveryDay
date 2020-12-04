import math

def enough(cap, on, wait):
    print(cap, on, wait)
    cant_take= (cap - on - wait)
    if cant_take < 0:
        return abs(cant_take)
    else:
        return 0