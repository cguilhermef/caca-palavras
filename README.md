# Caça-palavras

Usar baud-rate de 4800 no monitor serial.
Suspeito que ao utilizar SoftwareSerial gera-se uma divergência de velocidade, produzindo uma codificação de sinal divergente.

## Hardware

- 3 arduinos pro mini
- 4 bluetooth JDY-18

## Setup

- 2 arduinos com o sketch de terminal
- 1 arduino com sketch de hub
- 2 JDY-18 configurados com:
  - AT+ROLE1
  - AT+NAMECP*TERM*{1|2}
  - AT+BAUD3 (4800)
  - AT+BONDCP*HOST*{1|2} - link com um dos hosts
- 2 JDY-18 configurados com:
  - AT+ROLE0
  - AT+NAMECP*HOST*{1|2}
  - AT+BAUD3 (4800)
