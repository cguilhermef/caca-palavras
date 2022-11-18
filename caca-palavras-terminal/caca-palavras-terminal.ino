#include <JC_Button.h>
#include <Arduino.h>
#include <U8g2lib.h>


U8G2_SSD1306_128X64_NONAME_1_HW_I2C oled(/* U8G2_R2 */ U8G2_R0, SCL,  SDA, U8X8_PIN_NONE);
Button buttonA(9);
Button buttonB(8);

int dialer = A0;
int maxDialerInput = 0;
int minDialerInput = 0;
int dialerDivider = 37;
char command[5] = "\0";

void setup() {
  Serial.begin(4800);
  pinMode(dialer, INPUT);
  buttonA.begin();
  buttonB.begin();
  oled.begin();
  oled.setFontDirection(0);
}

void loop() {
  buttonA.read();
  buttonB.read();

  char tmp[30];
  sprintf(tmp, "Dialer: %d", analogRead(dialer));
  if(buttonA.wasPressed()){
    // strcpy(buffer, "A pressed!");
  }

  if(buttonB.wasPressed()){
    // strcpy(buffer, "B pressed!");
    
    int read = analogRead(dialer);
    read = read / dialerDivider;
    read = read > 25 ? 25 : read;
    char character = read + 65;
    sprintf(command,"%c%c%cx", 'W', 'A', character);
    Serial.print(command);
    delay(10);
  }

  oled.firstPage();
  do {
    oled.setFont(u8g2_font_mercutio_sc_nbp_t_all);
    oled.drawStr(10, 10, command);
    oled.drawStr(10, 30, tmp);
  } while (oled.nextPage());
}