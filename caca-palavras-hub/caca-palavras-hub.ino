#include <SoftwareSerial.h>

#define RX1 9
#define TX1 8

SoftwareSerial bleOne(RX1, TX1);

void setup() {
  Serial.begin(9600);
  bleOne.begin(9600);
}

void loop() {
  int count = 0;
  bleOne.listen();
  while(bleOne.available() > 0) {
    Serial.write(bleOne.read());
  }
}