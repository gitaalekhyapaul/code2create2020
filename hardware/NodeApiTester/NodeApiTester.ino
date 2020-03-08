#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>

#define USE_SERIAL Serial

#define SERVER_IP "192.168.225.46:3000/nodeapi"

#ifndef STASSID
#define STASSID "TeamFoxTrot"
#define STAPSK  "Te@M$tr0T"
#endif

void setup() {

  USE_SERIAL.begin(115200);

  USE_SERIAL.println();
  USE_SERIAL.println();
  USE_SERIAL.println();

  WiFi.begin(STASSID, STAPSK);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    USE_SERIAL.print(".");
  }
  USE_SERIAL.println("");
  USE_SERIAL.print("Connected! IP address: ");
  USE_SERIAL.println(WiFi.localIP());

}

void loop() {
  if (Serial.available()) {
    if ((WiFi.status() == WL_CONNECTED)) {
      WiFiClient client;
      HTTPClient http;

      USE_SERIAL.print("[HTTP] begin...\n");
      http.begin(client, "http://" SERVER_IP);
      http.addHeader("Content-Type", "application/json");

      USE_SERIAL.print("Enter latitude and longitude\n");

      String longitude;
      String latitude;

      longitude = Serial.readStringUntil('\n');
      latitude = Serial.readStringUntil('\n');
      String json = "{\"lon\" : " + String(longitude) + ", \"lat\" : " + String(latitude) + "}";
      Serial.println(json);
      int httpCode = http.POST(json);

      if (httpCode > 0) {

        USE_SERIAL.printf("[HTTP] POST... code: %d\n", httpCode);

        if (httpCode == HTTP_CODE_OK) {
          const String& payload = http.getString();
          USE_SERIAL.println("received payload:\n<<");
          USE_SERIAL.println(payload);
          USE_SERIAL.println(">>");
        }
      } else {
        USE_SERIAL.printf("[HTTP] POST... failed, error: %s\n", http.errorToString(httpCode).c_str());
      }

      http.end();
    }
  }
}
