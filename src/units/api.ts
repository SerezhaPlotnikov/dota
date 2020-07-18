// https://api.opendota.com/api/

export async function callApi(
	url: string,
	method: string,
	path: string,
	data?: any,
) {
	const res = await fetch(`${url}/api${path}`, {
		method,
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return res.json();
}
