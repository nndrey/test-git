import take from '../src/take.js'

test('capitlize', () => {
    expect(take([], 2)).toEqual([])
    expect(take([1, 2, 3])).toEqual([1])
    expect(take([1, 2, 3], 2)).toEqual([1, 2])
    expect(take([4, 3], 9)).toEqual([4, 3])
    expect(take([4, 3], -1)).toEqual([])
})
