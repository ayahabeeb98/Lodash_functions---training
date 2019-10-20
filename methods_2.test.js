const {includes, sample, sampleSize, fromPairs,toPairs, pull, pullAll, pullAt,camelCase,capitalize,escapeRegExp} = require('./methods_2');

test('Methods#2',()=>{
    expect(includes([1, 2, 3], 1)).toBeTruthy();
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toBeTruthy();
    expect(includes('abcd', 'bc')).toBeTruthy();

    expect(fromPairs([['a', 1], ['b', 2]])).toStrictEqual({ 'a': 1, 'b': 2 });
    expect(toPairs({'a':1,'b':3,'c':5})).toStrictEqual([["a", 1], ["b", 3], ["c", 5]]);
    expect(pull(['a', 'b', 'c', 'a', 'b', 'c'], 'a', 'c')).toStrictEqual([ 'b', 'b' ]);
    expect(pullAll(['a', 'b', 'c', 'a', 'b', 'c'],  ['a', 'c'])).toStrictEqual([ 'b', 'b' ]);
    expect(pullAt(['a', 'b', 'c', 'd'], [1, 3])).toStrictEqual([ 'b', 'd' ]);
    expect(camelCase('Foo Bar')).toStrictEqual('fooBar');
    expect(camelCase('Foo Bar')).toStrictEqual('fooBar');
    expect(camelCase('Foo Bar')).toStrictEqual('fooBar');
    expect(capitalize('Aya Habeeb')).toBe('Aya habeeb');
    expect(escapeRegExp('[lodash](https://lodash.com/)')).toStrictEqual('\\[lodash\\]\\(https://lodash\\.com/\\)');


});