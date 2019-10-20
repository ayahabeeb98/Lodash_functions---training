const {compact ,difference ,drop,dropRight ,fill,flattenDeep,indexOf,intersection,castArray,uniq} = require('./methods');

test('Methods',()=>{
    expect(compact([0, 1, false, 2,undefined,NaN, '', 3, null])).toBeTruthy();
    expect(difference([2, 1], [2, 3])).toStrictEqual([1]);
    expect(drop([1, 2, 3])).toStrictEqual([2, 3]);
    expect(dropRight([1, 2, 3])).toStrictEqual([1,2]);
    expect(fill([1, 2, 3],'a')).toStrictEqual(['a','a','a']);
    expect(flattenDeep([1, [2, [3, [4]], 5]])).toStrictEqual([1,2,3,4,5]);
    expect(indexOf([1, 2, 1, 2], 2)).toStrictEqual(1);
    expect(intersection([2, 1], [2, 3])).toStrictEqual([2]);
    expect(castArray(1)).toStrictEqual([1]);
    expect(uniq([2, 1, 2])).toStrictEqual([2,1]);
});