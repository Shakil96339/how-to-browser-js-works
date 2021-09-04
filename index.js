console.log(111111);
console.log(222222);
// setTimeout(() => {
// 	console.log("aaaa"
//     );
// }, 3000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then(response => response.json())
	.then(json => console.log(json));
console.log(3333333);
console.log(444444);
