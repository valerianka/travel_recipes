if (Meteor.isServer) {
	Meteor.startup(function () {
		if (Ingredients.find().count() === 0) {
			Ingredients.insert({
				_id: '1',
				ingredientPic: "http://exp.cdn-hotels.com/hotels/1000000/30000/20100/20073/20073_421_z.jpg",
				name: "Grand Hotel",
				type: "lodging",
				duration: "3 days",
				cost: 85,
				address: "123 Main St., Paris, France",
				website: "www.grandhotel.com"
			});
			Ingredients.insert({
				_id: '2',
				ingredientPic: "http://goweloveit.s3.amazonaws.com/wp-content/uploads/2014/08/Red-Wine-on-Summer-Day.jpg",
				name: "wine",
				type: "activity",
				duration: "4 hours",
				cost: 95,
				address: "223 Main St., Paris, France",
				website: "www.champagne.com"
			});
			Ingredients.insert({
				_id: '3',
				ingredientPic: "http://i.telegraph.co.uk/multimedia/archive/02694/taxi-paris_2694943b.jpg",
				name: "taxi",
				type: "transportation",
				duration: "1 hour",
				cost: 25,
				address: "523 Main St., Paris, France",
				website: "www.yellowtaxi.com"
			});
		}

		if (Recipes.find().count() === 0) {
			Recipes.insert({
				name: "French Wine Tour",
				location: "France",
				duration: 3,
				mainImage: "http://1af60cd74e95fe387bc8-1bfee98aeb105b45275a9419b6310abb.r63.cf1.rackcdn.com/164/2/large.jpg",
				summary: "This will be so cool!",
				dateCreated: new Date(),
				userName: "diedra",
				ingredients: [1,2,3]
			});
			Recipes.insert({
				name: "Our Trip",
				location: "Australia",
				duration: 24,
				mainImage: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSu70QunAdWz8tA0NulCGphvFhvipWDQFv34hw6ncdo6GFvaXjL",
				summary: "All-over Austrailia",
				dateCreated: new Date(),
				userName: "diedra"
			});
			Recipes.insert({
				name: "Backpacking",
				location: "Yosemite",
				duration: 6,
				mainImage: "http://travel.nationalgeographic.com/u/TvyamNb-BivtNwpvn7Sct0VFDulyAfA9wBcU0gVHVnqC5ghsgrXDA9wT3zkYEWzhEXuT-mTEtIc4rt2nCw/",
				summary: "Yoemite high-country trip",
				dateCreated: new Date(),
				userName: "diedra"
			});
		}
	});
}
