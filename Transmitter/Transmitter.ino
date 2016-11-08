#include <Wire.h>
#include <VirtualWire.h>

char msg[30];

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

  String str = "matt";
  str.toCharArray(msg, 30);

  transmit();

  delay(2000);  

}
