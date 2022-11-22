#include <JC_Button.h>
#include <Arduino.h>
#include <U8g2lib.h>


U8G2_SSD1306_128X64_NONAME_1_HW_I2C oled(U8G2_R0, SCL, SDA, U8X8_PIN_NONE);
Button buttonA(9);
Button buttonB(8);

int step = 0;
int dialer = A0;
int charCount = 0;
int currentTeam = 0;

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

  if (step == 0) {
    showStart();
    if (buttonB.wasReleased()) {
      step = 1;
      return;
    }
  }

  if (step == 3) {
    showStart();
    if (buttonB.wasReleased()) {
      step = 0;
      return;
    }
  }

  if (step == 1) {
    showChooseTeam();
    if (buttonB.wasReleased()) {
      step = 2;
      currentTeam = readTeam();
      char command[8] = "";
      sprintf(command, "start:%d#", currentTeam);
      Serial.print(command);
      return;
    }
  }

  if (step == 2) {
    showTyping();
    if (buttonA.pressedFor(2000)) {
      step = 1;
      Serial.print("reset#");
      return;
    }
    if (buttonB.pressedFor(2000)) {
      char command[8] = "";
      sprintf(command, "finish:%d#", currentTeam);
      Serial.print(command);
      step = 3;
      currentTeam = 0;
      return;
    }
    if (buttonA.wasReleased() && charCount > 0) {
      Serial.print("erase#");
      charCount--;
      return;
    }
    if (buttonB.wasReleased()) {
      char command[8] = "";
      sprintf(command, "type:%c#", readCharacter());
      Serial.print(command);
      charCount++;
      return;
    }
  }
}

void showChooseTeam() {

  oled.firstPage();
  do {
    drawFrame();
    drawFrameTitle("Selecione a equipe");
    oled.setFont(u8g2_font_helvR18_tf);
    char * tmp = teamName();
    int w = oled.getUTF8Width(tmp);
    oled.drawUTF8((int)(128-w)/2, 50, tmp);
  } while (oled.nextPage());
}

void showTyping() {
  oled.firstPage();
  do {
    drawFrame();
    drawFrameTitle("Soletre a palavra");
    oled.setFont(u8g2_font_helvR18_tf);
    char tmp[2] = "";
    sprintf(tmp, "%c", readCharacter());
    int w = oled.getStrWidth(tmp);    
    oled.drawStr((int)(128-w)/2, 50, tmp);
  } while (oled.nextPage());
}

void showStart() {
  oled.firstPage();
  do {
    drawFrame();
    char title[16] = "Pressione enter";
    oled.setFont(u8g2_font_mercutio_sc_nbp_t_all);
    int w = oled.getStrWidth(title);
    oled.setFontPosCenter();
    oled.drawStr((int)(128-w)/2, 32, title);
  } while (oled.nextPage());
}

void drawFrameTitle(char* title) {
  oled.setFont(u8g2_font_mercutio_sc_nbp_t_all);
  int w = oled.getStrWidth(title);
  oled.drawStr((int)(128-w)/2, 15, title);
}

void drawFrame() {
  oled.drawRFrame(0, 0, 128, 64, 4);
  oled.drawRFrame(1, 1, 126, 62, 4);
}

char * teamName() {
  switch(readTeam()) {
    case 0: {
      return "Boi";
    }
    case 1: {
      return "Cão";
    }
    case 2: {
      return "Carneiro";
    }
    case 3: {
      return "Cavalo";
    }
    case 4: {
      return "Coelho";
    }
    case 5: {
      return "Dragão";
    }
    case 6: {
      return "Galo";
    }
    case 7: {
      return "Macaco";
    }
    case 8: {
      return "Porco";
    }
    case 9: {
      return "Rato";
    }
    case 10: {
      return "Serpente";
    }
    case 11: {
      return "Tigre";
    }
  }
}

int readTeam() {
  int read = analogRead(dialer);
  read = read / 90;
  return read > 11 ? 11 : read;
}

char readCharacter() {
  int read = analogRead(dialer);
  read = read / 40;
  read = read > 25 ? 25 : read;
  return read + 65;
}
