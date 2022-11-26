#include <JC_Button.h>
#define RUNNING 1
#define PAUSED 2
#define BOOSTED 3
#define FINISHED 4

int ledRunning = 6;
int ledPaused = 7;
int ledBoosted = 8;
int ledFinished = 9;

int phase = 0;

Button buttonRun(2);
Button buttonPause(3);
Button buttonBoost(4);
Button buttonFinish(5);

void setup() {
  pinMode(ledRunning, OUTPUT);
  pinMode(ledPaused, OUTPUT);
  pinMode(ledBoosted, OUTPUT);
  pinMode(ledFinished, OUTPUT);
  buttonRun.begin();  
  buttonPause.begin();
  buttonBoost.begin();
  buttonFinish.begin();

  Serial.begin(9600);
}

void loop() {
  buttonRun.read();
  buttonPause.read();
  buttonBoost.read();
  buttonFinish.read();

  switch(phase) {
    case RUNNING: {
      turnOn(ledRunning);
      turnOff(ledPaused);
      turnOff(ledBoosted);
      turnOff(ledFinished);
      break;
    }
    case PAUSED: {
      turnOn(ledPaused);
      turnOff(ledRunning);
      turnOff(ledBoosted);
      turnOff(ledFinished);
      break;
    }
    case BOOSTED: {
      turnOn(ledBoosted);
      turnOff(ledFinished);
      turnOff(ledRunning);
      turnOff(ledPaused);
      break;
    }
    case FINISHED: {
      turnOn(ledFinished);
      turnOff(ledRunning);
      turnOff(ledBoosted);
      turnOff(ledPaused);
      break;
    }
    default: {
      turnOn(ledRunning);
      turnOn(ledPaused);
      turnOn(ledBoosted);
      turnOn(ledFinished);
    }
  }

  if (buttonRun.wasReleased()) {
    phase = RUNNING;
    Serial.print("startgame#");
    return;
  }
  if (buttonPause.wasReleased()) {
    phase = PAUSED;
    Serial.print("pausegame#");
    return;
  }
  if (buttonBoost.wasReleased()) {
    phase = BOOSTED;
    Serial.print("boostgame#");
    return;
  }
  if (buttonFinish.wasReleased()) {
    phase = FINISHED;    
    Serial.print("finishgame#");
    return;
  }

}

void turnOn(int led) {
  digitalWrite(led, HIGH);
}
void turnOff(int led) {
  digitalWrite(led, LOW);
}