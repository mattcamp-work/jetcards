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


var celcius = "inputCelcius";
var perfectTemp = 72;
var chillyTemp = 0;

function convertTemp(celcius){

var conversion = ((9/5) * celcius) + 32;
conversion = Math.round(conversion);

  if (conversion === perfectTemp) {

        //just use CSS to change visual shit, infact memorize this format, you'll use it all the time
        return $("body").css({"background-image":"url(../img/perfect-temp.jpg)"});
    
    } else if (conversion < perfectTemp ) {
        alert("it's cold yo");
    } else if (conversion > perfectTemp ) {
        alert("can I get sum A/C up in dis bitch?");
    };


}


//once you make a function, you need to call it. 
convertTemp(celcius);




