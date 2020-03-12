# **BharatBeacon - Code2Create 2020 Project**
### *Digital India, Digital Rescues.*


## **Team Name** - Team FoxTrot

### **Members**  
* [Gita Alekhya Paul](https://github.com/gitaalekhyapaul)  
* [Paras Rawat](https://github.com/TrizteX)  
* [Sashrika Surya](https://github.com/sashrika15)  
* [Snehil](https://github.com/sneakysensei)  
* [Yashvardhan Jagnani](https://github.com/jagnani73)   

---

## **Problem it Solves**
>We have built a smart and efficient pipeline dealing with flood disasters in three stages; preemptive measures, mid-crisis solution and post crisis optimization. 
At a preemptive stage, we built a flood prediction model based on rainfall data collected over the years 1901 to 2015. In India, the most common cause of floods is the inadequate capacity of banks of rivers to contain the high flows brought down due to heavy rainfall. So, we have built a logistic regression model which takes in inputs like the amount of rainfall which occurs in the pre-monsoon seasons and the average amount of rainfall in the first 10 days of the monsoon season and predicts the possibility of a flood occurring in the upcoming months.
For the mid-crisis situation we've built a beacon which is the selling point of our project. Each of these beacons are equipped with an ESP8266, a gps module, a lcd, 3 pushbuttons. These beacons are stucturally rugged and would be dropped by the disaster relief team across the whole flood struck area. These beacons form a P2P wifi mesh where ech node is connected to atleast one another node. This whole mesh is connected to one root node that would be present in the relief base camp. Upon picking up this beacon, the survivors would be presented with some simple questions like, "How many people are there?", and "Is there any medical emergency?". Upon answering these questions, the collected answers would be sent to the root node along with the logitude and latitude of the beacons. This ensures that the army knows how much of what kind of resources are needed by the people in different areas so the army is able to drop the resources much effectively.
For post crisis, we created a NLP model for summarisation of disaster reports to help in authoritative adminisration. This model smoothes the after crisis documentation work.

## **Challenges we ran into :**
***
* Connecting to APIs to the frontend.
* Realtime update of the markers
* Count of medical emergencies
* Maintaining proper connection to the root node.
* Finding relevant datasets.

## **Libaries And Dependencies Installed :**
***
* Express.js
* Mongoose
* Axios
* Body-parser
* Nodemon
* PainlessMesh
* BfButton
* U8g2lib
* BootStrap 4
* Mapbox
## **Install Scripts :**
***
```bash
    #To start MongoDB in the background(If Installed)
    sudo service mongod start
    # To install dependencies
    npm i
    # To start the server
    npm start
```