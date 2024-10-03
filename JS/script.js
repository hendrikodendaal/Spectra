const url = 'https://streaming-availability.p.rapidapi.com/shows/%7Btype%7D/%7Bid%7D';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '66ff2bcc70msh8505e5847f6dc33p1b45b8jsne542b7641872',
		'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}