# 1.Two Sum 🚀

(https://leetcode.com/problems/two-sum/)

## 📌 Problem Statment

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### 🔢 Examples

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: (nums = [3, 2, 4]), (target = 6);
Output: [1, 2];
```

**Example 3:**

```
Input: (nums = [3, 3]), (target = 6);
Output: [0, 1];
```

### ⚠️ Constraints

```
1. 2 <= nums.length <= 10^4
2. -109 <= nums[i] <= 10^9
3. -109 <= target <= 10^9
4. Only one valid answer exists.
```

**Follow-up:** Can you come up with an algorithm that is less than `O(n^2)` time complexity?

## 🧠 Solution

```typescript
function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashMap.has(complement)) {
      return [hashMap.get(complement)!, i];
    }

    hashMap.set(nums[i], i);
  }

  return [];
}
```

### 🔍 Explanation

- Create a `Map` (`hashMap`) to store numbers and their indices.
- Iterate through `nums`:
  - Calculate the `complement = target - nums[i]`.
  - Check if `complement` exists in `hashMap`:
    - If **yes**, return the stored index of `complement` and the current index `i`.
    - If **no**, store `nums[i]` as the key and `i` as the value in `hashMap`.
- If no solution is found (which is not possible in valid inputs), return an empty array `[]`.

### ⏱️ Time Complexity

- `O(n)`: We iterate through `nums` once, and `Map` operations (`get`, `set`, `has`) take O(1) on average.

- Space Complexity `O(n)`: In the worst case, we store all `n` elements in `hashMap`.
