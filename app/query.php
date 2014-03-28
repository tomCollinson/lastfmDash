<?php 
 
 $apiKey = "YOUR_KEY";
 $query = $_SERVER['QUERY_STRING'];
 $queryUrl = "http://ws.audioscrobbler.com/2.0/?" . $query . "&api_key=" . $apiKey;

    $response = file_get_contents($queryUrl);
    print $response;

?>
