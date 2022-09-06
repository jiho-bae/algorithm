"""
  암호만들기.
  조건))
  1. abcde와 같이 알파벳 오름차순이어야함.
  2. 최소 모음1개, 자음2개 -> 최소 글자수 3개

  주어지는 C개의 문자를 가지고 만들기.
  조건을 만족하는 길이 L의 문자열들을 모두 출력한다.
"""

# 4 6
# a t c i s w 가 주어진다.

# 오름차순 정렬 후 조합으로 뽑으면, 자동으로 오름차순이 유지될 것.
# bca, bac, cab, cba 등이 모두 abc와 동일시 취급되기 때문.

from itertools import combinations

L, C = map(int, input().split(' '))
arr = input().split(' ')
arr.sort()
moeum = ('a','e','i','o','u')

def join(arr):
  return ''.join(arr)

def get_combinations(arr, n):
  return list(combinations(arr, n))

def get_password_by_filter(combs, n, filter):
  result = []

  for comb in combs:
    cnt = 0

    for c in comb:
      if c in filter:
        cnt+=1

    if cnt >= 1 and cnt <= n - 2:
      result.append(join(comb))

  return result
    
combs = get_combinations(arr, L)
result = get_password_by_filter(combs, L, moeum)

print(result)