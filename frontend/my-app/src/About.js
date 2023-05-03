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
        good and bad packages, where it is much better to have a false pos-
        itive and pulling a package off the line than to let a damaged one
        continue. Thus, it is better to mitigate false negatives by prioritizing
        recall than to mitigate false positives by prioritizing specificity.
        The performance of YOLOv5 is unsatisfactory, with low accuracy
        and recall rate being our primary concerns. We believe the root
        causes of these results are twofold. Firstly, our package labeling
        is imprecise, and to improve accuracy, we plan to re-label our im-
        ages. Secondly, we trained the model solely on the pre-trained
        YOLOv5s.pt, which did not fit our data well and lacked detailed
        fine-tuning. We expect that fine-tuning will result in a significant
        performance boost. Detailed information on the fine-tuning process
        can be found in the future work section.</p>
      <h2>Conclusion</h2>
      <p>According to the results obtained, VGG is currently the best model
        for the specific task of classifying good and bad parcels, outper-
        forming ResNet50 and YOLOv5 in every evaluation metric except
        for specificity. However, it is important to note that the leading
        model may change as we continue to fine-tune these models and
        implement the VisualBERT model. Overall, we are confident that
        by continuously improving and fine-tuning the models, we will be
        able to achieve even better performance and accuracy in classifying
        good and bad parcels.</p>
      <h3>Links</h3>
    </div>
  );
}

export default About;
