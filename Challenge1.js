function mergingObjs(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const object1 = { car: 'Toyota' };
const object2 = { phone: 'Samsung' };
const merged = mergingObjs(object1, object2);
console.log(merged); 