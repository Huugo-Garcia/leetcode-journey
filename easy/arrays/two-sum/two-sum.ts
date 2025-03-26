function twoSum(nums: number[], target: number): number[] {
  // Create a hash map to store the index of the numbers
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement necessary to reach the target
    const complement = target - nums[i];

    // If the complement is in the hash map, return the indexes, we find the solution
    if (hashMap.has(complement)) {
      // Return the actual index and the index of the complement
      return [hashMap.get(complement)!, i];
    }

    // If the complement is not in the hash map, add the number to the hash map
    hashMap.set(nums[i], i);
  }

  // If we reach this point, there is no solution
  return [];
}

console.log(twoSum([2, 11, 15, 7], 9));
