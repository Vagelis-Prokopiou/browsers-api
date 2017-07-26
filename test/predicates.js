const isFunction = param => typeof param === 'function';
const isEmptyString = param => typeof param === 'string' && param.length === 0;
const isString = param => typeof param === 'string' && !isEmptyString(param);
const isObject = param => typeof param === 'object' && !Array.isArray(param);
const isArray = param => typeof param === 'object' && Array.isArray(param);
const isInteger = param => typeof param === 'number' && !isNaN(param) && param !== Infinity && (param % 1 === 0);
const isPositiveInteger = param => isInteger(param) && param > 0;
const isNegativeInteger = param => isInteger(param) && param < 0;
const isFloat = param => typeof param === 'number' && !isNaN(param) && param !== Infinity && (param % 1 !== 0);
const isPositiveFloat = param => isFloat(param) && param > 0;
const isNegativeFloat = param => isFloat(param) && param < 0;


describe("isFunction(param)", () =>
{
    it("should return true if the param is a function, false otherwise", () =>
    {
        const myFunc = () => 'hello';

        expect(isFunction(isFunction)).toBe(true);
        expect(isFunction(myFunc)).toBe(true);
        expect(isFunction(Array.isArray)).toBe(true);
        expect(isFunction(() => { })).toBe(true);
        expect(isFunction(function() { })).toBe(true);
        expect(isFunction([])).toBe(false);
        expect(isFunction({})).toBe(false);
        expect(isFunction(NaN)).toBe(false);
        expect(isFunction(undefined)).toBe(false);
        expect(isFunction('')).toBe(false);
        expect(isFunction(Infinity)).toBe(false);
    });
});

describe("isEmptyString(param)", () =>
{
    it("should return true if the param is a zero lenght string, false otherwise", () =>
    {
        expect(isEmptyString('')).toBe(true);
        expect(isEmptyString('test')).toBe(false);
        expect(isEmptyString([])).toBe(false);
        expect(isEmptyString({})).toBe(false);
        expect(isEmptyString(undefined)).toBe(false);
        expect(isEmptyString(NaN)).toBe(false);
    });
});

describe("isString(param)", () =>
{
    it("should return true if the param is a non empty string, false otherwise", () =>
    {
        expect(isString('a')).toBe(true);
        expect(isString(Array.isArray)).toBe(false);
        expect(isString(() => { })).toBe(false);
        expect(isString(function() { })).toBe(false);
        expect(isString([])).toBe(false);
        expect(isString({})).toBe(false);
        expect(isString(NaN)).toBe(false);
        expect(isString(undefined)).toBe(false);
        expect(isString('')).toBe(false);
        expect(isString(Infinity)).toBe(false);
    });
});

describe("isObject(param)", () =>
{
    it("should return true if the param is an object, false otherwise", () =>
    {
        expect(isObject({})).toBe(true);
        expect(isObject('a')).toBe(false);
        expect(isObject(Array.isArray)).toBe(false);
        expect(isObject(() => { })).toBe(false);
        expect(isObject(function() { })).toBe(false);
        expect(isObject([])).toBe(false);
        expect(isObject(NaN)).toBe(false);
        expect(isObject(undefined)).toBe(false);
        expect(isObject('')).toBe(false);
        expect(isObject(Infinity)).toBe(false);
    });
});

describe("isArray(param)", () =>
{
    it("should return true if the param is an object, false otherwise", () =>
    {
        expect(isArray([])).toBe(true);
        expect(isArray([{}, {}])).toBe(true);
        expect(isArray(Array.isArray)).toBe(false);
        expect(isArray({})).toBe(false);
        expect(isArray('a')).toBe(false);
        expect(isArray(() => { })).toBe(false);
        expect(isArray(function() { })).toBe(false);
        expect(isArray(NaN)).toBe(false);
        expect(isArray(undefined)).toBe(false);
        expect(isArray('')).toBe(false);
        expect(isArray(Infinity)).toBe(false);
    });
});

describe("isInteger(param)", () =>
{
    it("should return true if the param is an integer, false otherwise", () =>
    {
        expect(isInteger(1)).toBe(true);
        expect(isInteger(0)).toBe(true);
        expect(isInteger(-1)).toBe(true);
        expect(isInteger([])).toBe(false);
        expect(isInteger([{}, {}])).toBe(false);
        expect(isInteger({})).toBe(false);
        expect(isInteger('a')).toBe(false);
        expect(isInteger(() => { })).toBe(false);
        expect(isInteger(function() { })).toBe(false);
        expect(isInteger(NaN)).toBe(false);
        expect(isInteger(undefined)).toBe(false);
        expect(isInteger('')).toBe(false);
        expect(isInteger(Infinity)).toBe(false);
    });
});

