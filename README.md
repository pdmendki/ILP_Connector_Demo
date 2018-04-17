### ILP Local Tier2 Connector Demo

1. Install all of the necessary components to run a tier2 connector locally. Run
   the following 2 commands:

```
npm install -g ilp-connector ilp-plugin-btp ilp-plugin-xrp-asym-client ilp-plugin-mini-accounts
ilp-spsp ilp-spsp-server pm2

CONNECTOR_STORE_PATH=~/.connector-data CONNECTOR_ACCOUNTS='{}' CONNECTOR_ILP_ADDRESS=test.quickstart
```

2. Open launch.config.js. Inside you will see 2 plugins at the top. The 
asym client plugin connects to the upstream parent connector. This is used to
pull all routing information in from the tier 1 connector. The mini accounts
plugin is used maintain a balance on the wallet of the child connector. 

3. Input your test wallet public key and secret. Use
https://ripple.com/build/xrp-test-net/ to generate these keys. Fill them out in
the KEY_HERE section at the top. Change the CONNECTOR_STORE_PATH where it says
USERNAME and input your username.  

4. Launch your connector.

```
pm2 start launch.config.js
pm2 logs
```

If no errors appear, your connector is running successfully. Now it's time to
test it out.

5. Start a seperate test server on your computer in a new terminal tab.

```
ilp-spsp-server start
```

This will output a payment pointer for a local endpoint hosted on the server.

6. Send money to your connector. In yet another new tab (don't close the
   server), run the following:

```
ilp-spsp send --amount 10 --receiver '$TESTSERVERPAYMENTPOINTER'
```

7. If all went well, you should have just received 10 drops on your connector
   server. Good job! You've successfully launched a connector.
