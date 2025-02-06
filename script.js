const randomNum = (num) => {
	return Math.floor(Math.random()*num)
}

const message = {
	month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	sign: ["Aries", "Taurus",	"Gemini",	"Cancer",	"Leo",	"Virgo", "Libra",	"Scorpio",	"Sagittarius",	"Capricorn",	"Aquarius", "Pisces"],
	advice: ["Love will knock on your door... but don't forget to open it!", "Your luck will be as big as your smile today.", "Fortune smiles upon you, but it has a soft spot for kisses!", "Love is in the air... and in your horoscope!", "Your lucky star shines bright, even if you can't see it.", "Luck follows you like your shadow... but brighter!", "Love will find you, even if you're hiding under the covers!", "Fortune awaits you around the corner... or on the couch!", "Your luck is in shape today, take advantage and dance!", "Love will make your head spin... in a good way!", "Fortune smiles upon you, but it loves surprises!", "Luck is your best accessory today, wear it proudly!", "Love is playing tricks on you today... but you'll laugh bitterly!", "Luck forgot you this morning, it preferred coffee!", "Fortune says: 'Maybe tomorrow... or never!'", "Love is playing tricks on you... and leaving you the bill!", "Luck is on vacation, it left you its black cat!", "Fortune winks at you... but only to tease you more!"]
}

for (let find in message) {
	let fortuneTeller = randomNum(message[find].length)
	switch(find) {
		case 'month' :
			console.log(message[find][fortuneTeller])
			break
		case 'sign' :
			console.log(message[find][fortuneTeller])
			break
		case 'advice' :
			console.log(message[find][fortuneTeller])
			break
	}
}

