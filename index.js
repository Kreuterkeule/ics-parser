const fs = require('fs');

function parseObject(index, key, value, obj, arr) {
	obj[value] = {}


	console.log(index, key, value);
}

let myCalendarString = fs.readFileSync('./test.ics', 'utf-8')
let obj = {'VCALENDAR': [], 'VEVENT': [], 'VJOURNAL': []};
let arr = myCalendarString.split('\n').map(e => e.split(':'));
arr = arr.filter(e => e.length > 1);

let objectLocations = arr.map((e, i) => {if (e[0] == 'BEGIN') { return ['BEGIN', e[1], i];}}).filter(e => e);

objectLocations.forEach(e => obj[e[1]].push({index: e[2]}));

let resultObj = {'VCALENDAR': [], 'VEVENT': [], 'VJOURNAL': []}

for (let key of Object.keys(obj)) {
	for (let object of obj[key]) {
		console.log(object.index);
		let subArr = arr.slice(object.index);
		let endIndex;
		for (let line of subArr) {
			if (line[0] == 'END') {
				endIndex = subArr.indexOf(line);
				break;
			}
		}
		subArr = subArr.slice(1, endIndex);
		console.log(subArr);
		let result = {};

		for (let line of subArr) {
			result[line[0]] = line[1];
		}

		resultObj[key].push(result)
	}
}

console.log(arr);
console.log(resultObj);
