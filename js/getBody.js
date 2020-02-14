function getTraficBody(api_key) {
  const request =
    '<REQUEST>' +
        '<LOGIN authenticationkey="' + api_key + '" />' +
        '<QUERY objecttype="TrafficFlow" schemaversion="1.4">' +
        '<FILTER>' +
            '<NEAR name="Geometry.SWEREF99TM" value="356985.60 6213376.04" mindistance="1" maxdistance="200000" />' +
            '<GT name="MeasurementTime" value="$dateadd(-0.00:15:00)" />' +
        '</FILTER>' +
        '<INCLUDE>SiteId</INCLUDE>' +
        '<INCLUDE>VehicleFlowRate</INCLUDE>' +
        '<INCLUDE>SpecificLane</INCLUDE>' +
        '<INCLUDE>CountyNo</INCLUDE>' +
        '<INCLUDE>MeasurementTime</INCLUDE>' +
        '<INCLUDE>AverageVehicleSpeed</INCLUDE>' +
        '</QUERY>' +
    '</REQUEST>';

  return request;
}

function getTrainBody(api_key) {
  const request =
    '<REQUEST>' +
    '<LOGIN authenticationkey="' + api_key + '" />' +
    '<QUERY objecttype="TrainAnnouncement" schemaversion="1.6">' +
          '<FILTER>' +
              '<EQ name="ActivityType" value="Avgang" />' +
          '</FILTER>' +
          '<INCLUDE>FromLocation</INCLUDE>' +
    '</QUERY>' +
  '</REQUEST>';

  return request;
}
