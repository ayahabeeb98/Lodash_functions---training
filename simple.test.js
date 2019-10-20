const {head,initial,join,last} = require('./simpleMethods');

test('simple method',()=>{
    expect(head([1, 2, 3])).toStrictEqual(1);
    expect(initial([1, 2, 3])).toStrictEqual([1,2]);
    expect(join(['a', 'b', 'c'], '~')).toStrictEqual('a~b~c');
    expect(last([1, 2, 3])).toStrictEqual(3);

});