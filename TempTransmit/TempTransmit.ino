#include <Wire.h>
#include <VirtualWire.h>

#include "Group.h"
#include "OneWire.h"

//Global Message Variable
char msg[30];

//Sets datapin to be used by Temp Sensor
OneWire ds(TempIn); 


int readTemp(){
   float tempFloat = getTemp();
   return tempFloat*100;
}

//Temp Sensor uses a 220 Ohm Resistor between Vsource and Vout

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

void transmit(){
  digitalWrite(13, HIGH); // Flash a light to show transmitting
  vw_send((uint8_t *)msg, strlen(msg));
  vw_wait_tx(); // Wait until the whole message is gone
  digitalWrite(13, LOW);
}


void setup() {
  

  Serial.begin(9600);
  pinMode(13, OUTPUT);
  // Initialise the IO and ISR for RF Communication
  //vw_set_tx_pin(1);
  vw_set_ptt_inverted(true); // Required for DR3100
  vw_setup(2000); // Bits per sec

}

void loop() {
  // put your main code here, to run repeatedly:


  int temp = readTemp();

  //Serial.print("Temperature: ");
  Serial.println(temp);
  
  String str = "";
  str += temp;
  str.toCharArray(msg, 30);

  transmit();

  delay(2000);  

}
