<?php 
 
 $apiKey = "857888dbc4fdfa73279e6a6ff1164264";
 $query = $_SERVER['QUERY_STRING'];
 $queryUrl = "http://ws.audioscrobbler.com/2.0/?" . $query . "&api_key=" . $apiKey;

    $response = file_get_contents($queryUrl);
    print $response;

?>
