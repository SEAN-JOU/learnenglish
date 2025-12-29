<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type:text/html; charest=utf-8");
$response = "{\"sysCode\": " . "\"" . "200" . "\"" .
    ",\"sysMsg\":" . "\"" . "" . "\"" .
    ",\"data\":" . "{\"version\":\"1.5.0\",\"isForceUpdate\":true,\"androidURL\":\"https://play.google.com/store/apps/details?id=com.shaen.China\",\"isError\":false,\"isErrorString\":\"臨時系統維護中\",\"iosURL\":\"https://apps.apple.com/us/app/%E6%B3%A8%E9%9F%B3%E5%AD%B8%E8%8B%B1%E6%96%87/id6499569604\"}" . "}";
echo $response;
