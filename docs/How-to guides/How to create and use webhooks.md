---
sidebar_position: 6
sidebar_label: How to create and use a webhook
---
# How to create and use webhooks

## Introduction

Biotz provides webhook subscriptions for it's alarms. In short a  [webhook](https://en.wikipedia.org/wiki/Webhook) is a method used by one application (e.g. Biotz) to send real-time data to another application (e.g. customers) when a specific event occurs. 

## Prerequisites
There is no Prerequisite to creating a webhook. However webhooks are used against device events, so to use them, you need a device type that includes at least one message type and schema. It's also recommended to have a device that has already transmitted some data.

## Creating a webhook

Webhooks are created from the “Developer tools” section in the sidebar. To create a webhook provide a name, and the mandatory  "callback url" e.g. the URL that the event data is going to be pushed against. Webhooks only support https URLs

<div class="tutorial-image-container">
 ![Developer tools -> webhooks](img/developer_tools_webhooks.png)
</div>

Clicking “new webhook” gets you to a form, to enter the name and url for your webhook
<div class="tutorial-image-container">
 ![New webhook](img/new_webhook.png)
</div>


On clicking "Save" the webhook is created, and a secret" is automatically generated. It is advised to regenerate the secrete regularly 

<div class="tutorial-image-container">
 ![Webhook created!](img/webhook_created.png)
</div>

Now the webhook is ready for use. Don't forget to take a note of the webhook's name and secret for later use ! 


## Registering a device alarm with the webhook
A webhook to be useful must be subscribed to a Biotz event. For now only alarm notifications events support webhook integration.
To add one under the sidebar section Setup  navigate to "Alarm Triggers" and choose a device type e.g. device type 1

<div class="tutorial-image-container">
  ![Select device type from alarm triggers](img/alarm_trigger_webhook_1.png)
</div>

Then either create or edit an alarm trigger and click under"Edit webhook list"

<div class="tutorial-image-container">
  ![Edit wehook list](img/alarm_trigger_webhook_2.png)
</div>

Search your webhook by name and add it from the tropdown and then save. Now you can proceed to actually use the webhook from your app

<div class="tutorial-image-container">
  ![Search and add webhook](img/alarm_trigger_webhook_3.png)
</div>


## Receive webhook event data

If all the above steps were followed and there is at least one device that 
generates alarms then alarm data will be send to the webhook uri via post.

From the client side there should validation of the webhook via Biotz-IoT-Signature"   header entry. Biotz-IoT-Signature has the following structure:  

```
Biotz-IoT-Signature:t=1492774577,v1=d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5,

``` 

Where the string following v1= is  the signed payload of the event and is created by first concatenating:

* The string timestamp
* The character .
* The actual alarm payload in json, the body of the post request

And then generating an SHA256 of the concatenation using the webhook secret key

