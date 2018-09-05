// bad, no type checking done
// const person = require('./person');

// use for commonjs modules i.e. module.exports = ...
import person = require('./person');

// ok, via export function thingy () {}
// import { thingy } from './things';

// best, via export default ...
import thingy from './things';
// const thingy = require('./things');
// import thingy = require('./things');


console.log('starting');
function speak (message: string) {
    console.log(message);
}

// this will break because person() returns an object
// speak(person());

speak(thingy());

