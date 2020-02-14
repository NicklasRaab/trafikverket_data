// https://github.com/opendata-stuttgart/meta/wiki/APIs
// https://oppnadata.se/#noscroll
// https://oppnadata.se/datamangd/#esc_entry=758&esc_context=694
// läsa av google maps hur mycket folk det är på en plats
// foursquare
//
//



const getDataFromTrafikverket = async (api_key) => {

    const request_body_trafic = await getTraficBody(api_key);
    // const request_body_train = await getTrainBody(api_key);

    const response_trafic = await fetchWithCustomBody(request_body_trafic);
    // const response_train = await fetchWithCustomBody(request_body_train);

    let data_trafic = await response_trafic.json();
    // let data_train = await response_train.json();

    dataObject = {
      trafic: data_trafic,
      // train: data_train
    }

    // sol moln regn
    // dag upp och ner
    // mängd regn
    // luftkvalitet
    // trafik
    // färjor
    // soltimmar
    // "mängd" sol
    // öppettider (hårdkoder)
    // orstider (hårdkoda)
    // någon nämner helsingborgs stad (twitter api)
    // polisen (har de api?)
    // trafikolycka (api?)

    // en array per dataström
    // kan uppdateras oftare än en timmma

    return dataObject;
}

function dataOutputWriter(data) {
  console.log(data);
  data.trafic.RESPONSE.RESULT[0].TrafficFlow.forEach(row => {
      let element = document.querySelector('#content');
      let row_data = '<p>' + row.SiteId + ' ' + row.AverageVehicleSpeed + '</p>';
      element.innerHTML = element.innerHTML + row_data;
  });
  // console.log(stuff.noise.RESPONSE.RESULT[0]);


  // for (var i = 0; i < 24; i++) {
  //   iMusic(playTrain(array]i));
  //   iMusic(playTrain(array]i));
  //   iMusic(playTrain(array]i));
  //   iMusic(playTrain(array]i));
  //   iMusic(playTrain(array]i));
  // }
  return data;
}


const api_key = 'f8dc88a7e302436e8753039d67579de0';
const coordinates = '356363.36 6213391.38';
getDataFromTrafikverket(api_key)
    .then(data => dataOutputWriter(data))
    // .then(data => console.log(data))
    .catch(reason => console.log(reason.message));
