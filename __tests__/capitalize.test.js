import capitlize from "../src/capitalize.js";

test('capitlize', () => {
    expect(capitlize('hello')).toEqual('Hello')
    expect(capitlize('')).toEqual('')
})
