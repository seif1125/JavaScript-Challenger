function shiftToLeft(x, y) {
	
	let shift=Math.abs(y);
	let shiftPow=Math.pow(2,shift)
	return x*shiftPow
	
}
  module.exports=shiftToLeft;