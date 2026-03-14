import set from "../src/set.js";

const obj = {}

test('capitlize', () => {
    expect(set(obj, 'key1', 'value1')).toEqual('value1')
    expect(set(obj, 'key1', 'next value')).toEqual(null)
})
