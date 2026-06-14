# Heart Failure Prediction using ANN

![Heart Failure Prediction](/images/abcdf.jpg)

## Overview
A predictive modeling project focused on early detection of heart failure risks based on clinical records. By engineering a custom multi-layer Artificial Neural Network (ANN), we achieved an 87% accuracy rate on hold-out test sets.

## Impact
This research is currently published under peer review at the **ICETET-SIP** conference. The model aims to assist clinicians as a secondary diagnostic tool, highlighting key risk factors such as ejection fraction and serum creatinine levels.

## Methodology
- **Data Preprocessing**: Extensive exploratory data analysis (EDA) to handle missing values, normalize continuous variables, and apply SMOTE to balance the target classes.
- **Model Architecture**: Developed a deep feed-forward neural network with optimized dropout layers to prevent over-fitting.
- **Hyperparameter Tuning**: Utilized GridSearch combined with cross-validation to pinpoint the optimal learning rate, batch size, and activation functions.

## Results
- **Accuracy**: 87.2%
- **Recall**: 89.1%
- **F1-Score**: 88.0%

> [!NOTE]
> The high recall score is crucial in medical diagnosis contexts to minimize False Negatives (missing a potential heart failure diagnosis).
