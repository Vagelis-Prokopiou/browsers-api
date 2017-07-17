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
		it("should create a new Array instance from an array-like or iterable object", () =>
		{
			function f() 
			{
			  return Array.from(arguments);
			}

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

	describe("Array.prototype.copyWithin()", () => 
	{
		it("should shallow copy part of an array to another location in the same array and returns it, without modifying its size", () =>
		{
			expect(['alpha', 'bravo', 'charlie', 'delta'].copyWithin(2, 0)).toEqual(["alpha", "bravo", "alpha", "bravo"]);
			expect([1, 2, 3, 4, 5].copyWithin(-2)).toEqual([1, 2, 3, 1, 2]);
			expect([1, 2, 3, 4, 5].copyWithin(0, 3)).toEqual([4, 5, 3, 4, 5]);
			expect([1, 2, 3, 4, 5].copyWithin(0, 3, 4)).toEqual([4, 2, 3, 4, 5]);
			expect([1, 2, 3, 4, 5].copyWithin(-2, -3, -1)).toEqual([1, 2, 3, 3, 4]);
			expect([].copyWithin.call({length: 5, 3: 1}, 0, 3)).toEqual({0: 1, 3: 1, length: 5});
		});
	});

	describe("Array.prototype.entries()", () => 
	{
		it("should return a new Array Iterator object that contains the key/value pairs for each index in the array", () =>
		{
			var a = ['a', 'b', 'c'];
			var iterator = a.entries();
			expect(iterator.next().value).toEqual([0, 'a']);
			expect(iterator.next().value).toEqual([1, 'b']);
			expect(iterator.next().value).toEqual([2, 'c']);
		});
	});

	describe("Array.prototype.every()", () => 
	{
		it("should test whether all elements in the array pass the test implemented by the provided function.", () =>
		{
			function isBigEnough(element, index, array)
			{
			  return element >= 10;
			}

			expect([12, 5, 8, 130, 44].every(isBigEnough)).toEqual(false);
			expect([12, 54, 18, 130, 44].every(isBigEnough)).toEqual(true);
		});
	});

});