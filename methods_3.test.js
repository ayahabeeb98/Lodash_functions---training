const {escape,kebabCase,repeat,union,differenceBy,remove,invert,pick,times,clamp} = require('./methods_3');

test('Methods#3',()=>{
    expect(escape('fred, barney, & , < , > , \' ," ')).toStrictEqual('fred, barney, &amp; , &lt; , &gt; , &#39; ,&quot; ');
    expect(kebabCase('fooBar')).toStrictEqual('foo-bar');
    expect(repeat('*', 3)).toStrictEqual('***');
    expect(union([2], [1,'a', 2])).toStrictEqual([2, 1, "a"]);
    expect(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toStrictEqual([1.2]);
    expect(remove( [1, 2, 3, 4], function(n) {return n % 2 === 0;})).toStrictEqual([2, 4]);
    expect(invert( { 'a': 1, 'b': 2, 'c': 1 })).toStrictEqual({1: "c", 2: "b"});
    expect(pick({ 'a': 1, 'b': '2', 'c': 3 }, ['a','c'])).toStrictEqual({ 'a': 1, 'c': 3 });
    expect(clamp(-10, -5, 5)).toStrictEqual(-5);
    expect(times(3, String)).toStrictEqual(['0','1','2']);

});