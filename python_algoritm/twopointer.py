"""
  투포인터.
  리스트에 순차적으로 접근해야 할 때 2개의 점의 위치를 기록하는 방식.

  2,3,4,5,6,7 을 순서대로 부르는 것과
  2~7번까지 한번에 부르는 것은 결과는 같지만 과정이 다르다.

  여기서 2, 7은 각각 시작점과 끝점(투포인터)를 의미하게 된다.

  그래서 특정한 목적이 있고, 그 목적을 달성하기 위해 포인터를 옮겨가며 탐색하는 것이다.
"""

# 특정 합을 가지는 부분 연속수열 찾기
# 합이 5인 연속수열을 찾아보자.

arr = [1, 2, 3, 2, 5]


def find_sum_continuous_seq(arr, target):
    # target과 합이 같으면 카운트, 작으면 end 증가, 크면 start가 증가되어야 한다.
    sizeOfArr = len(arr)
    count = 0
    start = 0
    end = 0
    partial_sum = arr[0]

    while start < sizeOfArr:
        if partial_sum > target:
            partial_sum -= arr[start]
            start += 1
            continue
        elif partial_sum == target:
            count += 1

        end += 1
        if end >= sizeOfArr: break
        partial_sum += arr[end]

    return count


print(find_sum_continuous_seq(arr, 5))


def fscs_for(arr, target):
    sizeOfArr = len(arr)
    end = 0
    count = 0
    partial_sum = 0

    for start in range(sizeOfArr):
        while partial_sum < target and end < sizeOfArr:
            partial_sum += arr[end]
            end += 1
        if partial_sum == target:
            count += 1
        partial_sum -= arr[start]

    return count


print(fscs_for(arr, 5))


"""
  투포인터는 정렬된 두 리스트의 합집합에도 이용된다.
  정렬된 2개의 리스트가 주어지고, 모든 원소를 합쳐서 정렬한 결과를 계산해야하면?

  A,B 리스트를 입력받고,
  x,y 두개의 포인터 중 더 작은 원소를 결과 리스트에 담는다.
  더 처리할 원소가 없을 때 까지 반복하고, 마지막에는 남은 원소들을 차례대로 넣어준다.
"""

# two pointer 기반으로 넣은 뒤, 마지막에 남은 원소 모두 넣기
# 총 O(N+M)

A = [1, 5, 6, 8, 9, 9, 9]
B = [2, 3, 5, 6, 7, 7, 8, 8]


def find_union(arr1, arr2):
    arr1_len = len(arr1)
    arr2_len = len(arr2)
    x = 0
    y = 0
    result = []

    while x < arr1_len and y < arr2_len:
        if arr1[x] <= arr2[y]:
            result.append(arr1[x])
            x += 1
        else:
            result.append(arr2[y])
            y += 1

    if x < arr1_len:
        for i in arr1[x:]:
            result.append(i)
    else:
        for i in arr2[y:]:
            result.append(i)

    return result


print(find_union(A, B))

# 추가된 조건 기반으로 two pointer 기반 한번에 모두 넣기
# O(N+M)인 것은 같다.

def find_union_two(arr1, arr2):
    arr1_len = len(arr1)
    arr2_len = len(arr2)
    x = 0
    y = 0
    result = [0] * (arr1_len + arr2_len)
    idx = 0

    while x < arr1_len or y < arr2_len:
        if (y >= arr2_len) or (x < arr1_len and arr1[x] <= arr2[y]):
            result[idx] = arr1[x]
            x += 1
        else:
            result[idx] = arr2[y]
            y += 1
        idx+=1

    return result

print('two : ', find_union_two(A, B))

