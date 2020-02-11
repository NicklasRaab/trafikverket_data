function fetchWithCustomBody(body) {
  let response = fetch('https://api.trafikinfo.trafikverket.se/v2/data.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/xml'
      },
      body: body
  });

  return response;
}
