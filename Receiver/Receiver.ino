
#include <VirtualWire.h>

char sensorMsg[7];

void setup() {
  // put your setup code here, to run once:

  Serial.begin(9600); // Debugging only
    //Serial.println("setup");
    pinMode(13, OUTPUT);
    // Initialise the IO and ISR
    //vw_set_rx_pin(0);  //Changes rx pin on board
    //Default rx pin is I/O pin 11
    vw_set_ptt_inverted(true); // Required for DR3100
    vw_setup(2000);      // Bits per sec
    vw_rx_start(); // Start the receiver PLL running

}

void loop() {
  // put your main code here, to run repeatedly:

   


   uint8_t buf[VW_MAX_MESSAGE_LEN];
   uint8_t buflen = VW_MAX_MESSAGE_LEN;
   if (vw_get_message(buf, &buflen)) // Non-blocking

  {

    digitalWrite(13, HIGH); 
    int i;
    
   for (i = 0; i < buflen; i++)
        {
            sensorMsg[i]= char(buf[i]);           
        }
        sensorMsg[buflen] = '\0';

    Serial.println(sensorMsg);
        
  } //endif
}
