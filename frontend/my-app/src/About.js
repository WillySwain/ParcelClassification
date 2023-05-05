import React from 'react';
import table from './results_table.png';
function About() {
  return (
    <div>
      <h1>Results</h1>
      <h2>Result Analysis</h2>
      <img src={table} alt="A table of evaluation metrics" width="700" height="400" style={{ alignSelf: 'center' }}/>
      <p>Currently, VGG19 has the highest accuracy, recall, and F1-Score of
        all the models. These are the highest priority evaluation metrics, so
        VGG19 is the best model so far for the task of classifying parcels.
        Although ResNet50 has a higher specificity score than VGG19, it is
        not an evaluation metric that holds much importance so this high
        value is insignificant. This is due to the specific task of classifying
        good and bad packages, where it is much better to have a false 
        positive and pulling a package off the line than to let a damaged one
        continue. Thus, it is better to mitigate false negatives by prioritizing
        recall than to mitigate false positives by prioritizing specificity.
        The performance of YOLOv5 is unsatisfactory, with low accuracy
        and recall rate being our primary concerns. We believe the root
        causes of these results are twofold. Firstly, our package labeling
        is imprecise, and to improve accuracy, we plan to re-label our images. 
        Secondly, we trained the model solely on the pre-trained
        YOLOv5s.pt, which did not fit our data well and lacked detailed
        fine-tuning. We expect that fine-tuning will result in a significant
        performance boost. Detailed information on the fine-tuning process
        can be found in the future work section.</p>
      <h2>Conclusion</h2>
      <p>According to the results obtained, VGG is currently the best model
        for the specific task of classifying good and bad parcels, 
        outperforming ResNet50 and YOLOv5 in every evaluation metric except
        for specificity. However, it is important to note that the leading
        model may change as we continue to fine-tune these models and
        implement the VisualBERT model. Overall, we are confident that
        by continuously improving and fine-tuning the models, we will be
        able to achieve even better performance and accuracy in classifying
        good and bad parcels.</p>
      <h2>Links</h2>
      <h3>Link to the code</h3>
      <a href = "https://github.com/WillySwain/ParcelClassification">Final code</a>
      <h3>Links to the Final paper and Presentation</h3>
      <p>Final Presentation: </p>
      <a href = "https://docs.google.com/presentation/d/1zRpbBgxLnSVcq5PfXLwKW-PT0JXl1l5ObE_PSvzau1U/edit?usp=sharing">Final Presentation</a>
      <p>Final Paper: </p>
      <a href = "https://drive.google.com/file/d/1_2LInENtBbAqDmmyzuBWVWbk8MLCm9xu/view?usp=sharing">Final Paper</a>




    </div>
  );
}

export default About;
