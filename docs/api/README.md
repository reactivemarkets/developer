# Switchboard API

Welcome to the home of the Switchboard API! Here you will find information on everything you
need to get up and running with our real-time API into the cryptocurrency markets.

Switchboard aims to provide the fastest, most efficient and most stable data
infrastructure available. We offer several APIs options to cater for different styles of use case
but all share the same highly optimised technology stack.

Our normalised data model allows you to integrate once and then rely on us to provide you with a
rapidly growing list of data types and trading venues. Additionally, the API gives you flexible
options of how you would like to view and receive your market data. You can control the streaming
data frequency, specify the depth of the order book or whether you would like the data grouped into
more suitable aggregate levels. For example, you could choose to receive the top 5 levels of BTCUSD
every 1 second and aggregated into groups of 10 cents or the top 10 levels of BTCUSD every 100
milliseconds as the raw order book.

## API Keys

To access the WebSocket API you will need a Switchboard API key. A new API key can be
generated in Switchboard in three steps:

1. login to the [Switchboard API Keys](https://switchboard.reactivemarkets.com/keys) page.
2. click the "Create New API Key" button and make a note of your new API key.

::: warning
Your new API key will only be displayed once when generated. If you lose your API key, then you will
need to generate a new one using the steps above.
:::

## API Options

Currently we support the following APIs:

- Streaming binary data over WebSocket API.
- Streaming FIX data FIX API.
- REST API.

### WebSocket API

Our WebSocket API is optimised for fast, efficient streaming market data. It uses a binary data
format to reduce data volumes and improve processing efficiency within our network and in your
client. By optimising the format, we are able to pack order book data into frequent snapshots
allowing you to consume data that requires no order book maintenance in your client code - as soon
as you receive it, it’s ready to use. The feed request API offers various parameters to control
exactly what data you’d like to see and how frequently you’d like to see it.

- **Depth Control**: Only receive the data that you want to see, saving data and wasted effort of
  receiving and maintaining data that you don't need.
- **Order Book Snapshots**: Let our optimised book building do the hard work and simply consume the
  data in a ready to use format.
- **Update Frequency**: Choose the optimal data frequency for your use case and avoid the effort of
  continually maintaining the order book if you don't need it.
- **Grouping**: Choose between raw order book snapshots or let us aggregate the data stream for you.

See [WebSocket](/api/websocket/) and [FlatBuffers](/api/flatbuffers/install/) sections for full
documentation.
