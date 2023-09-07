(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{474:function(e,t,n){e.exports=n.p+"assets/img/LightningNetworkNodeSetupOverview.e5d785ca.jpg"},766:function(e,t,n){"use strict";n.r(t);var i=n(9),o=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"lightning-network-ln-and-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightning-network-ln-and-btcpay-server"}},[e._v("#")]),e._v(" Lightning Network (LN) and BTCPay Server")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("After deploying BTCPay Server, you may want to experiment with an innovative second-layer payment system built on top of Bitcoin protocol - the "),t("a",{attrs:{href:"https://en.bitcoin.it/wiki/Lightning_Network",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lightning Network"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("This guide will show you how to set up your Lightning Network (LN) node in BTCPay Server and guide you through the basics.")]),e._v(" "),t("p",[e._v("BTCPay Server currently offers three implementations of the Lightning Network:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/lightningnetwork/lnd",target:"_blank",rel:"noopener noreferrer"}},[e._v("LND"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ElementsProject/lightning",target:"_blank",rel:"noopener noreferrer"}},[e._v("Core Lightning (CLN)"),t("OutboundLink")],1),e._v(" (formerly c-lightning)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ACINQ/eclair",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclair"),t("OutboundLink")],1)])]),e._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),t("p",[e._v("Before you proceed, please understand that the Lightning Network is still in the experimental stage.\nUsing the Lightning Network can put your money at risk. Do not use more than you can afford to lose.")])]),e._v(" "),t("p",[e._v("Take time to familiarize yourself with the risks associated with using the Lightning Network.")]),e._v(" "),t("p",[e._v("If you choose to run the internal Lightning Node in BTCPay Server, consider:")]),e._v(" "),t("ol",[t("li",[e._v("Any lightning network node operates at 2 levels: "),t("strong",[e._v("on-chain")]),e._v(" and "),t("strong",[e._v("off-chain")]),e._v(".")]),e._v(" "),t("li",[e._v("The LN implementation of choice will create an on-chain hot wallet that will be used to fund the off-chain payment channels.")]),e._v(" "),t("li",[e._v("Make sure you back up the "),t("strong",[e._v("on-chain")]),e._v(" hot wallet seed (see below instructions for the individual implementations).")]),e._v(" "),t("li",[e._v("The seed in step #3 can "),t("strong",[e._v("only recover the on-chain funds")]),e._v(", although it is necessary for the off-chain operation.")]),e._v(" "),t("li",[t("strong",[e._v("Off-chain")]),e._v(" funds locked in channels "),t("strong",[e._v("cannot")]),e._v(" be backed up using a single-seed. Read the documentation issued by your LN implementation of choice.")]),e._v(" "),t("li",[t("strong",[e._v("Off-chain")]),e._v(" recovery mechanisms are under active research and development. Erasing your BTCPay Server or unsafe/unsecure operation of the computing environment (e.g Filesystem corruption, compromised keys) can lead to permanent "),t("strong",[e._v("loss of funds")]),e._v(".")])]),e._v(" "),t("p",[e._v("As the technology matures and develops, mechanisms for proper backup will be easier to implement in BTCPay Server.\nAs of "),t("a",{attrs:{href:"https://blog.btcpayserver.org/btcpay-lnd-migration/",target:"_blank",rel:"noopener noreferrer"}},[e._v("v1.0.3.138"),t("OutboundLink")],1),e._v(", LND is the only lightning network implementation that allows for "),t("RouterLink",{attrs:{to:"/FAQ/LightningNetwork/#where-can-i-find-recovery-seed-backup-for-my-lightning-network-wallet-in-btcpay-server"}},[e._v("lightning seed backups with BTCPay Server")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"choosing-the-lightning-network-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#choosing-the-lightning-network-implementation"}},[e._v("#")]),e._v(" Choosing the Lightning Network implementation")]),e._v(" "),t("p",[e._v("First, read "),t("RouterLink",{attrs:{to:"/FAQ/LightningNetwork/#can-i-use-a-pruned-node-with-ln-in-btcpay"}},[e._v("here")]),e._v(" about using pruned Bitcoin nodes with lightning network implementations before deploying.")],1),e._v(" "),t("p",[e._v("On the installation, you'll have the option to choose the implementation.")]),e._v(" "),t("p",[e._v("For "),t("RouterLink",{attrs:{to:"/Deployment/LunaNode/"}},[e._v("web-interface installations")]),e._v(", you can simply select the implementation from the drop-down menu.\nFor other "),t("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker"),t("OutboundLink")],1),e._v(" based "),t("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("deployment methods")]),e._v(" you need to:")],1),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_LIGHTNING")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"implementationgoeshere"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./btcpay-setup.sh -i\n")])])]),t("ul",[t("li",[e._v("For "),t("strong",[e._v("Core Lightning (CLN)")]),e._v(" use "),t("code",[e._v('export BTCPAYGEN_LIGHTNING="clightning"')])]),e._v(" "),t("li",[e._v("For "),t("strong",[e._v("LND")]),e._v(" use "),t("code",[e._v('export BTCPAYGEN_LIGHTNING="lnd"')])]),e._v(" "),t("li",[e._v("For "),t("strong",[e._v("eclair")]),e._v(" use "),t("code",[e._v('export BTCPAYGEN_LIGHTNING="eclair"')]),e._v(" AND "),t("code",[e._v('export BTCPAYGEN_ADDITIONAL_FRAGMENTS="opt-txindex"')])])]),e._v(" "),t("p",[e._v("Finally, to begin using Lightning, your blockchain needs to be fully synced.")]),e._v(" "),t("h2",{attrs:{id:"lightning-node-configuration-in-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightning-node-configuration-in-btcpay-server"}},[e._v("#")]),e._v(" Lightning node configuration in BTCPay Server")]),e._v(" "),t("h3",{attrs:{id:"connecting-your-internal-lightning-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-your-internal-lightning-node"}},[e._v("#")]),e._v(" Connecting your internal Lightning Node")]),e._v(" "),t("p",[e._v("Irrespective of the LN implementation deployed, the process of connecting your internal Lightning Node in BTCPay Server is the same.")]),e._v(" "),t("ol",[t("li",[e._v("Choose a store")]),e._v(" "),t("li",[e._v('Go to "Lightning" > Select "Use internal node"')]),e._v(" "),t("li",[e._v('Click "Save" > See "BTC Lightning node updated" message')]),e._v(" "),t("li",[e._v('Go to "Public Node Info" > The node should appear '),t("strong",[e._v('"Online"')])])]),e._v(" "),t("figure",[t("img",{attrs:{src:n(474),alt:"LightningNetworkNodeSetupOverview",title:"LightningNetworkNodeSetupOverview"}})]),e._v(" "),t("p",[e._v("If the internal connection fails, confirm:")]),e._v(" "),t("ol",[t("li",[e._v("The Bitcoin on-chain node is fully synchronized")]),e._v(" "),t("li",[e._v('The Internal lightning node is "Enabled" under "Lightning" > "Settings" > "BTC Lightning Settings"')])]),e._v(" "),t("p",[e._v("If you are unable to connect to your Lightning node, try "),t("RouterLink",{attrs:{to:"/FAQ/ServerSettings/#how-to-restart-btcpay-server"}},[e._v("restarting your server")]),e._v(" or reviewing our "),t("RouterLink",{attrs:{to:"/Troubleshooting/"}},[e._v("troubleshooting guide")]),e._v('. You will not be able to accept lightning payments in your store until your Lightning node appears "Online". Try to test your Lightning connection by clicking the "Public Node Info" link.')],1),e._v(" "),t("h3",{attrs:{id:"connecting-an-external-lightning-node-in-btcpay-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connecting-an-external-lightning-node-in-btcpay-server"}},[e._v("#")]),e._v(" Connecting an external Lightning Node in BTCPay Server")]),e._v(" "),t("p",[e._v("BTCPay Server offers the option to connect to an external Lightning node. To configure it:")]),e._v(" "),t("ol",[t("li",[e._v('Go to "Lightning" > Select "Use custom node" if there is no Lightning node configured.')]),e._v(" "),t("li",[e._v('Go to "Lightning" > Select "Settings" > Select "Change connection" > Select "Use custom node" to modify an existing connection')]),e._v(" "),t("li",[e._v('Add the configuration details matching the lightning implementation used > "Test connection"')])]),e._v(" "),t("h2",{attrs:{id:"getting-started-with-btcpay-server-and-lnd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-btcpay-server-and-lnd"}},[e._v("#")]),e._v(" Getting started with BTCPay Server and LND")]),e._v(" "),t("h3",{attrs:{id:"control-your-lnd-using-ride-the-lightning-rtl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#control-your-lnd-using-ride-the-lightning-rtl"}},[e._v("#")]),e._v(" Control your LND using Ride The Lightning (RTL)")]),e._v(" "),t("p",[e._v("The easiest way to use LND implementation with BTCPay Server is to use the "),t("strong",[e._v("[Ride The Lightning]https://github.com/Ride-The-Lightning/RTL)")]),e._v(" (RTL) service. A web user interface for the Lightning Network, RTL allows you to operate your node without leaving BTCPay Server, from your browser.\n"),t("br"),e._v("\nTo initiate RTL in BTCPay Server, Go to Server Settings > Services > Ride The Lightning > See information.")]),e._v(" "),t("h3",{attrs:{id:"control-your-lnd-using-zap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#control-your-lnd-using-zap"}},[e._v("#")]),e._v(" Control your LND using Zap")]),e._v(" "),t("p",[e._v("For remote use of your LND node on iOS or PC, you can use "),t("a",{attrs:{href:"https://github.com/LN-Zap/zap-tutorials/blob/master/docs/desktop/btcpay-server.mdx",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zap wallet integration"),t("OutboundLink")],1),e._v(".\n\\")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/CWhTOunTb2Q/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=CWhTOunTb2Q",title:"LND BTCPay","data-id":"CWhTOunTb2Q"}},[t("iframe",{attrs:{title:"LND BTCPay","data-src":"https://www.youtube-nocookie.com/embed/CWhTOunTb2Q?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v("\n\\\nBesides Zap, there are a few more wallets that allow remote control of the LND node, [the Nayuta wallet](https://nayuta.co/) and the [ZeusLN](https://github.com/ZeusLN/zeus). Both of which have not yet extensively been tested by the community.\n"),t("h3",{attrs:{id:"control-your-lnd-using-lightning-joule"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#control-your-lnd-using-lightning-joule"}},[e._v("#")]),e._v(" Control your LND using Lightning Joule")]),e._v(" "),t("p",[e._v("To remotely control your LND node via web browser, you can use Lightning Joule.\n\\")]),e._v(" "),t("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/a9_uHJhnKR4/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=a9_uHJhnKR4",title:"Joule","data-id":"a9_uHJhnKR4"}},[t("iframe",{attrs:{title:"Joule","data-src":"https://www.youtube-nocookie.com/embed/a9_uHJhnKR4?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),t("h3",{attrs:{id:"control-your-lnd-via-the-command-line-lncli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#control-your-lnd-via-the-command-line-lncli"}},[e._v("#")]),e._v(" Control your LND via the command-line: lncli")]),e._v(" "),t("p",[e._v("LND can be accessed via the command-line using the shell script "),t("code",[e._v("bitcoin-lncli.sh")]),e._v(".\n"),t("br"),e._v("\nIf you're on Docker make sure you're in docker directory.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n./bitcoin-lncli.sh "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$command")]),e._v("\n./bitcoin-lncli.sh getinfo "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#show info about the node")]),e._v("\n")])])]),t("p",[e._v("Run ./bitcoin-lncli.sh --help` to see a full list of commands or check the full "),t("a",{attrs:{href:"https://api.lightning.community/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"getting-started-with-btcpay-server-and-core-lightning-cln"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-btcpay-server-and-core-lightning-cln"}},[e._v("#")]),e._v(" Getting started with BTCPay Server and Core Lightning (CLN)")]),e._v(" "),t("h3",{attrs:{id:"control-your-cln-using-ride-the-lightning-rtl"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#control-your-cln-using-ride-the-lightning-rtl"}},[e._v("#")]),e._v(" Control your CLN using Ride The Lightning (RTL)")]),e._v(" "),t("p",[e._v("The easiest way to use CLN implementation with BTCPay Server is to use the "),t("strong",[e._v("[Ride The Lightning]https://github.com/Ride-The-Lightning/RTL)")]),e._v(" (RTL) service. A web user interface for the Lightning Network, RTL allows you to operate your node without leaving BTCPay Server, from your browser.\n"),t("br"),e._v("\nTo initiate RTL in BTCPay Server, Go to Server Settings > Services > Ride The Lightning > See information.")]),e._v(" "),t("h3",{attrs:{id:"control-your-cln-via-the-command-line-lightning-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#control-your-cln-via-the-command-line-lightning-cli"}},[e._v("#")]),e._v(" Control your CLN via the command-line: lightning-cli")]),e._v(" "),t("p",[e._v("Similar to "),t("code",[e._v("lncli")]),e._v(", CLN can be accessed via the command-line using the shell script "),t("code",[e._v("bitcoin-lightning-cli.sh")]),e._v(".\n"),t("br"),e._v("\nIf you're on Docker make sure you're in docker directory.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n./bitcoin-lightning-cli.sh "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$command")]),e._v("\n./bitcoin-lightning-cli.sh getinfo "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#show info about the node")]),e._v("\n")])])]),t("p",[e._v("Run "),t("code",[e._v("./bitcoin-lightning-cli.sh help")]),e._v(" to see a full list of commands or check the full "),t("a",{attrs:{href:"https://lightning.readthedocs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API documentation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"lightning-node-backup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lightning-node-backup"}},[e._v("#")]),e._v(" Lightning node backup")]),e._v(" "),t("p",[e._v("Before you start transacting using your new lightning node, consider backing up the "),t("strong",[e._v("on-chain")]),e._v(" wallet. Steps:")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("for LND")]),e._v(': storing a copy of the LND seed.\nGo to "Server Settings" > "Services" > "LND Seed Backup" and select "See information"')]),e._v(" "),t("li",[t("strong",[e._v("for CLN")]),e._v(": storing a copy of the "),t("a",{attrs:{href:"https://lightning.readthedocs.io/BACKUP.html#hsm-secret",target:"_blank",rel:"noopener noreferrer"}},[e._v("hsm_secret"),t("OutboundLink")],1),e._v(" "),t("br"),e._v("\nThe CLN $LIGHTNINGDIR is located in "),t("code",[e._v("/var/lib/docker/volumes/generated_clightning_bitcoin_datadir/_data/bitcoin")])])]),e._v(" "),t("p",[e._v("Acknowledge the limitations of "),t("strong",[e._v("off-chain")]),e._v(" payment channel backups and associated risks.\n"),t("br"),e._v("\nSee "),t("RouterLink",{attrs:{to:"/Docker/backup-restore/#lightning-channel-backup"}},[e._v("backup FAQ")]),e._v(" if you are running the BTCPay Server instance with Docker.")],1),e._v(" "),t("h3",{attrs:{id:"funding-your-on-chain-wallet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#funding-your-on-chain-wallet"}},[e._v("#")]),e._v(" Funding your on-chain wallet")]),e._v(" "),t("p",[e._v("Now that your lightning node is active, before opening lightning payment channels, you will need to fund the on-chain wallet.\n"),t("br"),e._v("\nThe on-chain funding process can be performed in two ways:")]),e._v(" "),t("ol",[t("li",[e._v("via the Ride The Lightning (RTL) UI interface")])]),e._v(" "),t("ul",[t("li",[e._v('Select a "Store" and go to the "Lightning" section')]),e._v(" "),t("li",[e._v('Under "Services", select "Ride The Lightning"')]),e._v(" "),t("li",[e._v('In the RTL app, go to "On-chain", select "Receive" under the "On-chain Transactions" menu')]),e._v(" "),t("li",[e._v('Select "Generate Address" and use it as the destination for the allocated funds')])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("via the command-line using "),t("code",[e._v("bitcoin-lncli.sh")]),e._v(" or "),t("code",[e._v("bitcoin-lightning-cli.sh")])])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" btcpayserver-docker\n./bitcoin-lncli.sh newaddress p2wkh "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#for LND")]),e._v("\n./bitcoin-lightning-cli.sh newaddr  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#for CLN")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"address"')]),e._v(" / "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bech32"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"bc1..........."')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#use this as the destination for the allocated funds")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Once your on-chain lightning node is funded, it's time to connect to other nodes on the network and open payment channels.\n"),t("br"),e._v("\nCheck out "),t("RouterLink",{attrs:{to:"/LightningNetwork_PaymentChannels/"}},[e._v("Payment channels")]),e._v(" for recommendations on opening payment channels, liquidity management and more.")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);