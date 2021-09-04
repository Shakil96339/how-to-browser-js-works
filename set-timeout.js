let seconds = 0;
const timeId = setInterval(() => {
	seconds++;
	console.log(seconds);
	if (seconds > 5) {
		clearInterval(timeId);
	}
}, 1000);

// let seconds = 0;
// const timeid = setTimeout(() => {
// 	seconds++;
// 	console.log(seconds);
// 	if (seconds > 5) {
// 		clearTimeout(timeId);
// 	}
// }, 1000);
