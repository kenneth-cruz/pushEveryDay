def cookie(x):
    if type(x) is str:
        return 'Who ate the last cookie? It was Zach!'
    elif type(x) is int or type(x) is float:
        return 'Who ate the last cookie? It was Monica!'
    else:
        return 'Who ate the last cookie? It was the dog!'