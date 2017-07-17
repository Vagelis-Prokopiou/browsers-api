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

		it("should  creates a new Array instance from an array-like or iterable object", () =>
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

});