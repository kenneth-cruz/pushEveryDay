def camelize(str_):
    all_lower = str_.lower().split()
    answer = []
    print(str_)
    for word in all_lower:
        word = word[0].upper() + word[1:]
        answer.append(word)
    return ''.join(answer)