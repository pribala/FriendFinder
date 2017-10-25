var friends = require("../data/friends.js");

module.exports = function(app) {
	
	// API GET Routes
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});  
		
	
	// API POST Route
	app.post("/api/friends", function(req, res) {
	  // req.body hosts is equal to the JSON post sent from the user
	  // This works because of our body-parser middleware
	  var newFriend = req.body;
	  var match = compatibilityTest(newFriend);
	  friends.push(newFriend);
	  res.json(match);
	});
};

function compatibilityTest(curObj) {
	var curObjScores = curObj.scores.map(Number);
	var totalDifference = 0;
	var minDiff = 10000;
	var compatible = {};
	var counter = [];
	for(var j=0; j<friends.length; j++){
		totalDifference = 0;
		for(var i=0;i<friends[j].scores.length; i++){
			totalDifference += Math.abs(friends[j].scores[i]-curObjScores[i]);
		}
		if(totalDifference<minDiff){
			minDiff = totalDifference;
			compatible = friends[j];
		}
		//totalDifference.push({"name":friends[j].name, "total":total});
		counter.push(totalDifference);
	};
	console.log(minDiff);
	console.log(compatible.name);
	console.log(counter);
	return compatible;
}