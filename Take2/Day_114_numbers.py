def divisible_by(numbers, divisor):
    answer = []
    for item in numbers:
        if item % divisor == 0:
            answer.append(item)
    return (answer)
    