In this tutorial, as said in the beginning, the data sending will be simulated. To do so, you will make an HTTP request to the **http-forwarder** service of Biotz which will, as the name implies, forward your data ingestion request to the competent services. That is the reason why you chose the **HTTP communication protocol** before when creating a message type.


However in order to call the **http-forwarder** service you have to identify yourself and retrieve a credential, a token that will be used to validate your identity. For that, You will be using some of the credentials you have downloaded in the previous step, during the device creation process. To retrieve a token you will need to authenticate against Biotz identity provider using the following information:

- **Username: the HTTP Username value in the credentials file.**
- **Password: the Password value in the credentials file.**
- **Client ID: biotz-platform-devices**
- **Grant type: password**
- **Scope: openid**

With that information you can craft an HTTP request for this simulation to get the token. In this tutorial, it is assumed you have some experience working the terminal. As said at the beginning of this tutorial, **HTTPie** and **cURL** tools will be used to provide examples for HTTP requests. Here is the request to retrieve the token using both tools (please make sure to adjust the request with your own credentials):

	
```jsx title="HTTPie"
http --form POST \
https://auth.biotz.io/realms/biotz-platform/protocol/openid-connect/token \
username=~HTTP USER FROM CSV~ \
password=~PASSWORD FROM CSV~ \
grant_type=password \
client_id=biotz-platform-devices \
scope=openid 
```
<br></br>

```jsx title="cURL"
curl --request POST \
--url https://auth.biotz.io/realms/biotz-platform/protocol/openid-connect/token \
--data-urlencode username=~HTTP USERNAME FROM CSV~ \
--data-urlencode password=~PASSWORD FROM CSV~ \
--data-urlencode client_id=biotz-platform-devices \
--data-urlencode grant_type=password \
--data-urlencode scope=openid
```
<br></br>

This will return a response which contains the **id_token**. Copy its value and hold on to it as you will need it to <a href="./Step 6 - Sending a data ingestion request" target="_self">send the data ingestion request</a>.
‍