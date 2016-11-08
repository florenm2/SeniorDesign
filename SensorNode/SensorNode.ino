#include "OneWire.h"
#include "Group.h"

//Sets datapin to be used by Temp Sensor
OneWire ds(TempIn); 


int readTemp(){
   float tempFloat = getTemp();
   return tempFloat*100;
}

float getTemp(){
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
  ds.write(0x44,1); 
  
  byte present = ds.reset();
  ds.select(addr); 
  ds.write(0xBE); 
  
  
  for (int i = 0; i < 9; i++) { 
  data[i] = ds.read();
  }
  
  ds.reset_search();
  
  byte MSB = data[1];
  byte LSB = data[0];
  
  float TRead = ((MSB << 8) | LSB); 
  float Temperature = TRead / 16;
  
  return Temperature;

}

void setup() {
  
  Serial.begin(9600);

}

void loop() {
  
  int waterlevelValue = analogRead(5);
  int temp = readTemp();

  //Serial.print("Temperature: ");
  Serial.println(temp);

  //Serial.println("Water Level: ");
  //Serial.println(waterlevelValue);

  delay(1000);

}
