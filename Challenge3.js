function filterNumbers(...args) {
    return args.filter(arg => typeof arg === 'number');
}
const result = filterNumbers(1, 'Goodbye', 2, true, 3.5, null, 'America', 4, false);
console.log(result); 