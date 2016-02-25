/*
	Creating a number formatter library
*/

function NumFormat(number){
	
	var about = {
		Version : 1.0,
		Author : "Sharad Tanwar",
		Creation_Date : "Feb-24-2016"
	}

	if(number){
		//console.log(number);
		if (window === this) {
        	return new NumFormat(number);
      	}
      	this.number = number;
		return this;
	}else{
		return about;
	}

}

NumFormat.prototype = {
	display : function(format){
		//console.log(this.number);

		if(format =="US"){
			this.number = this.number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		else if(format == "IN"){
			if(this.number.length>=4){
				this.number = this.number.substr(0,this.number.length - 3) + "," + this.number.substr(-3);
			}
		}
		
		return this.number;
	},
	fType : function(){
		var n = this.number;
		if(n.length>9){
			this.number = this.number.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "bn";
		}else if(n.length > 6){
			this.number = this.number.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "mn";
		}else if(n.length > 3){
			this.number = this.number.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "k";
			//this.number.substr(0,this.number.length - 3) + "," + this.number.substr(-3)
		}
		return this.number;
	}
//...
};