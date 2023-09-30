module.exports = class IcsParser {
	next(arr, obj) {
	
		let line = arr.splice(0,1)[0];
		console.log(line)
		switch(line[0]) 
		{
			case 'BEGIN':
				console.log(`BEGINING SUB OBJECT ${line[1]}`)
				obj.push([line[1], this.parseString(arr.map(e => e.join(':')).join('\n'))]);
				break;
			case 'END':
				console.log(`ENDING SUB OBJECT ${line[1]}`)
				//console.log(arr.slice(0,1))
				return null;
			default:	
				obj.push([line[0], line[1]]);
		}
	
		return arr;
	}

	parseString(cs) {
		
		let result = [];
	
		let arr = cs.split('\n');
		
		arr = arr.map(e => {let a = e.split(':'); let key = a.shift(); let value = a.join(':'); return [key, value]});
	
		arr = arr.filter(e => JSON.stringify(e) != JSON.stringify(['', ''])); // remove empty lines
	
		for (let line of arr) {
		
			let resultVar = this.next(arr, result);
			if (resultVar == null) {
				break;
			} else {
				arr = resultVar.map(e => e);
			}
			
		}
	
		return result;
	
	}
}

