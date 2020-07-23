const apiKey =
	'ne31UZherRvk30wOZAbEIipBgBefluiHCFhkgy0X86oIctqumASSGjA5xAt36T5BQo5jFZarFGfsltb3JjRREg0vq66YOG54z6k_IBKcXDrby20cs5BHN42TxeYZX3Yx';

const Yelp = {
	async search(term, location, sortBy) {
		const URL = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;

		const response = await fetch('https://cors-anywhere.herokuapp.com/' + URL, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		});
		const jsonResponse = await response.json();
		try {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map((business) => ({
					id: business.id,
					imageSrc: business.image_url,
					name: business.name,
					address: business.location.address1,
					city: business.location.city,
					state: business.location.state,
					zipCode: business.location.zip_code,
					category: business.categories[0].title,
					rating: business.rating,
					reviewCount: business.review_count,
				}));
			}
		} catch (err) {
			throw new Error(err);
		}
	},
};

export default Yelp;
