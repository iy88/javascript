class Stack {
    constructor() {
        this.items = new WeakMap();
        this.count = new WeakMap();
        this.count.set(this, 0);
        this.items.set(this, {});
    }

    push(element) {
        const items = this.items.get(this);
        const count = this.count.get(this);
        items[count] = element;
        this.count.set(this, count + 1);
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        const items = this.items.get(this);
        let count = this.count.get(this);
        count--;
        this.count.set(this, count);
        const result = items[count];
        delete items[count];
        return result;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        const items = this.items.get(this);
        const count = this.count.get(this);
        return items[count - 1];
    }

    isEmpty() {
        return this.count.get(this) === 0;
    }

    size() {
        return this.count.get(this);
    }

    clear() {
        this.count.set(this, 0);
        this.items.set(this, {});
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        const items = this.items.get(this);
        const count = this.count.get(this);
        let objString = `${items[0]}`;
        for (let i = 1; i < count; i++) {
            objString = `${objString},${items[i]}`;
        }
        return objString;
    }
}

function baseCoverter(decNumber, base) {
    const remStack = new Stack();
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let number = decNumber;
    let rem;
    let baseString = '';
    if (!(base >= 2 && base <= 36)) {
        return ''
    }
    while (number > 0) {
        rem = Math.floor(number % base);
        remStack.push(rem);
        number = Math.floor(number / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return Number(baseString)
}
console.log(baseCoverter(100000000,));