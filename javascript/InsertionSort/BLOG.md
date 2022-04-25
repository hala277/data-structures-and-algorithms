# Insertion Sort

Insertion sort is a sorting algorithm that, in each iteration, installs an unsorted element in its proper location.

## Pseudocode

```
InsertionSort(int[] arr)

    FOR i = 1 to arr.length

      int j <-- i - 1
      int temp <-- arr[i]

      WHILE j >= 0 AND temp < arr[j]
        arr[j + 1] <-- arr[j]
        j <-- j - 1

      arr[j + 1] <-- temp
```

## Trace

Sample Array: `[8,4,23,42,16,15]`

**Pass 1:**

In insertion sort, the first two elements are compared first.

`8,4`,23,42,16,15

8 is greater than 4 in this case. This indicates that both items are already arranged in ascending order. As a result, 4 is currently kept in a sorted subarray.

`4,8`,23,42,16,15

**Pass 2:**

Move on to the following two items and make a comparison between them.

4,`8,23`,42,16,15

It shows that 8 and 23 are already arranged in ascending order. As a result, we'll add number 8 to the sorted sub-list.



**Pass 3:**

4,8,`23,42`,16,15

Also in this case 23 and 42 are already arranged in ascending order.So we'll add number 23 to the sorted sub-list.



**Pass 4:**

4,8,23,`42,16`,15

In the sorted sub-list, we now have 4,8 and 23. It then compares 42,16 to 10.

so know these values are not in a sorted order.
`4,8,23,42,16`,15

so we will swap them know and it will look like this:
`4,8,23,16,42`,15

**Pass 5:**

4,8,23,16,`42,15`

still 42,15 are the same and we have to do the same as previous so we will swap to becaome at the end

`4,8,15,16,23,42`


## Efficiency

+ Time Complexity
  + Best Case O(n)
  + Average Case O(n^2)
  + Worst Case O(n^2)

+ Space Complexity
  + Space Complexity O(1)
  

