"""
  heapq
  다익스트라 최단경로나, 우선순위큐 등을 구현할 때 사용됨.
  PriorityQueue 라이브러리도 있는데, heapq로 하는게 더 빠름.

  파이썬 힙 = 최소힙으로 구성됨
  그래서 원소 넣기,빼기 = O(nlogn) + 오름차순까지 해준다.
  12345 에 0을 넣으면, 알아서 들어가면서 012345로 된다는 얘기다.

  최소힙의 가장 최상단 원소는, 가장 작은 원소기 때문.

  heapq.heappush로 넣어주고,
  heapq.heappop으로 꺼낸다.
"""

# heapq를 이용해 heap sort를 구현해봅시다.

import heapq


def heapsort(iterable):
    h = []
    result = []

    # 차례대로 원소를 힙에 넣기
    for value in iterable:
        heapq.heappush(h, value)

    # 차례때로 원소를 힙에서 빼기
    for _ in range(len(h)):
        result.append(heapq.heappop(h))

    return result


result_heapsort = heapsort([1, 3, 5, 6, 9, 2, 4, 6, 8, 0])
print(result_heapsort)

# 최대힙은 제공하지 않음.
# 근데 어차피 최소힙에서 부호만 반대로하면 최대힙이니, 부호를 바꾸면 된다.


def heapsortbymaxheap(iterable):
    h = []
    result = []

    # 차례대로 원소를 힙에 넣기
    for value in iterable:
        heapq.heappush(h, -value)

    # 차례때로 원소를 힙에서 빼기
    for _ in range(len(h)):
        result.append(-heapq.heappop(h))

    return result


result_heapsort_bymaxheap = heapsortbymaxheap([1, 3, 5, 6, 9, 2, 4, 6, 8, 10])
print(result_heapsort_bymaxheap)