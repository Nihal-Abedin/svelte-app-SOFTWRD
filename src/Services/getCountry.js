const getContries = async () => {
	let data = null;
	let error = null;
	try {
		const response = await fetch('https://restcountries.com/v3.1/all');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		data = await response.json();
	} catch (err) {
		error = err;
	}
	return { data, error };
};
export default getContries;
