class Set1 {
    private num: number[]
    has(value: number): boolean {
        for(let i = 0; i < this.num.length; i++) {
            if(value === this.num[i]) {
                return true
            }
        }
        return false
    }
    add(value: number): Set1 {
        //...
    }
}

class MutableSet extends Set1 {
    delete(value: number): boolean {
        
    }
    add(value: number): this {  // Set1은 Set1을 반환, MutableSet은 MutableSet을 반환한다.

    }
}

let set = new Set1
set.add(1).add(2).add(3)
set.has(2)
set.has(4)
