# ParcelClassification
## How to run
### For ResNet50 and VGG19:
#### 1. Make sure the badpackages and goodpackages directories are empty in data/split data 
#### 2. Run all of the cells in order and a ResNet50 and VGG19 model will be trained on the data in the startingdata directory.

### For YOLOv5:
#### 1. Clone the official model from https://github.com/ultralytics/yolov5
#### 2. Go to the yolov5 folder in this repository, run yolov5.finetune.ipynb file and get the new model. 
#### 3. Place the new model in the cloned official yolov5 folder. 
#### 4. Place package.yaml file from this repository to the cloned official yolov5/data folder.
#### 5. Replace the train.py in the cloned official yolov5 folder with the new train.py in this repository.
#### 6. Download the datasets folder including images and labels, and place it in the same level as the cloned official yolov5 folder.
#### 7. Run the following command: python train.py --data data/package.yaml --cfg models/yolov5s.yaml --weights new_yolov5s.pt --batch-size 8
<br>
If you would like to start with new uncleaned data, delete startingdata, uncomment all of the crawl calls, and run the first cell. 
<br><br>
Code in ParcelClassification.ipynb by William Swain
<br>
Code in Vision_Transformer.ipynb by Zain Mirza 
<br>
Code in yolov5 folder by Helen Zhu
<br>
Data cleaning by Helen Zhu, William Swain, and Zain Mirza
