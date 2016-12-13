import _a$b from 'a:b';

var _tmpl = function ({
    i,
    f,
    e,
    h,
    v,
    s
}) {
    return h(
        "section",
        {
            "class": "bar"
        },
        [h(
            "ul",
            {
                "class": this.myList
            },
            f([v(
                _a$b,
                {},
                ["first"]
            ), i(this.items, item => {
                return h(
                    "li",
                    {
                        "class": "item"
                    },
                    [s(this.item)]
                );
            }), s(this.last)])
        )]
    );
};
const usedIdentifiers = ["myList", "items", "item", "this", "last"];

const DefaultMinValue = 5;
const DefaultMaxValue = 50;

class Bar {

    constructor() {
        this.counter = 0;
        this.itemClassName = 'item';
        this.data = [];
    }

    broza(x) {
        return x;
    }

    publicMethod() {
        console.log('test');
    }

    handleClick() {
        this.counter += 1;
        const newData = [];
        this.data = newData;
        console.log('clicked');
    }

    render(p) {
        return _tmpl.call(this, p);
    }

}
Bar.templateUsedProps = usedIdentifiers;
Bar.ns = 'default';
Bar.publicProps = {
    min: DefaultMinValue,
    max: DefaultMaxValue,
    label: null,
    title: function () {
        return { a: 1 };
    }
};
Bar.publicMethods = ['publicMethod'];

export default Bar;