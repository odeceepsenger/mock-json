var argo = require('argo');
var express = require('express');

var app = express();

var proxy = argo()
    .target('https://wac-prod-images.s3.amazonaws.com/temp/app-upgrade.json')
    .build();



app.all('*', proxy.run);

app.listen(3000);
