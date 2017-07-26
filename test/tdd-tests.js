describe('tddjs', () =>
{
    it('tddjs should be a window property', () =>
    {
        expect(window.tddjs).toBeDefined();
    });

    describe('tddjs.namespace(param)', () =>
    {
        afterEach(() =>
        {
            delete tddjs.nstest;
        });
        it('should create non-existent object', () =>
        {
            expect(tddjs.nstest).toBeUndefined();
            tddjs.namespace("nstest");
            expect(tddjs.nstest).toBeDefined();
            expect(typeof tddjs.nstest).toBe('object');
            expect(typeof tddjs.nstest === 'object').toBe(true);
        })

        it('should not overwrite existing objects', () =>
        {
            tddjs.nstest = { nested: {} };
            var result = tddjs.namespace("nstest.nested");

            expect(tddjs.nstest.nested).toBe(result);
            expect(tddjs.nstest.nested).toBeDefined();
            expect(typeof tddjs.nstest.nested).toBe('object');
            expect(typeof tddjs.nstest.nested === 'object').toBe(true);
        });

        it('should only create missing parts', () =>
        {
            var existing = {};
            tddjs.nstest = { nested: { existing: existing } };
            var result = tddjs.namespace("nstest.nested.ui");

            expect(existing).toBe(tddjs.nstest.nested.existing);
            expect(typeof tddjs.nstest.nested.ui).toBe('object');
            expect(typeof tddjs.nstest.nested.ui === 'object').toBe(true);
        });
    });
});
