import fs from 'fs';
import IcsParser from './ical-parser.cjs';
import util from 'util';

const icsParser = new IcsParser();

const CalendarString = fs.readFileSync('./test.ics', 'utf-8')

console.log(icsParser)

const result = icsParser.parseString(CalendarString)

console.log(util.inspect(result, {showHidden: false, depth: null, colors: true}))
console.log("###############################")
console.log(result.VCALENDAR)
