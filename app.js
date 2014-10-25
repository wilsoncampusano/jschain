/**
 * Created by wilson.campusano on 10/23/2014.
 */
Array.prototype.notContains = function(element){
    var isNotIn = true;
    this.forEach(function(thisElement)
        { if(thisElement === element) isNotIn = false; });
    return isNotIn;
}

function isAFuntion(callback) {
    return callback !== undefined
        && typeof callback === 'function';
}

var Cal = function Cal( start ) {
    var printers = [];
	this.add = function add( x ) {
		start += x;
		return this;
	}.bind(this);

	this.multiply = function multiply( x ) {
		start *= x;
		return this;
	}.bind(this);

	this.toString = function toString( callback ) {
        if(isAFuntion(callback) && printers.notContains(callback)){
            printers.push(callback);
        }
        printers.forEach(function(printer){ printer(start); });
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
		.toString();