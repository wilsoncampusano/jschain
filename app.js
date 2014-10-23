/**
 * Created by wilson.campusano on 10/23/2014.
 */
var Cal = function Cal( start ) {

	this.add = function add( x ) {
		start += x;
		return this;
	}.bind(this);

	this.multiply = function multiply( x ) {
		start *= x;
		return this;
	}.bind(this);

	this.toString = function toString( callback ) {
		callback( start );
		return this;
	}.bind(this);
};

var printer = function printer(){
	console.log(arguments);
};

var calculator = new Cal( 0 )
		.add( 2 )
		.add( 3 )
		.multiply( 5 )
		.toString( printer )
		.multiply( 10 )
		.toString( printer );