# Medical Image Analysis using ResNet-18

![Medical Image Analysis](/images/abc.jpg)

## Overview
A comprehensive deep learning pipeline built with PyTorch to analyze multi-modal medical images. The core architecture is based on a modified **ResNet-18 CNN**, tailored for extracting high-level features from noisy medical scans.

## Key Features
- **High Accuracy**: Achieved an 88.3% classification accuracy on a highly imbalanced dataset.
- **Custom Loss Function**: Implemented Focal Loss to handle class imbalance natively without extreme data augmentation.
- **Explainable AI (XAI)**: Integrated Grad-CAM to visualize the exact regions the neural network focuses on when making a diagnosis, building trust with medical professionals.

## Tech Stack
- **Framework**: PyTorch
- **Models**: ResNet-18, Grad-CAM
- **Data Processing**: TorchVision, NumPy, Pandas

## Implementation Details
The model was trained over 50 epochs utilizing an NVIDIA RTX 3090. We utilized Transfer Learning from an ImageNet-pretrained model and fine-tuned the last convolutional blocks to recognize specialized medical pathologies.

```python
import torch
import torch.nn as nn
from torchvision import models

class MedicalResNet(nn.Module):
    def __init__(self, num_classes):
        super(MedicalResNet, self).__init__()
        self.resnet = models.resnet18(pretrained=True)
        # Modify final layer for our specific classes
        num_ftrs = self.resnet.fc.in_features
        self.resnet.fc = nn.Linear(num_ftrs, num_classes)
        
    def forward(self, x):
        return self.resnet(x)
```
