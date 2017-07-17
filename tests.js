describe("Array", function() {
	
	describe("Array.length", () => 
	{
	  it("should return the right array length", () =>
	  {
	    expect([1,2,3].length).toEqual(3);
	  });
	});

	describe("Array.from()", () => 
	{
		function f() {
		  return Array.from(arguments);
		}

		it("should create a new Array instance from an array-like or iterable object", () =>
		{
		  expect(Array.from(["a", "b", "c"])).toEqual(["a", "b", "c"]);
		  expect(Array.from('foo')).toEqual(["f", "o", "o"]);
		  expect(Array.from(new Set(['foo', window]))).toEqual(['foo', window]);
		  expect(Array.from(new Map([[1, 2], [2, 4], [4, 8]]))).toEqual([[1, 2], [2, 4], [4, 8]]);
		  expect(f(1, 2, 3)).toEqual([1,2,3]);
		  expect(Array.from([1, 2, 3], x => x + x)).toEqual([2,4,6]);
		  expect(Array.from({length: 5}, (v, i) => i)).toEqual([0, 1, 2, 3, 4]);
		});
	});

	describe("Array.isArray()", () => 
	{
		it("should determine whether the passed value is an Array", () =>
		{
		  expect(Array.isArray([1, 2, 3])).toEqual(true);
		  expect(Array.isArray({foo: 123})).toEqual(false);
		  expect(Array.isArray('foobar')).toEqual(false);
		  expect(Array.isArray(undefined)).toEqual(false);
		  expect(Array.isArray({ __proto__: Array.prototype })).toEqual(false);
		});
	});

	describe("Array.of()", () => 
	{
		it("should create a new Array instance with a variable number of arguments, regardless of number or type of the arguments", () =>
		{
		  expect(Array.of(1)).toEqual([1]);
		  expect(Array.of(1, 2, 3)).toEqual([1, 2, 3]);
		  expect(Array.of(undefined)).toEqual([undefined]);
		});
	});

	describe("Array.prototype.concat()", () => 
	{
		it("should  merge two or more arrays into a new array", () =>
		{
			var arr1 = ['a', 'b', 'c'];
			var arr2 = ['d', 'e', 'f'];
			var alpha = ['a', 'b', 'c'];
			var numeric = [1, 2, 3];
			var num1 = [[1]];
			var num2 = [2, [3]];
			var nums = num1.concat(num2);
			num1[0].push(4);
			expect(arr1.concat(arr2)).toEqual([ "a", "b", "c", "d", "e", "f" ]);
			expect(alpha.concat(numeric)).toEqual(['a', 'b', 'c', 1, 2, 3]);
			expect(nums).toEqual([[1, 4], 2, [3]]);
		});
	});

});