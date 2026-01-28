---
title: Transformer Translator
date: 2025-08-01
description: Implemented Transformer architecture from scratch in PyTorch for English-Spanish translation
technologies: PyTorch, Hugging Face, Tokenizers, TensorBoard
---

Implemented a Transformer architecture from scratch in PyTorch for English-Spanish translation, including encoder-decoder framework, multi-head attention, feed-forward layers, and residual connections. Built custom bilingual dataset pipeline (93k sentence pairs) leveraging Hugging Face's opus books corpus with word-level tokenization, special tokens, and sequence padding. Designed PyTorch Dataset class with encoder, decoder, and causal masks for autoregressive translation training. Developed training & validation pipelines with Adam optimizer & TensorBoard monitoring, achieving BLEU score of 27.
