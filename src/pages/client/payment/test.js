const fruits = [{id:"201001", qty: 100},{id:"202020"}];
const i = fruits.findIndex(e => e.id === '201001');
if (i > -1) {
  fruits[i] = {...fruits[i], qty: fruits[i].qty+50}
}else {
fruits.push({id:'5000', qty: 2})
}
console.log(fruits)