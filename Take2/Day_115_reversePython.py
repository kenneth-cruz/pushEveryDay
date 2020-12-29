def solution(string):
    switched = list(string)
    what = switched[::-1]
    return "".join(what)