#include <dummy.h>

//DOWNLOAD BUTTON FEVER LIBRARY


#include <BfButtonManager.h>
#include <BfButton.h>

const unsigned int btnPin = A0;
BfButtonManager manager(btnPin, 3);

BfButton btn1(BfButton::ANALOG_BUTTON_ARRAY, 0);
BfButton btn2(BfButton::ANALOG_BUTTON_ARRAY, 1);
BfButton btn3(BfButton::ANALOG_BUTTON_ARRAY, 2);

void pressHandler (BfButton *btn, BfButton::press_pattern_t pattern) {
  Serial.print(btn->getID());
  switch (pattern) {
    case BfButton::SINGLE_PRESS:
      Serial.println(" pressed.");
      break;
    case BfButton::DOUBLE_PRESS:
      Serial.println(" double pressed.");
      break;
    case BfButton::LONG_PRESS:
      Serial.println(" long pressed.");
      break;
  }
}

void specialPressHandler (BfButton *btn, BfButton::press_pattern_t pattern) {
  Serial.print(btn->getID());
  Serial.println(" is special!!");
}

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Serial.println();

  manager.setADCResolution(1024);

  btn1.onPress(pressHandler);
  manager.addButton(&btn1, 613, 800);
  
  btn2.onPress(pressHandler);
  manager.addButton(&btn2, 400, 500);

  // You may change event handler methods in any order!
  btn3.onPress(pressHandler);
  manager.addButton(&btn3, 190, 300);

  manager.begin();
}

void loop() {
  manager.loop();
}
