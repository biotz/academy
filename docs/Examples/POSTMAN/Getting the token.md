---
sidebar_position: 3
sidebar_label: Getting the token
---

# Getting the token

To get the token needed for authorization when sending our request, you must first follow these steps.

**Getting the necessary data:**

First you will have to **create a device**, to create the device, you will have to choose the **device type** you are going to use, the **message type** you are going to use and the **schema**. If you have not created these, you can create it step by step following <a href="/docs/Tutorials/Getting started/Step 1 - Creating a Device Type" target="_self">this link</a>.

After creating the schema, you will get an excel with some important data that you will have to save for later use. 

<div class="tutorial-image-container">
![icon](../img/excell-data.png)
</div> 

Once you have saved all these data, you must follow a few steps to get the token.

**Now, you must go to the terminal.**

Once in the terminal, to get the token you have to write this bash in the terminal:
```bash title="HTTPie"
http --auth-type bearer \
--auth ~YOUR ID_TOKEN~ \
POST https://ingestion-http.biotz.io/api/device/publish/data/mytestmessag \
hum=20.5 temp=25.6
```
Then, you have to change the username and password for the excel data, where it says "\~HTTP USER FROM CSV~", you must write the http username of your CSV, and where it says "\~PASSWORD FROM CSV~" what it is in the password of the CSV. If you are in the test enviroment, in the link, instead of auth.biotz.io you should put auth.test.biotz.io. 

Now, if you have done everything correctly by pressing enter, you should see three different tokens, and at the bottom, the token type. 
