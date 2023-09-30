import fs from 'fs';
import IcsParser from './ical-parser.cjs'; // import the module
import util from 'util';

const icsParser = new IcsParser(); // initialize an instance

const CalendarString = fs.readFileSync('./test.ics', 'utf-8') // get the ical as string

const icalObj = icsParser.parseString(CalendarString) // parseThe Calendar String

console.log(util.inspect(icalObj, {showHidden: false, depth: null, colors: true})) // shows the tree in full depth
console.log("###############################")
console.log(icalObj.VCALENDAR) // this only works if the root is a VCALENDAR
