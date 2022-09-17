
const delay = ms => new Promise(res => setTimeout(res, ms));

onmessage = async (e) => {
	console.log(e.data);


	postMessage('loading');

	await delay(2000);

	postMessage('success');

	return;

	await fetch('/api/post', {
		method: 'POST',
		body: JSON.stringify(e), 
	});

	postMessage('OK');
	fetch('/api/post', {
		method: 'POST',
		body: JSON.stringify(e), 
	});
}


