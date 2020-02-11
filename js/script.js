const getDataFromTrafikverket = async (api_key) => {

    const request_body_trafic = await getTraficBody(api_key);
    const request_body_noise = await getNoiseBody(api_key);

    const response_trafic = await fetchWithCustomBody(request_body_trafic);
    const response_noise = await fetchWithCustomBody(request_body_noise);

    let data_trafic = await response_trafic.json();
    let data_noise = await response_noise.json();

    dataObject = {
      trafic: data_trafic,
      noise: data_noise
    }

    return dataObject;
}

function testTest(stuff) {
  console.log(stuff);
  return stuff
}


const api_key = 'f8dc88a7e302436e8753039d67579de0';
const coordinates = '356363.36 6213391.38';
getDataFromTrafikverket(api_key)
    .then(data => testTest(data))
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message));
