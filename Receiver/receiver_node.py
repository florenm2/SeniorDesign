import serial
import sys
import requests
import json
from time import gmtime, strftime, localtime

dateTime = strftime("%Y/%m/%d %H:%M:%S", localtime())

def ASCII(s):
	x = 0
	for i in xrange(len(s)):
		#sys.stdout.write("byte: ")	
		print "byte ",i, ":", ord(s[i])
	return

serial = serial.Serial('/dev/ttyAMA0', 9600)
packet = serial.read(50)
ASCII(packet)

temp = ord(packet[10]) 
inches = 4.0 - ord(packet[34])/10.0
moisture_perc = ord(packet[22])

print "debug ", 0.0 + ord(packet[34])/10.0

payload = json.dumps({'dateTime': dateTime , 'temperature' : temp, 'waterLevel' : inches, 'soilMoisture' : moisture_perc})

header = {'Content-Type' : 'application/json'}
uri = "https://api.mlab.com/api/1/databases/seniordesign/collections/metrics?apiKey=yYhdTVjbQWk0303jla3N_39DJp8RAJ4P"
r = requests.post(uri, data=payload, headers=header)
sys.stdout.write("request status: ")
print (r.status_code)

sys.stdout.write("get status: ")
g = requests.get(uri, headers=header)
print(g.status_code)
