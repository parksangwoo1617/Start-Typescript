type Food = {
    calories: number
    tasty: boolean
}

type Sushi = Food & {
    salty: boolean
}

type Cake = Food & {
    sweet: boolean
}

interface Sushi2 extends Food {
    salty: boolean
}

interface Cake2 extends Food {
    sweet: boolean
}