describe("isPositiveInteger(param)", () =>
{
    it("should return true if the param is a positive integer, false otherwise", () =>
    {
        expect(isPositiveInteger(1)).toBe(true);
        expect(isPositiveInteger(0)).toBe(false);
        expect(isPositiveInteger(-1)).toBe(false);
        expect(isPositiveInteger([])).toBe(false);
        expect(isPositiveInteger([{}, {}])).toBe(false);
        expect(isPositiveInteger({})).toBe(false);
        expect(isPositiveInteger('a')).toBe(false);
        expect(isPositiveInteger(() => { })).toBe(false);
        expect(isPositiveInteger(function() { })).toBe(false);
        expect(isPositiveInteger(NaN)).toBe(false);
        expect(isPositiveInteger(undefined)).toBe(false);
        expect(isPositiveInteger('')).toBe(false);
        expect(isPositiveInteger(Infinity)).toBe(false);
    });
});

describe("isNegativeInteger(param)", () =>
{
    it("should return true if the param is a positive integer, false otherwise", () =>
    {
        expect(isNegativeInteger(-1)).toBe(true);
        expect(isNegativeInteger(1)).toBe(false);
        expect(isNegativeInteger(0)).toBe(false);
        expect(isNegativeInteger([])).toBe(false);
        expect(isNegativeInteger([{}, {}])).toBe(false);
        expect(isNegativeInteger({})).toBe(false);
        expect(isNegativeInteger('a')).toBe(false);
        expect(isNegativeInteger(() => { })).toBe(false);
        expect(isNegativeInteger(function() { })).toBe(false);
        expect(isNegativeInteger(NaN)).toBe(false);
        expect(isNegativeInteger(undefined)).toBe(false);
        expect(isNegativeInteger('')).toBe(false);
        expect(isNegativeInteger(Infinity)).toBe(false);
    });
});

describe("isFloat(param)", () =>
{
    it("should return true if the param is a float, false otherwise", () =>
    {
        expect(isFloat(1.1)).toBe(true);
        expect(isFloat(-1.1)).toBe(true);
        expect(isFloat(1)).toBe(false);
        expect(isFloat(0)).toBe(false);
        expect(isFloat(-1)).toBe(false);
        expect(isFloat([])).toBe(false);
        expect(isFloat([{}, {}])).toBe(false);
        expect(isFloat({})).toBe(false);
        expect(isFloat('a')).toBe(false);
        expect(isFloat(() => { })).toBe(false);
        expect(isFloat(function() { })).toBe(false);
        expect(isFloat(NaN)).toBe(false);
        expect(isFloat(undefined)).toBe(false);
        expect(isFloat('')).toBe(false);
        expect(isFloat(Infinity)).toBe(false);
    });
});

describe("isPositiveFloat(param)", () =>
{
    it("should return true if the param is a positive float, false otherwise", () =>
    {
        expect(isPositiveFloat(1.1)).toBe(true);
        expect(isPositiveFloat(-1.1)).toBe(false);
        expect(isPositiveFloat(1)).toBe(false);
        expect(isPositiveFloat(0)).toBe(false);
        expect(isPositiveFloat(-1)).toBe(false);
        expect(isPositiveFloat([])).toBe(false);
        expect(isPositiveFloat([{}, {}])).toBe(false);
        expect(isPositiveFloat({})).toBe(false);
        expect(isPositiveFloat('a')).toBe(false);
        expect(isPositiveFloat(() => { })).toBe(false);
        expect(isPositiveFloat(function() { })).toBe(false);
        expect(isPositiveFloat(NaN)).toBe(false);
        expect(isPositiveFloat(undefined)).toBe(false);
        expect(isPositiveFloat('')).toBe(false);
        expect(isPositiveFloat(Infinity)).toBe(false);
    });
});

describe("isNegativeFloat(param)", () =>
{
    it("should return true if the param is a positive float, false otherwise", () =>
    {
        expect(isNegativeFloat(-1.1)).toBe(true);
        expect(isNegativeFloat(1.1)).toBe(false);
        expect(isNegativeFloat(-1)).toBe(false);
        expect(isNegativeFloat(1)).toBe(false);
        expect(isNegativeFloat(0)).toBe(false);
        expect(isNegativeFloat([])).toBe(false);
        expect(isNegativeFloat([{}, {}])).toBe(false);
        expect(isNegativeFloat({})).toBe(false);
        expect(isNegativeFloat('a')).toBe(false);
        expect(isNegativeFloat(() => { })).toBe(false);
        expect(isNegativeFloat(function() { })).toBe(false);
        expect(isNegativeFloat(NaN)).toBe(false);
        expect(isNegativeFloat(undefined)).toBe(false);
        expect(isNegativeFloat('')).toBe(false);
        expect(isNegativeFloat(Infinity)).toBe(false);
    });
});
