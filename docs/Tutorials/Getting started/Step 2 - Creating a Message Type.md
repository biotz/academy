As the name implies this is a type of message your device can send. If your device outputs different information structures, each of them would be a different Message Type. In this tutorial, you will create a single Message Type for the sake of simplicity. To do so, from the sidebar, in the **Setup** section, click on **Data Ingestion Flow**. You will be presented with the following page:

<div class="tutorial-image-container">
    ![Confirm](/img/dataIngestionFlow.png)
</div>

This is a table listing the different Device Types you have. As per this tutorial instructions, and assuming you did not create any resources yet, you should see only one Device Type which is the one you created in the previous step, **My test device type**.

Now, click on the **My test device type**. This will lead you to another page with the listing of message types which will be empty as you do not have created any yet for the selected Device Type. Click on the button **New message type** and a form will appear to gather the details of the new Message Type.


Fill the form with the following information:

- **Name: My test message type**
- **Description: My test message type**
- **Communication protocol: HTTP**
- **Message encoding: JSON**

<div class="tutorial-image-container">
    ![Confirm](/img/NewMessageType.png)
</div>


To make the tutorial simpler, **HTTP communication protocol** and **JSON message encoding** are the right choices as they do not require as much to work with unlike **MQTT** and **Message Pack**. Leave the **internal name** as it is. Now click on create and you should now have a new Message Type to work with.

In the next step you will <a href="./Step 3 - Creating a Schema" target="_self">create a Schema</a> for your newly created Message Type. Follow along.