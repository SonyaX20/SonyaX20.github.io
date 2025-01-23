---
title: Remote Sensing Image Analysis with Python
date: 2024-03-26
categories: [Data Science, Remote Sensing]
tags: [python, satellite-imagery, image-processing, sentinel-2]
---

<img src="../assets/images/posts/wismar_rgb.png" class="post-image" alt="Wismar RGB Image">

## Introduction

This project focuses on analyzing remote sensing data from the Wismar area using Python. The main objectives were to perform image classification and edge detection on Sentinel-2 satellite imagery.

## Data Source

The data was obtained from Copernicus Dataspace:
- Collection: SENTINEL-2
- Location: Wismar area
- Time period: June 2023
- Product type: L2A
- Cloud cover: < 1.0%

## Methodology

### 1. Data Acquisition and Preprocessing

```python
def get_access_token(username: str, password: str) -> str:
    data = {
    "client_id": "cdse-public",
    "username": username,
    "password": password,
    "grant_type": "password",
    }
    r = requests.post(
    "https://identity.dataspace.copernicus.eu/auth/realms/CDSE/protocol/openid-connect/token",
    data=data,
    )
return r.json()["access_token"]
```

### 2. Image Classification

We performed a 3-class pixel-wise classification:
- Water
- Vegetation
- Urban areas

The classification was based on spectral signatures from representative points:

```python
Sample classification code
def classify_pixels(data, reference_points):
    distances = np.zeros((data.shape[0], data.shape[1], len(reference_points)))
    for i, ref_point in enumerate(reference_points):
    distances[:,:,i] = np.sqrt(np.sum((data - ref_point)2, axis=2))
return np.argmin(distances, axis=2)
```

### 3. Smoothing Filter

Applied a smoothing filter to reduce noise in the classification:

```python
def smooth_classification(clf_map, kernel_size=3):
    return convolve(clf_map.astype(float),
    np.ones((kernel_size,kernel_size))/(kernel_size2),
    mode='reflect')
```

### 4. Edge Detection

Implemented edge detection on the binary water classification map:

```python
my_edge_filter = np.array([[1, 1, 1],
    [1, -8, 1],
    [1, 1, 1]])
    edge_map = convolve(binary_clf_map.astype(float),
    my_edge_filter,
    mode='reflect'
)
```

## Results

### Classification and Edge Detection Results
<img src="assets/images/posts/clf.png" class="post-image" alt="Classification Map" style="width: 100%; max-width: 500px;">

The classification successfully identified:
- Water bodies (blue)
- Vegetation areas (green)
- Urban areas (gray)

### Edge Detection Results

The edge detection effectively highlighted:
- Coastlines
- Lake boundaries
- Water-land interfaces

## Discussion

### Classification Accuracy
- The smoothing filter significantly reduced noise in the classification
- Clear distinction between water bodies and land areas
- Some confusion between urban and vegetation in mixed areas

### Edge Detection Performance
- Successfully detected water body boundaries
- The smoothed classification map provided better edge detection results
- Clear delineation of coastlines and lake shores

## Conclusion

The analysis demonstrated effective use of:
- Sentinel-2 multispectral data
- Pixel-based classification
- Spatial filtering techniques
- Edge detection algorithms

The results show good potential for automated water body mapping and coastline detection using Sentinel-2 imagery.

## Future Improvements

1. Implement more sophisticated classification algorithms
2. Add validation using ground truth data
3. Explore different edge detection methods
4. Include temporal analysis for change detection

## Code Repository

The complete code and analysis can be found in my [GitHub repository](https://github.com/SonyaX20/remote-sensing-analysis).