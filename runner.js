import fs from 'fs';
import IcsParser from './ical-parser.cjs'; 

const icsParser = new IcsParser();

const CalendarString = fs.readFileSync('./test.ics', 'utf-8')

console.log(icsParser)

const result = icsParser.parseString(CalendarString)

console.log(result)
console.log("###############################")
console.log(result.VCALENDAR)
