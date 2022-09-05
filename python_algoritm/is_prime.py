"""
  소수
  2보다 큰 자연수 중 1과 자신을 제외한 자연수로는 나누어떨어지지 않는 수

  ex) 6보다 작은 소수 = 2,3
  
"""

# 소수찾기 1
# 단순 for문으로 O(x)


def is_prime_num(x):
    for i in range(2, x):
        if x % i == 0:
            return False

    return True


print(is_prime_num(10))

# 소수찾기 2
# 약수의 대칭관계(16의경우 1-16, 2-8, 4-4) 이용
# 가운데약수(sqrt(16)) 까지만 탐색하면 된다.
# 개선된 for문으로 O(x^(1/2))

import math


def is_prime_num_short(x):
    sqrtX = int(math.sqrt(x)) + 1

    for i in range(2, sqrtX):
        if x % i == 0:
            return False

    return True


print(is_prime_num_short(7))
"""
  소수찾기 3
  Eratosthenes
  N보다 작거나 같은 모든 소수 찾기.

  2~N까지 모든 자연수 나열
  남은 수 중 아직 처리하지 않은 가장 작은 i 찾기
  남은 수 중 i 배수 모두 제거(i는 제거하지 않음)
  더이상 반복할 수 없을 때 까지 2~3 반복

  O(NloglogN)으로 거의 선형시간.
  N=100만일 때, Nlog2 log2N = 400만 정도.
"""


def eratosthenes(n):
    arr = [True for i in range(n + 1)]
    sqrtN = int(math.sqrt(n))

    for i in range(2, sqrtN + 1):
        if arr[i] == True:
            j = 2
            while i * j <= n:
                arr[i * j] = False
                j += 1

    result = []
    for i in range(2, n + 1):
        if arr[i]: result.append(i)

    return result


print(eratosthenes(10))

