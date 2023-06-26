const chainCondition = (str, divisor) => {
    console.log({ str, divisor })
    return (number) => {
        console.log({ number })
        return (next = number) => {
            console.log({next, number})
            return number % divisor == 0 ? str + (next === number ? "" : next) : next;
        }
    }
}
const fizz = chainCondition("Fizz", 3); // fn on dividend or number basically. 
const buzz = chainCondition("Buzz", 5);
// console.log(fizz(1)())
const genarateFizzBuzzString = i => fizz(i)(buzz(i)());
let ar = []
for (let i = 1; i <= 46; i++) {
    ar.push(genarateFizzBuzzString(i))
}

console.log(ar.join(" "));
