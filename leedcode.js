let twoSum = function (nums, target) {
    let indexArr = []
    //大于等于target的数字过滤掉
    // let arr=nums.filter(item=>item<target)
    for (let i = 0; i < nums.length; i++) {
        let j = target - nums[i]
        let search = nums.indexOf(j, i + 1)
        if (search > 0) {
            indexArr = [i, search]
            return indexArr
        }
    }
};
let nums = [2, 7, 11, 15]
let target = 9

let indexArr = twoSum(nums, target)
console.log(indexArr);
