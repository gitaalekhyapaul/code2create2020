
## Requirements
- Python 3
- Tensorflow (>=1.8.0)
- pip install -r requirements.txt

#### Sample Summary Output
```
"general motors corp. said wednesday its us sales fell ##.# percent in december and four percent in #### with the biggest losses coming from passenger car sales ."
> Model output: gm us sales down # percent in december
> Actual title: gm december sales fall # percent

"japanese share prices rose #.## percent thursday to <unk> highest closing high for more than five years as fresh gains on wall street fanned upbeat investor sentiment , dealers said ."
> Model output:  tokyo shares close # percent higher
> Actual title: tokyo shares close up # percent

"hong kong share prices opened #.## percent higher thursday on follow-through interest in properties after wednesday 's sharp gains on abating interest rate worries , dealers said ."
> Model output: hong kong shares open higher
> Actual title: hong kong shares open higher as rate worries ease

"the dollar regained some lost ground in asian trade thursday in what was seen as a largely technical rebound after weakness prompted by expectations of a shift in us interest rate policy , dealers said ."
> Model output: dollar stable in asian trade
> Actual title: dollar regains ground in asian trade

"the final results of iraq 's december general elections are due within the next four days , a member of the iraqi electoral commission said on thursday ."
> Model output: iraqi election results due in next four days
> Actual title: iraqi election final results out within four days

"microsoft chairman bill gates late wednesday unveiled his vision of the digital lifestyle , outlining the latest version of his windows operating system to be launched later this year ."
> Model output: bill gates unveils new technology vision
> Actual title: gates unveils microsoft 's vision of digital lifestyle
```

## Pre-trained Model
To test with pre-trained model, download [pre_trained.zip](https://drive.google.com/file/d/1V8pS1eoiv51wfiVp2rOB7IvJ5PeQs2n-/view?usp=sharing), and locate it in the project root directory. Then,
```
$ unzip pre_trained.zip
$ python test.py
```
