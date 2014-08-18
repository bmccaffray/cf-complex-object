var comObject = function(funcInput){
	var count = 0;
	var increment = function(){
		count++;
		return funcInput;
	};
	increment.getValue = function(){
		return count;
	}
	return increment;
};

module.exports = comObject;