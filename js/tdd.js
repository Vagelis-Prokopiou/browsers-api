var tddjs = (function()
{
    var log = console.log;
    function namespace(string)
    {
        var object = this;
        var levels = string.split(".");
        var length = levels.length;

        // for (var i = 0; i < length; i++)
        // {
        //     if (typeof object[levels[i]] === "undefined")
        //     {
        //         object[levels[i]] = {};
        //     }
        //     object = object[levels[i]];
        // }

        levels.forEach(function(item)
        {
            if (typeof object[item] === "undefined")
            {
                object[item] = {};
            }
            object = object[item];
        });
        return object;
    }

    return {
        namespace
    };
}());


