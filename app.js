/**
 * Created by wilson.campusano on 10/23/2014.
 */
Array.prototype.contains = function(element){
    var length = this.length;
    for(var idx = 0; idx < length; idx++){
        if(this[idx] === element){
            return true;
        }
    }
    return false;
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
        if(callback !== undefined && typeof callback === 'function'){
            if(!printers.contains(callback)){
                printers.push(callback);
            }
        }
        for(var idx =0; idx< printers.length; idx++){
            printers[idx](start);
        }
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