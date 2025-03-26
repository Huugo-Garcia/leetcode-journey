function containsDuplicate(nums: number[]): boolean {
  // Create a set to store the numbers, the set will only store unique numbers
  // If the length of the set is different from the length of the array, there are duplicates
  return new Set(nums).size !== nums.length;
}

console.log(containsDuplicate([1, 2, 3, 10, 10]));
