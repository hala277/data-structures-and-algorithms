# Quick Sort
A sorting technique that sequences a list by continuously dividing the list into two parts and moving the lower items to one side and the higher items to the other


## Pseudocode

```
ALGORITHM QuickSort(arr, left, right)
    if left < right
        // Partition the array by setting the position of the pivot value
        DEFINE position <-- Partition(arr, left, right)
        // Sort the left
        QuickSort(arr, left, position - 1)
        // Sort the right
        QuickSort(arr, position + 1, right)

ALGORITHM Partition(arr, left, right)
    // set a pivot value as a point of reference
    DEFINE pivot <-- arr[right]
    // create a variable to track the largest index of numbers lower than the defined pivot
    DEFINE low <-- left - 1
    for i <- left to right do
        if arr[i] <= pivot
            low++
            Swap(arr, i, low)

     // place the value of the pivot location in the middle.
     // all numbers smaller than the pivot are on the left, larger on the right.
     Swap(arr, right, low + 1)
    // return the pivot index point
     return low + 1

ALGORITHM Swap(arr, i, low)
    DEFINE temp;
    temp <-- arr[i]
    arr[i] <-- arr[low]
    arr[low] <-- temp
```

## Trace

**phase1:**
Select the Pivot Element first.

`[8,4,23,42,16,15]`

There are various quicksort types in which the pivot element is chosen from various positions. The pivot element in this case will be number 15 from the array.

[8,4,23,42,16,`15`]

**phase2:**
Rearrange the Array

The array's elements are now reorganized so that elements smaller than the pivot are on the left and elements greater than the pivot are on the right.

`[8,4,15,23,42,16]`

**phase3:**
Subarrays Are Divided

Pivot elements are chosen individually for the left and right sub-parts. Step 2 is then repeated.
`[8,4,15,23,42,16]`

`[4,8]` left side

`[16,23,42]` right side

the array will look like this `[4,8,15,16,23,42]`

## Efficiency

+ Time Complexity
  + Best Case O(n*log n)
  + Average Case O(n*log n)
  + Worst Case O(n^2)

+ Space Complexity
  + Space Complexity O(log n)