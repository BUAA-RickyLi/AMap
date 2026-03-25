# AMap

[CVPR 2026] **AMap: Distilling Future Priors for Ahead-Aware Online HD Map Construction**

Ruikai Li, Xinrun Li, Mengwei Xie, Hao Shan, Shoumeng Qiu, Xinyuan Chang, Yizhe Fan, Feng Xiong, Han Jiang, Yilong Ren, Haiyang Yu, Mu Xu, Yang Long, Varun Ojha, Zhiyong Cui

Beihang University, AMap Alibaba Group, Newcastle University, Durham University

Equal contribution. Corresponding author included in the author list.

[![Project Page](https://img.shields.io/badge/Project-Page-4c8bf5?style=for-the-badge)](https://buaa-rickyli.github.io/AMap/)
[![arXiv](https://img.shields.io/badge/arXiv-2512.19150-b31b1b?style=for-the-badge)](https://arxiv.org/abs/2512.19150)
[![PDF](https://img.shields.io/badge/Paper-PDF-darkgreen?style=for-the-badge)](https://arxiv.org/pdf/2512.19150)

## Teaser

![AMap teaser](assets/images/teaser.png)

## Abstract

Online High-Definition (HD) map construction is pivotal for autonomous driving. While recent approaches leverage historical temporal fusion to improve performance, they remain spatially backward-looking and provide limited improvement for the unseen road ahead. AMap addresses this gap with an ahead-aware online HD mapping framework based on a distill-from-future paradigm: a teacher with privileged access to future temporal context supervises a lightweight student restricted to the current frame, implicitly injecting look-ahead capability without extra inference-time cost.

Technically, AMap introduces Multi-Level BEV Distillation with spatial masking and an Asymmetric Query Adaptation module to transfer future-aware representations effectively. Experiments on nuScenes and Argoverse 2 show strong gains in current-frame perception, especially in critical forward regions, while preserving the efficiency of single-frame inference.

## Highlights

- Ahead-aware online HD mapping for safety-critical forward regions.
- Distill future temporal priors into a current-frame student model.
- Zero extra inference-time cost while improving forward-region quality.
- Strong performance on both nuScenes and Argoverse 2.

## Repository Status

- This repository currently hosts the public project homepage and assets.
- Code release, demo video, and additional resources can be added here later.

## Citation

If you find this work useful, please cite:

```bibtex
@inproceedings{li2026amap,
  title     = {AMap: Distilling Future Priors for Ahead-Aware Online HD Map Construction},
  author    = {Li, Ruikai and Li, Xinrun and Xie, Mengwei and Shan, Hao and Qiu, Shoumeng and
               Chang, Xinyuan and Fan, Yizhe and Xiong, Feng and Jiang, Han and Ren, Yilong and
               Yu, Haiyang and Xu, Mu and Long, Yang and Ojha, Varun and Cui, Zhiyong},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2026}
}
```

## License

This project is released under the MIT License. See `LICENSE` for details.
