


function matchHouses(step) {
	// if we noticed in images of the task description we will find that each time we need to
	//form more than one match we need for first one 6 matches then second we need 5 
	//and third we need 5 which means that if we need to make one match 
	// we follow this eq ((6)x(number of shapes))-(number of shapes-1)
	
	if(step>0){
	return (6*step)-(step-1)
	}
	else if(step==0){
		return 0
	}
	else{
		return 'cannot be negative number'
	}
}
  module.exports=matchHouses;