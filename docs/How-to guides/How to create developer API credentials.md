---
sidebar_position: 10
sidebar_label: How to create Developer API credentials
---
# Developer API

## Introduction

To create applications that consume our data we have a Developer API, following <a href="https://api.test.biotz.io/docs/ui/index.html#/" target="_self">this link</a> you will be able to consult more information about the endpoints in our documentation.

## Credentials creation

In order to connect with the API, you need to create some **credentials** in the credentials view, under the **Developer API** section

<div class="tutorial-image-container">
![Credentials creation](/img/credentials-creation.png)
</div>


Once here, clicking in the **New credentials** button will redirect you to the form. In this view we have to set the credentials name, a description can also be set to differentiate better between one another.
<div class="tutorial-image-container">
![New credentials](/img/new-credentials.png)
</div>
<br></br>

When finished, click **Save** and it will show the user information:
<div class="tutorial-image-container">
![Credentials created succesfully](/img/credentials-created-succesfully.png)
</div>
As shown in the pop-up, this information will only appear once. So download the credentials file and save somewhere safe.

## API consumption

Now that we have our credentials created. We need to configure the authentication. For this example we will use the API documentation mentioned before.
<div class="tutorial-image-container">
![Developer](/img/biotz-developer-api.png)
</div>
Clicking the **Authorize** button a pop-up will show, in which we need to add this information, also found on the
<a href="/academy/docs/Reference guides/Developer API" target="_self">Developer API Reference</a>.

- **Username:** The username in the credentials file we have downloaded before.
- **Password:** The password in the credentials file we have downloaded before.
- **Client credentials location:** You need to set this to Authorization header.
- **Client_id:** You need to set always "biotz-platform-programmatic-users".
- **Client_secret:** This one goes empty.
- **Scopes:** You need to check the openid box.

<div class="tutorial-image-container">
![Authorize1](/img/authorize-1.png)
</div>
When the authorization is done correctly, you should see a pop-up saying that your **Authorized**.

<div class="tutorial-image-container">
![authorize2](/img/authorize-2.png)
</div>
With this your capable of consuming the API and get the needed data.







