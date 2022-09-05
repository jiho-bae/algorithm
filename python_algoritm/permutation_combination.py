"""
  itertools.
  반복되는 데이터 처리 기능을 포함한 라이브러리.
  permutations, combinations가 제일 유용함.
  permutatin = 순열 = n개에서 r개를 뽑아 일렬로 나열하기.
  객체 초기화 이후, 리스트 자료형으로 변환해서 사용함.
  
  combinations = 조합 = n개에서 r개를 뽑는 경우의수(중복제외)
"""

from itertools import permutations
from itertools import combinations
from itertools import product
from itertools import combinations_with_replacement

# data 중에서 3개를 뽑는 순열 구하기.
data = ['A', 'B', 'C']
result_p = list(permutations(data, 3))
print(result_p)



result_c = list(combinations(data, 2))
print(result_c)

# product. 순열처럼 계산하나, 중복순열이다. 그래서 뽑을 데이터수를 repeat로 받아준다.



result_prod = list(product(data, repeat=2))
print(result_prod)

# combination_with_replacement. 중복 추출을 포함하는 조합을 실행한다.


result_cwr = list(combinations_with_replacement(data, 2))
print(result_cwr)

