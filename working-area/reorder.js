
function banana(){
var x = [1,1000,2018,3,10,9000,23,2019,10519, 123412342134, 190976];
for (var j=1; j<=x.length; j++){
  for (var i=x.length-1; i>=1; i--){
    console.log(x[i]);
    if (x[i] > x[i-1]){
      console.log(x[i]+" greater than "+x[i-1]);
    } else {
      console.log("smaller");
      var change=x[i];
      x[i]=x[i-1];
      x[i-1]=change;
    }
  }
}
console.log(x);
}
banana();
