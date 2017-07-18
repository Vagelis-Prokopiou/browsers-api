(function()
{
	const isBigEnough = element =>
	{
		return element >= 15;
	}

	describe("Array", () =>
	{

		describe("Array.length", () =>
		{
			it("should return the right array length", () =>
			{
				expect([1, 2, 3].length).toEqual(3);
			});
		});

		describe("Array.from()", () =>
		{
			it("should create a new Array instance from an array-like or iterable object", () =>
			{
				const f = function()
				{
					return Array.from(arguments);
				}

				expect(Array.from(["a", "b", "c"])).toEqual(["a", "b", "c"]);
				expect(Array.from('foo')).toEqual(["f", "o", "o"]);
				expect(Array.from(new Set(['foo', window]))).toEqual(['foo', window]);
				expect(Array.from(new Map([[1, 2], [2, 4], [4, 8]]))).toEqual([[1, 2], [2, 4], [4, 8]]);
				expect(f(1, 2, 3)).toEqual([1, 2, 3]);
				expect(Array.from([1, 2, 3], x => x + x)).toEqual([2, 4, 6]);
				expect(Array.from({ length: 5 }, (v, i) => i)).toEqual([0, 1, 2, 3, 4]);
			});
		});

		describe("Array.isArray()", () =>
		{
			it("should determine whether the passed value is an Array", () =>
			{
				expect(Array.isArray([1, 2, 3])).toEqual(true);
				expect(Array.isArray({ foo: 123 })).toEqual(false);
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

				expect(arr1.concat(arr2)).toEqual(["a", "b", "c", "d", "e", "f"]);
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
				expect([].copyWithin.call({ length: 5, 3: 1 }, 0, 3)).toEqual({ 0: 1, 3: 1, length: 5 });
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
			it("should test whether all elements in the array pass the test implemented by the provided function", () =>
			{
				expect([12, 5, 8, 130, 44].every(isBigEnough)).toEqual(false);
				expect([15, 54, 18, 130, 44].every(isBigEnough)).toEqual(true);
			});
		});

		describe("Array.prototype.fill()", () =>
		{
			it("should fill all the elements of an array from a start index to an end index with a static value", () =>
			{
				expect([1, 2, 3].fill(4)).toEqual([4, 4, 4]);
				expect([1, 2, 3].fill(4, 1)).toEqual([1, 4, 4]);
				expect([1, 2, 3].fill(4, 1, 2)).toEqual([1, 4, 3]);
				expect([1, 2, 3].fill(4, 1, 1)).toEqual([1, 2, 3]);
				expect([1, 2, 3].fill(4, -3, -2)).toEqual([4, 2, 3]);
				expect([1, 2, 3].fill(4, NaN, NaN)).toEqual([1, 2, 3]);
				expect(Array(3).fill(4)).toEqual([4, 4, 4]);
				expect([].fill.call({ length: 3 }, 4)).toEqual({ 0: 4, 1: 4, 2: 4, length: 3 });
			});
		});

		describe("Array.prototype.filter()", () =>
		{
			it("should create a new array with all elements that pass the test implemented by the provided function", () =>
			{
				const isNumber = function(obj)
				{
					return obj !== undefined && typeof (obj) === "number" && !isNaN(obj);
				}
				const filterByID = function(item)
				{
					if (isNumber(item.id))
					{
						return true;
					}
					invalidEntries++;
					return false;
				}
				const filterItems = function(query)
				{
					return fruits.filter(function(el)
					{
						return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
					})
				}

				var arr = [
					{ id: 15 },
					{ id: -1 },
					{ id: 0 },
					{ id: 3 },
					{ id: 12.2 },
					{},
					{ id: null },
					{ id: NaN },
					{ id: "undefined" }
				];
				var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
				var invalidEntries = 0;
				var expected = [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }];
				var actual = arr.filter(filterByID);

				expect(actual).toEqual(expected);
				expect(invalidEntries).toEqual(4);
				expect(filterItems('ap')).toEqual(['apple', 'grapes']);
				expect(filterItems('an')).toEqual(['banana', 'mango', 'orange']);
			});
		});

		describe("Array.prototype.find()", () =>
		{
			it("should return the value of the first element in the array that satisfies the provided testing function, else, undefined", () =>
			{
				const findCherries = function(fruit)
				{
					return fruit.name === 'cherries';
				}
				var inventory = [
					{ name: 'apples', quantity: 2 },
					{ name: 'bananas', quantity: 0 },
					{ name: 'cherries', quantity: 5 }
				];

				expect([12, 5, 8, 130, 44].find(isBigEnough)).toEqual(130);
				expect([12, 5, 8].find(isBigEnough)).toEqual(undefined);
				expect(inventory.find(findCherries)).toEqual({ name: 'cherries', quantity: 5 });
			});
		});

		describe("Array.prototype.findIndex()", () =>
		{
			it("should return the index of the first element in the array that satisfies the provided testing function, or -1", () =>
			{
				expect([12, 5, 8, 130, 44].findIndex(isBigEnough)).toEqual(3);
				expect([12, 5, 8].findIndex(isBigEnough)).toEqual(-1);
			});
		});

		describe("Array.prototype.forEach()", () =>
		{
			it("should execute a provided function once for each array element", () =>
			{
				const items = ['item1', 'item2', 'item3'];
				let copiedItems = [];
				items.forEach(function(item)
				{
					copiedItems.push(item)
				});

				expect(copiedItems).toEqual(items);
			});
		});

		describe("Array.prototype.includes()", () =>
		{
			it("should determine whether an array includes a certain element, returning true or false as appropriate", () =>
			{
				expect([1, 2, 3].includes(2)).toEqual(true);
				expect([1, 2, 3].includes(4)).toEqual(false);
				expect([1, 2, 3].includes(3, 3)).toEqual(false);
				expect([1, 2, 3].includes(3, -1)).toEqual(true);
				expect([1, 2, NaN].includes(NaN)).toEqual(true);
			});
		});

		describe("Array.prototype.indexOf()", () =>
		{
			it("should return the first index at which a given element can be found in the array, or -1 if it is not present", () =>
			{
				const array = [2, 9, 9];
				expect(array.indexOf(2)).toEqual(0);
				expect(array.indexOf(7)).toEqual(-1);
				expect(array.indexOf(9, 2)).toEqual(2);
				expect(array.indexOf(2, -1)).toEqual(-1);
				expect(array.indexOf(2, -3)).toEqual(0);
			});
		});

		describe("Array.prototype.join()", () =>
		{
			it("should join all elements of an array (or an array-like object) into a string", () =>
			{
				const a = ['Wind', 'Rain', 'Fire'];
				expect(a.join()).toEqual('Wind,Rain,Fire');
				expect(a.join(', ')).toEqual('Wind, Rain, Fire');
				expect(a.join(' + ')).toEqual('Wind + Rain + Fire');
				expect(a.join('')).toEqual('WindRainFire');
			});
		});

		describe("Array.prototype.keys()", () =>
		{
			it("should return a new Array Iterator that contains the keys for each index in the array", () =>
			{
				const arr = ['a', 'b', 'c'];
				const iterator = arr.keys();

				expect(iterator.next()).toEqual({ value: 0, done: false });
				expect(iterator.next()).toEqual({ value: 1, done: false });
				expect(iterator.next()).toEqual({ value: 2, done: false });
				expect(iterator.next()).toEqual({ value: undefined, done: true });

				const a = ['a', , 'c'];
				const sparseKeys = Object.keys(a);
				const denseKeys = [...a.keys()];

				expect(sparseKeys).toEqual(['0', '2']);
				expect(denseKeys).toEqual([0, 1, 2]);
			});
		});

		describe("Array.prototype.lastIndexOf()", () =>
		{
			it("should return the last index at which a given element can be found in the array, or -1 if it is not present", () =>
			{
				const numbers = [2, 5, 9, 2];

				expect(numbers.lastIndexOf(2)).toEqual(3);
				expect(numbers.lastIndexOf(7)).toEqual(-1);
				expect(numbers.lastIndexOf(2, 3)).toEqual(3);
				expect(numbers.lastIndexOf(2, 2)).toEqual(0);
				expect(numbers.lastIndexOf(2, -2)).toEqual(0);
				expect(numbers.lastIndexOf(2, -1)).toEqual(3);
			});
		});

		describe("Array.prototype.map()", () =>
		{
			it("should create a new array with the results of calling a provided function on every element in the calling array", () =>
			{
				const numbers = [1, 4, 9];
				const roots = numbers.map(Math.sqrt);
				const kvArray = [
					{ key: 1, value: 10 },
					{ key: 2, value: 20 },
					{ key: 3, value: 30 }
				];

				const reformattedArray = kvArray.map(function(obj)
				{
					var rObj = {};
					rObj[obj.key] = obj.value;
					return rObj;
				});

				expect(numbers).toEqual([1, 4, 9]);
				expect(roots).toEqual([1, 2, 3]);

				expect(kvArray).toEqual([{ key: 1, value: 10 }, { key: 2, value: 20 }, { key: 3, value: 30 }]);
				expect(reformattedArray).toEqual([{ 1: 10 }, { 2: 20 }, { 3: 30 }]);
			});
		});

		describe("Array.prototype.pop()", () =>
		{
			it("should remove the last element from an array and return that element", () =>
			{
				let a = [1, 2, 3];
				a.pop();

				expect(a).toEqual([1, 2]);

				let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
				let popped = myFish.pop();

				expect(myFish).toEqual(['angel', 'clown', 'mandarin']);
				expect(popped).toEqual('sturgeon');
			});
		});

		describe("Array.prototype.push()", () =>
		{
			it("should add one or more elements to the end of an array and return the new length of the array", () =>
			{
				var sports = ['soccer', 'baseball'];
				var total = sports.push('football', 'swimming');

				expect(sports).toEqual(['soccer', 'baseball', 'football', 'swimming']);
				expect(total).toEqual(4);

				var vegetables = ['parsnip', 'potato'];
				var moreVegs = ['celery', 'beetroot'];

				Array.prototype.push.apply(vegetables, moreVegs);
				expect(vegetables).toEqual(['parsnip', 'potato', 'celery', 'beetroot']);
			});
		});

		describe("Array.prototype.reduce()", () =>
		{
			it("should apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value", () =>
			{
				var total = [0, 1, 2, 3].reduce(function(sum, value)
				{
					return sum + value;
				}, 0);

				var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b)
				{
					return a.concat(b);
				}, []);
				var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

				var countedNames = names.reduce(function(allNames, name)
				{
					if (name in allNames)
					{
						allNames[name]++;
					}
					else
					{
						allNames[name] = 1;
					}
					return allNames;
				}, {});
				var friends = [{
					name: 'Anna',
					books: ['Bible', 'Harry Potter'],
					age: 21
				}, {
					name: 'Bob',
					books: ['War and peace', 'Romeo and Juliet'],
					age: 26
				}, {
					name: 'Alice',
					books: ['The Lord of the Rings', 'The Shining'],
					age: 18
				}];

				var allbooks = friends.reduce(function(prev, curr)
				{
					return [...prev, ...curr.books];
				}, ['Alphabet']);

				expect(total).toEqual(6);
				expect(flattened).toEqual([0, 1, 2, 3, 4, 5]);
				expect([0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr)).toEqual(10);
				expect(countedNames).toEqual({ 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 });
				expect(allbooks).toEqual([
					'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
					'Romeo and Juliet', 'The Lord of the Rings',
					'The Shining'
				]);
			});
		});

		describe("Array.prototype.reduceRight()", () =>
		{
			it("should apply a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value", () =>
			{
				var flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b)
				{
					return a.concat(b);
				}, []);
				var sum = [0, 1, 2, 3].reduceRight(function(a, b)
				{
					return a + b;
				});

				expect(flattened).toEqual([4, 5, 2, 3, 0, 1]);
				expect(sum).toEqual(6);
			});
		});

		describe("Array.prototype.reverse()", () =>
		{
			it("should reverse an array in place", () =>
			{
				var a = ['one', 'two', 'three'];
				a.reverse();

				expect(a).toEqual(['three', 'two', 'one']);
			});
		});

	});
})();
