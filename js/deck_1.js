var Deck = function(){};

var Card = function(){};

Card.prototype._front = "";
Card.prototype._back = "";
Card.prototype._id = "";



//var Deck = new Array([]);

Deck.prototype._name = "test deck";
Deck.prototype._subject = "state capitals";
Deck.prototype.cards = new Array([]);


Deck.prototype.card_count = function(){
	console.log(this.cards.length);
};


var matt = new Deck();

matt._name = "matt's deck";
matt._subject = "dogs";

for (var i=0;i<20;i++)
{ 
matt.cards[i] = new Card();
};





