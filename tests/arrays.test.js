it('describes array', ()=>{
    let nums = [10,20,30,40,50]

    nums.unshift(0)
    expect(nums[0]).toBe(0)
    nums.shift()
    expect(nums[1]).toBe(20)
})