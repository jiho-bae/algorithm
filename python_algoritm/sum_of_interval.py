"""
  특정 구간의 합 계산하기.

  연속적으로 나열된 N개의 수가 있고,
  쿼리 M개가 있다고 한다.
  각 쿼리가 [left, right]로 구성되고,
  모든 쿼리의 구간의 합을 구해야 한다면?

  N개의 수에 대한 쿼리 M개 처리로 O(NM)을 보일 것.
  
  N,M이 크다면 O(NM)의 시간복잡도가 꽤 커질 수 있다.
  쿼리 M개는 어쩔 수 없지만, N에서는 변화를 줄 수 있는데
  prefix sum(접두사 합)을 이용해보자.

  prefix sum
  리스트 맨 앞부터 특정 위치까지의 합을 구해놓은 것.

  그래서, 
  N개의 수부터 위치 각각에 대해 접두사 합을 미리 구해둔다.

  1. N개 수에 대해 접두사 합을 계산하여 특정 배열에 저장한다.
  2. M개의 쿼리정보 [Left, Right] 조회시, arr[Right] - arr[Left-1] 을 수행하면 된다.

  배열 10 20 30 40 50 의 경우
  특정 배열은 크기 6이며, 0 10 30 60 100 150의 접두사합을 가진다.

  그래서 처음에 O(N)만큼의 시간으로 접두사합을 구해두고,
  M개의 쿼리에 대해서는 O(M) + 조회(O(1))만큼 필요하므로
  총 O(N + M)으로 수행할 수 있다.

  요약 : O(NM) => O(N+M)
"""

sorted_arr = [10, 20, 30, 40, 50]
queries = [[1, 2], [2, 5], [2, 4], [3, 4], [1, 4], [2, 4]]


def get_prefix_sum(arr):
    sum = 0
    prefix_sum = [0]

    for i in arr:
        sum += i
        prefix_sum.append(sum)

    return prefix_sum


prefix_sum = get_prefix_sum(sorted_arr)


def get_sum_of_intervals(prefix_sum, queries):
    sum_of_intervals = []

    for query in queries:
        [left, right] = query
        sum = prefix_sum[right] - prefix_sum[left - 1]
        sum_of_intervals.append(sum)

    return sum_of_intervals


print(get_sum_of_intervals(prefix_sum, queries))
