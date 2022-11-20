# Caça-palavras

## Hardware

- 2 arduinos pro mini
- 2 módulos CP2101
- 4 bluetooth JDY-18

## Setup

- 2 arduinos com o sketch de terminal
- 2 JDY-18 configurados com:
  - AT+ROLE1
  - AT+NAMECP*TERM*{1|2}
  - AT+BAUD3 (4800)
  - AT+BONDCP*HOST*{1|2} - link com um dos hosts
- 2 JDY-18 configurados com:
  - AT+ROLE0
  - AT+NAMECP*HOST*{1|2}
  - AT+BAUD3 (4800)
