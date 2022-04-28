# Merge Sort
Merge sort is a sorting technique that is based on the divide and conquer method.


## Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Trace

**phase1:**

`[8,4,23,42,16,15]`

That merge sort divides the entire array into equal halves iteratively until the atomic values are reached. We can see here that a 6-item array is partitioned into two 3-item arrays.

`[8,4,23]` , `[42,16,15]`

**phase2:**

This has no effect on the order of appearance of things in the original. We now divide these two arrays in half.

[8] [4,23]  ,  [42] [16,15]

**phase3:**

We divide these arrays further until we reach an atomic value that can no longer be divided.

[8] [4] [23]  [42] [16] [15]

**phase4:**

We now combine them in the exact same order in which they were broken down.We initially compare the elements in each list before combining them in a sorted manner into another list. We compare 8 and 4, and put 4 first in the goal list of two values,followed by 23.

and the same on the other half  We compare 42 and 16, and put 16 first in the goal list of two values,followed by 15.

[4,8] [23] , [16,42] [15]

**phase5:**

In the following iteration of the combining phase, we compare lists of two data values and merge them into a list of found data values, sorting them all.

[4,8,23] [15,16,42]

**phase6:**

The list should look like this after the final merge.

the final array will be ==> `[4,8,15,16,23,42]`

## Efficiency

+ Time Complexity
  + Best Case O(n*log n)
  + Average Case O(n*log n)
  + Worst Case O(n*log n)

+ Space Complexity
  + Space Complexity O(n)
