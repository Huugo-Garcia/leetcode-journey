# 217.Contains Duplicate 🚀

(https://leetcode.com/problems/contains-duplicate/)

## 📌 Problem Statment

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

### 🔢 Examples

**Example 1:**

```
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.
```

**Example 3:**

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

### ⚠️ Constraints

```
1 <= nums.length <= 105
-109 <= nums[i] <= 109
```

## 🧠 Solution

```typescript
function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length;
}
```

### 🔍 Explanation

- Create a `Set` from the array, which automatically removes duplicates.
- We compare the size of the Set with the original array length:

  - If the sizes are different, it means there were duplicates in `nums`.

  - If they are the same, all elements were unique.

- The condition `set.size !== nums.length` already returns a boolean, so no need for an explicit `if`.

### ⏱️ Time Complexity

- `O(n)` in the worst case, since we iterate through the array once to insert elements into the Set.

- Space Complexity `O(n)`, as we store elements in the `Set` (in the worst case, all elements are unique).
