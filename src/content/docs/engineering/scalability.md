---
title: Achieving Scalability
description: How to build AI systems that scale to millions of users.
---

Scalability in AI systems is uniquely challenging due to the computational intensity of model inference and the vast amounts of data required for context.

## Horizontal Scaling

We recommend scaling the **AI Gateway** and **LLM Engine** independently to handle varying loads.

:::tip[Optimization]
Implementing a robust caching layer for common embedding vectors can reduce latency by up to 80% in high-traffic applications.
:::

## Vertical Scaling

When processing large datasets for training or fine-tuning, vertical scaling of GPU resources is often necessary. Ensure your infrastructure supports dynamic resource allocation.
