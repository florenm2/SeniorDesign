#include <OneWire.h> 
#include <SoftwareSerial.h>

#define TO_HEX(i) (i <= 9 ? '0' + i : 'A' - 10 + i)

int DS18S20_Pin = 4; //DS18S20 Signal pin on digital 2
char tmpstring[10];
int counter = 1;

//Temperature chip i/o
OneWire ds(DS18S20_Pin);  // on digital pin 2

SoftwareSerial display(5, 4);
SoftwareSerial xbee(1, 2); // RX, TX



int soil_pin = A0;

int soil_moisture = 0;

int water_level = 0;

char c = 'A';

float getTemp(){
  //returns the temperature from one DS18S20 in DEG Celsius

  byte data[12];
  byte addr[8];

  if ( !ds.search(addr)) {
      //no more sensors on chain, reset search
      ds.reset_search();
      return -1000;
  }

  if ( OneWire::crc8( addr, 7) != addr[7]) {
      Serial.println("CRC is not valid!");
      return -1000;
  }

  if ( addr[0] != 0x10 && addr[0] != 0x28) {
      Serial.print("Device is not recognized");
      return -1000;
  }

  ds.reset();
  ds.select(addr);
  ds.write(0x44,1); // start conversion, with parasite power on at the end

  byte present = ds.reset();
  ds.select(addr);    
  ds.write(0xBE); // Read Scratchpad

  for (int i = 0; i < 9; i++) { // we need 9 bytes
    data[i] = ds.read();
  }

  ds.reset_search();

  byte MSB = data[1];
  byte LSB = data[0];

  float tempRead = ((MSB << 8) | LSB); //using two's compliment
  float TemperatureSum = tempRead / 16;

  return (TemperatureSum * 18 + 5)/10 + 32;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  xbee.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  float temperature = getTemp();

  //Serial.print("Temp: ");
  //Serial.println(temperature);

  int temp = (int)temperature;

  int water_level = analogRead(A1);
  int inches = 0;
  if(water_level >= 939){
    inches = 0;
  } else if(water_level == 938 || water_level == 937){
    inches = 1;
  } else if(water_level == 936 || water_level == 935){
    inches = 2;
  } else if(water_level == 934 || water_level == 933){
    inches = 3;
  } else if(water_level == 932 || water_level == 931){
    inches = 4;
  } else{
    inches = 5;
  }

  int soil_moisture = analogRead(A0);
  if(soil_moisture > 23){
    soil_moisture = (soil_moisture-23)/10;
  } else{
    soil_moisture = 0;
  }

  Serial.print("Temperature: ");
  Serial.println(temp);
  Serial.print("Water Level Drop in Inches: ");
  Serial.println(inches);
  Serial.print("Soil Saturation: ");
  Serial.println(soil_moisture);
  Serial.print("Raw Moisture Reading: ");
  Serial.println(water_level);

  int var = 9;
  char char_temp = (char)var;
  
  //Writes Temp to XBee
  xbee.write(temp);

  //Writes Soil Moisture to Xbee
  xbee.write(soil_moisture);

  //Writes Water Level to Xbee
  xbee.write(inches);

  delay(5000);
  counter = counter + 1;
}
