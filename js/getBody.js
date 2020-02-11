function getTraficBody(api_key) {
  const request =
      '<REQUEST>' +
          '<LOGIN authenticationkey="' + api_key + '" />' +
          '<QUERY objecttype="WeatherStation" schemaversion="1">' +
                '<FILTER>' +
                      '<EQ name="Name" value="Högakustenbron Topp" />' +
                '</FILTER>' +
                '<INCLUDE>Measurement.Air.Temp</INCLUDE>' +
                '<INCLUDE>Measurement.MeasureTime</INCLUDE>' +
          '</QUERY>' +
      '</REQUEST>';

  return request;
}

function getNoiseBody(api_key) {
  const request =
      '<REQUEST>' +
          '<LOGIN authenticationkey="' + api_key + '" />' +
          '<QUERY objecttype="WeatherStation" schemaversion="1">' +
                '<FILTER>' +
                      '<EQ name="Name" value="Högakustenbron Topp" />' +
                '</FILTER>' +
                '<INCLUDE>Measurement.Air.Temp</INCLUDE>' +
                '<INCLUDE>Measurement.MeasureTime</INCLUDE>' +
          '</QUERY>' +
      '</REQUEST>';

  return request;
}
