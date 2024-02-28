
Now that you have a token from Biotz Identity Provider, it is time to send actual data to Biotz. In this tutorial, as said before, you will simulate a device sending data using the terminal. The approach is basically the same as to retrieve a token, just an HTTP request to the **http-forwarder** service. It will take your request and re-route it into a queue to be processed when the system is available.
<br></br>
For the request to be accepted by the **http-forwarder** it needs three things:
- The **id_token**.
- The message type **internal name** for your device. This should be **mytestmessag** if you have been following this tutorial.
- Request **payload**. This is your device’s data. The payload should have the shape/structure of the schema you defined previously. That means, an **Object** containing the keys **hum**, **temp** and **time**.

In this case the **Object** is an JSON object since the **mytestmessag** definition was configured with the **JSON** encoding.

<br></br>
Now, the request is very simple, you will send just a single sample of data (a single request in this case) to the platform. Here is an example using both HTTPie and cURL.

```jsx title="HTTPie"
http --auth-type bearer \
--auth ~YOUR ID_TOKEN~ \
POST https://ingestion-http.biotz.io/api/device/publish/data/mytestmessag \
hum=20.5 temp=25.6
```
<br></br>

```jsx title="cURL"
curl --header "Content-Type: application/json" \
--header "Authorization: Bearer ~YOUR ID_TOKEN~" \
--request POST \
--data '{"hum": 20.5, "temp": 25.6}' \
https://ingestion-http.biotz.io/api/device/publish/data/~INTERNAL NAME OF MESSAGE_TYPE~
```
<br></br>

The response should look like this:
```
{
	"success?": true,
	"details": {}
}
```

If that is the response you got, then the request was successful. Now your data should be available on the platform. To see that, in the next step you will create a dashboard to display your data.

‍