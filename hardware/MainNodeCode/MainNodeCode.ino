#include <dummy.h>

#include <BfButtonManager.h>
#include <BfButton.h>

#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif

/*
  U8g2lib Example Overview:
    Frame Buffer Examples: clearBuffer/sendBuffer. Fast, but may not work with all Arduino boards because of RAM consumption
    Page Buffer Examples: firstPage/nextPage. Less RAM usage, should work with all Arduino boards.
    U8x8 Text Only Example: No RAM usage, direct communication with display controller. No graphics, 8x8 Text only.

*/

U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, /* clock=*/ 14, /* data=*/ 13, /* CS=*/ 15, /* reset=*/ 16); // ESP8266, E=clock=14, RW=data=13, RS=CS


const unsigned int btnPin = A0;
BfButtonManager manager(btnPin, 3);

BfButton btn1(BfButton::ANALOG_BUTTON_ARRAY, 0);
BfButton btn2(BfButton::ANALOG_BUTTON_ARRAY, 1);
BfButton btn3(BfButton::ANALOG_BUTTON_ARRAY, 2);

short state = 0;

int answer = 0;
String question = "How many people?";

int ans1;
int ans2;

void ok() {
  //SEND THE value of nummpeople.
  switch (state) {
    case 0:
      ans1 = answer;
      state = 1;
      question = "Need medical help?";
      break;
    case 1:
      ans2 = answer;
      state = 0;
      question = "How many people";

      //Make JSON using ans1 and ans2

      //Send JSON

      //Start wait time of 6 hours;
  }
  displayFrame();
}

void left() {
  switch(state){
    case 0:
      if (answer != 0)
        answer--;
      break;
    case 1:
      answer = 1;
  
  }
  displayFrame();
}

void right() {
  switch (state) {
    case 0:
      answer++;
      break;
    case 1:
      answer = 0;
      break;
  }
  
  displayFrame();
}

void pressHandler (BfButton *btn, BfButton::press_pattern_t pattern) {
  switch (btn->getID()) {
    case (uint8_t)0:
      right();
      break;
    case (uint8_t)1:
      ok();
      break;
    case (uint8_t)2:
      left();
      break;
  }
}


void setup(void) {
  u8g2.begin();


  manager.setADCResolution(1024);

  btn1.onPress(pressHandler);
  manager.addButton(&btn1, 613, 800);

  btn2.onPress(pressHandler);
  manager.addButton(&btn2, 400, 500);

  // You may change event handler methods in any order!
  btn3.onPress(pressHandler);
  manager.addButton(&btn3, 190, 300);

  manager.begin();
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.enableUTF8Print();

  displayFrame();
}


void loop(void) {
  manager.loop();
  //  u8g2.drawStr(0,10, "How many people?");
}

void askQuestion() {
}

void displayFrame() {
  u8g2.clear();
  switch(state){
    case 0:
      u8g2.setCursor(10, 15);
      u8g2.print(question);
      u8g2.setCursor(20, 30);
      u8g2.print(String(answer));
      break;
    case 1:
      u8g2.setCursor(10, 15);
      u8g2.print(question);
      u8g2.setCursor(20, 30);
      if(answer == 0) u8g2.print("No");
      else u8g2.print("Yes");
      break;
  }

  //  u8g2.drawStr(0,10, "How many people?");
  //  u8g2.drawStr(0,10, ques));
  //  u8g2.drawStr(0,20, String(answer));
  u8g2.sendBuffer();
}
