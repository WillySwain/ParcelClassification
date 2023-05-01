import React from 'react';

function Home() {
  return (
    <div>
      <h1>Introduction</h1>
      <h2>Problem Description</h2>
      <p>Parcel damage is a common problem that compromises the safety and can often lead to the damage of the contents of a parcel. Approximately 10% of parcels arrive at their destination damaged. Globally this equates to \$15 billion in lost revenue. In most cases, the shipping company is liable for a replacement for the damaged item. This is a significant expense for shipping companies that can be mitigated through identification of where and what type of damage occurred. For our capstone project, we will train 4 different models, which are ResNet50, VGG-19, YOLOv5, and VisualBERT, to determine whether or not a package has been damaged, and compare the performance of all models. We anticipate that the best machine learning model can be incorporated into shipping warehouses to record where in its journey a particular package was damaged to identify patterns of unsafe handling along the distribution network[1].</p>
      <h2>Motivation</h2>
      <p>Sending out damaged parcels to customers will require companies to reship the products, and this unnecessary trip will cost the company. This classification will also serve as evidence to determine liability and battle cases of fraud. Classifying whether a parcel is good before it leaves the warehouse is critical to cost-efficient shipping.</p>
    </div>
  );
}

export default Home;