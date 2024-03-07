---
id: Getting started

---

# Getting started

This tutorial offers a comprehensive guide on establishing a seamless data ingestion flow within the Biotz platform. The process involves a systematic sequence of 7 steps that entail configuring Biotz's core components. Through these steps, you'll initiate the transmission and ingestion of data. Notably, this tutorial eliminates the necessity for a physical device to complete the procedures; all tasks associated with data transmission and ingestion will be simulated, fostering an accessible and hands-on learning experience.

# Prerequisites

To successfully finish this tutorial, you must adhere to the subsequent prerequisites:

- You must possess an operational Biotz account.
- An account in a trial state is also considered acceptable.
- Access to a terminal is essential. It will be employed for executing fundamental commands to simulate data transmission.
- A tool for initiating HTTP requests is required. This can include utilities like [cURL](https://curl.se/) or [HTTPie](https://httpie.io/).

It's important to note that this tutorial assumes familiarity with using the terminal.


## Core concepts

In this tutorial, you will be generating various resources within Biotz. As you progress, you will gradually gain a better understanding of each of these resources. However, before you commence, it's crucial to grasp a few fundamental concepts:

- ‍**Device Type**: Biotz arranges devices into specific categories known as Device Types. This organization method serves to systematically categorize devices and, as you'll soon discover, standardizes the structure of the data they transmit to the platform.‍
- **Message Type**: Each Device Type has the capacity for multiple Message Types. Essentially, every Device Type can transmit various forms of data messages (N in total) to the platform.‍
- **Message Type Schema**: Every message adheres to a specific structure. In Biotz, this structure is termed a Schema. A Schema outlines the format of data for a given Message Type.‍
- **Device**: This refers to the tangible apparatus that dispatches data to the platform.

With these concepts clarified, your initial task will involve the <a href="/academy/docs/Tutorials/Getting started/Step 1 - Creating a Device Type" target="_self">creation of a Device Type</a>.

