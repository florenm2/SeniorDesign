import requests
import json
from time import gmtime, strftime
dateTime = strftime("%Y/%m/%d %H:%M:%S", gmtime())
temp = 20;
cornE = 30.45;
wheatE = 20.3;
soilMoisture = 5.09;
 
#payload = "{'dateTime': {0}}".format(dateTime)
payload = json.dumps({'dateTime' : dateTime, 'temperature' : temp, 'cornEvap' : cornE, 'wheatEvap' : wheatE, 'soilMoisture' : soilMoisture});	

header = {'Content-Type' : 'application/json'}
uri = "https://api.mlab.com/api/1/databases/seniordesign/collections/metrics?apiKey=yYhdTVjbQWk0303jla3N_39DJp8RAJ4P"
r = requests.post(uri, data=payload, headers=header)
print (r.status_code)

g = requests.get(uri, headers=header);
print (g.status_code)
