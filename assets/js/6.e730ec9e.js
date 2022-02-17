(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{662:function(e,t,a){e.exports=a.p+"assets/img/BTCPayInfographic.93db91b4.png"},663:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--01-plugin-search.d542b753.png"},664:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--02-activated-configure.3054c6da.png"},665:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--03-settings--api-key-redirect.b0a14711.png"},666:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--04-api-auth-login.24fcf642.png"},667:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--05-api-auth-select-store.35057b38.png"},668:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--06-api-auth-authorize-button.deb60b07.png"},669:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--07-api-auth-after-redirect-prefilled.53c9d4d9.png"},670:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--08-api-auth-save-webhook-created.9be9d0e4.png"},671:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--09-man-api--manage-account.ee1481c9.png"},672:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--10-man-api--keys-overview.c76cbd11.png"},673:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--11-man-api--permissions.faa1c50f.png"},674:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--12-man-api--permissions-save.13348435.png"},675:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--13-man-api--copy-key.5bf6d431.png"},676:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--14-man-api--copy-store-id.0631fa4e.png"},677:function(e,t,a){e.exports=a.p+"assets/img/btcpay-wc-2--15-man-api--btcpay-settings-save.4e5c50e1.png"},793:function(e,t,a){"use strict";a.r(t);var o=a(35),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"woocommerce-integration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#woocommerce-integration"}},[e._v("#")]),e._v(" WooCommerce integration")]),e._v(" "),o("p",[e._v("This document explains how to "),o("strong",[e._v("integrate BTCPay Server into your WooCommerce store")]),e._v(".\nIf you do not have a store yet, follow "),o("a",{attrs:{href:"https://bitcoinshirt.co/how-to-create-store-accept-bitcoin/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this step by step article"),o("OutboundLink")],1),e._v(" to create one from scratch.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("This guide refers to the BTCPay for WooCommerce V2 plugin. You can find instructions for the now unmaintained legacy plugin (based on BitPay API) "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-doc/blob/cba96292ceea9483711ab53c479a98357383f857/docs/WooCommerce.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("figure",[o("img",{attrs:{src:a(662),alt:"BTCPay - WooCommerce Infographic",title:"BTCPay - WooCommerce Infographic"}})]),e._v(" "),o("p",[e._v("To integrate BTCPay Server into an existing WooCommerce store, follow the steps below and/or watch this video:")]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/tTH3nLoyTcw/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=tTH3nLoyTcw","data-id":"tTH3nLoyTcw"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/tTH3nLoyTcw?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("Please ensure that you meet the following requirements before installing this plugin.")]),e._v(" "),o("ul",[o("li",[e._v("PHP version 7.4 or newer")]),e._v(" "),o("li",[e._v("The curl, gd, intl, json, and mbstring PHP extensions are available")]),e._v(" "),o("li",[e._v("A WooCommerce website ("),o("a",{attrs:{href:"https://woocommerce.com/document/installing-uninstalling-woocommerce/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Installation instructions"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"#deploying-woocommerce-from-btcpay-server"}},[e._v("directly on BTCPay Server")]),e._v(")")]),e._v(" "),o("li",[e._v("You have a BTCPay Server version 1.3.0 or later, either "),o("RouterLink",{attrs:{to:"/Deployment/"}},[e._v("self-hosted")]),e._v(" or "),o("RouterLink",{attrs:{to:"/Deployment/ThirdPartyHosting/"}},[e._v("hosted by a third-party")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/RegisterAccount/"}},[e._v("You've a registered account on the instance")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/CreateStore/"}},[e._v("You've a BTCPay store on the instance")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/WalletSetup/"}},[e._v("You've a wallet connected to your store")])],1)]),e._v(" "),o("h2",{attrs:{id:"1-install-btcpay-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#1-install-btcpay-plugin"}},[e._v("#")]),e._v(" 1. Install BTCPay Plugin")]),e._v(" "),o("p",[e._v("There are three ways to "),o("strong",[e._v("download BTCPay for WooCommerce V2 plugin")]),e._v(":")]),e._v(" "),o("ul",[o("li",[e._v("From within WordPress via the Admin Dashboard (recommended, see below)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://wordpress.org/plugins/btcpay-greenfield-for-woocommerce/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WordPress Repository"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/btcpayserver/woocommerce-greenfield-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Repository"),o("OutboundLink")],1)])]),e._v(" "),o("h3",{attrs:{id:"11-install-plugin-from-wordpress-admin-dashboard-recommended"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#11-install-plugin-from-wordpress-admin-dashboard-recommended"}},[e._v("#")]),e._v(" 1.1 Install plugin from WordPress Admin Dashboard (recommended)")]),e._v(" "),o("ol",[o("li",[e._v("WordPress > Plugins > Add New.")]),e._v(" "),o("li",[e._v('In Search, type "BTCPay V2".')]),e._v(" "),o("li",[e._v("Install and activate.")])]),e._v(" "),o("figure",[o("img",{attrs:{src:a(663),alt:"BTCPay WordPress V2: Plugin installation"}})]),e._v(" "),o("h3",{attrs:{id:"12-download-and-install-plugin-from-github"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#12-download-and-install-plugin-from-github"}},[e._v("#")]),e._v(" 1.2 Download and install plugin from GitHub")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/btcpayserver/woocommerce-greenfield-plugin/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download the latest BTCPay plugin"),o("OutboundLink")],1),e._v(", upload it in .zip format to your WordPress site and activate it.")]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/6QcTWHRKZag/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=6QcTWHRKZag","data-id":"6QcTWHRKZag"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/6QcTWHRKZag?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("h2",{attrs:{id:"2-connecting-woocommerce-and-btcpay-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#2-connecting-woocommerce-and-btcpay-server"}},[e._v("#")]),e._v(" 2. Connecting WooCommerce and BTCPay Server")]),e._v(" "),o("p",[e._v("BTCPay for WooCommerce V2 plugin is a "),o("strong",[e._v("bridge between your BTCPay Server (payment processor) and your e-commerce store")]),e._v(".\nNo matter if you're using a self-hosted or third-party solution, the connection process is identical.")]),e._v(" "),o("p",[e._v('You can either click on the notifications link saying "'),o("strong",[e._v("please configure the plugin here")]),e._v('" (see screenshot below), or:')]),e._v(" "),o("ul",[o("li",[e._v("Go to your store dashboard.")]),e._v(" "),o("li",[e._v("WooCommerce > Settings.")]),e._v(" "),o("li",[e._v("Click [BTCPay Settings] tab.")])]),e._v(" "),o("figure",[o("img",{attrs:{src:a(664),alt:"BTCPay WordPress V2: Link to BTCPay Settings"}})]),e._v(" "),o("h3",{attrs:{id:"21-connect-using-the-api-key-wizard-recommended"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#21-connect-using-the-api-key-wizard-recommended"}},[e._v("#")]),e._v(" 2.1 Connect using the API key wizard (recommended)")]),e._v(" "),o("ol",[o("li",[o("p",[e._v('In the field "'),o("strong",[e._v("BTCPay Server URL")]),e._v('", enter the full URL of your host (including the https) – https://btcpay.mydomain.com')])]),e._v(" "),o("li",[o("p",[e._v('Click on the link below the "'),o("strong",[e._v("BTCPay Api Key")]),e._v('" field that says "*'),o("em",[e._v("click here to generate API keys")]),e._v('" (you will be redirected to BTCPay Server "Authorization request" page.\n'),o("img",{attrs:{src:a(665),alt:"BTCPay WordPress V2: Link to BTCPay Settings"}})])]),e._v(" "),o("li",[o("p",[e._v("If you are not logged in to your BTCPay Server instance, do so now. (optional)\n"),o("img",{attrs:{src:a(666),alt:"BTCPay WordPress V2: Login to BTCPay Server"}})])]),e._v(" "),o("li",[o("p",[e._v('For each listed permission click on "select specific stores..." (If you only have one store it will get autoselected).\n'),o("img",{attrs:{src:a(667),alt:"BTCPay WordPress V2: Select store"}})])]),e._v(" "),o("li",[o("p",[e._v("Click [Authorize app]\n"),o("img",{attrs:{src:a(668),alt:"BTCPay WordPress V2: Click on authorize app"}})])]),e._v(" "),o("li",[o("p",[e._v("You will get redirected to your WooCommerce store and the API key and Store ID will be prefilled.\n"),o("img",{attrs:{src:a(669),alt:"BTCPay WordPress V2: Redirected back to plugin settings"}})])]),e._v(" "),o("li",[o("p",[e._v("Before doing any further configuration click on "),o("strong",[e._v("[Save]")]),e._v(" as it will setup the webhook for you.\n"),o("img",{attrs:{src:a(670),alt:"BTCPay WordPress V2: Webhook created"}})])])]),e._v(" "),o("p",[e._v('Continue with "3. Testing the checkout" below.')]),e._v(" "),o("h3",{attrs:{id:"22-connect-by-manually-creating-the-api-key-and-permissions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#22-connect-by-manually-creating-the-api-key-and-permissions"}},[e._v("#")]),e._v(" 2.2 Connect by manually creating the API key and permissions")]),e._v(" "),o("p",[e._v("If you can't use the wizard mentioned in the previous section you can also generate the API key manually.")]),e._v(" "),o("ol",[o("li",[e._v("Click on "),o("em",[e._v("[Account]")]),e._v(" -> "),o("em",[e._v("Manage Account")]),e._v(" on the bottom left"),o("br"),e._v(" "),o("img",{attrs:{src:a(671),alt:"BTCPay WordPress V2: Manage Account"}})]),e._v(" "),o("li",[e._v("Go to the tab "),o("em",[e._v('"API Keys"')])]),e._v(" "),o("li",[e._v("Click "),o("em",[e._v("[Generate Key]")]),e._v(" to select permissions."),o("br"),e._v(" "),o("img",{attrs:{src:a(672),alt:"BTCPay WordPress V2: API Keys overview"}})]),e._v(" "),o("li",[e._v("Click on the "),o("em",[e._v('"Select specific stores"')]),e._v(" link for the following permissions: "),o("code",[e._v("View invoices")]),e._v(", "),o("code",[e._v("Create invoice")]),e._v(", "),o("code",[e._v("Modify invoices")]),e._v(", "),o("code",[e._v("Modify stores webhooks")]),e._v(", "),o("code",[e._v("View your stores")]),o("br"),e._v(" "),o("img",{attrs:{src:a(673),alt:"BTCPay WordPress V2: API Keys Permissions"}})]),e._v(" "),o("li",[e._v("Click on "),o("em",[e._v("[Generate API Key]")]),o("br"),e._v(" "),o("img",{attrs:{src:a(674),alt:"BTCPay WordPress V2: API Keys Save"}})]),e._v(" "),o("li",[e._v("Copy the generated API Key to your WordPress "),o("em",[e._v("BTCPay Settings")]),e._v(" form"),o("br"),e._v(" "),o("img",{attrs:{src:a(675),alt:"BTCPay WordPress V2: Copy API Key"}})]),e._v(" "),o("li",[e._v("Copy the store ID to your WordPress "),o("em",[e._v("BTCPay Settings")]),e._v(" form"),o("br"),e._v(" "),o("img",{attrs:{src:a(676),alt:"BTCPay WordPress V2: Copy Store ID"}})]),e._v(" "),o("li",[e._v("On the BTCPay Settings form make sure "),o("em",[e._v("BTPCay Server URL")]),e._v(", "),o("em",[e._v("BTCPay Server API Key")]),e._v(" and "),o("em",[e._v("Store ID")]),e._v(" are set and click "),o("em",[e._v("[Save]")])]),e._v(" "),o("li",[e._v('Make sure you see the notification "'),o("em",[e._v("BTCPay Server: Successfully registered a new webhook on BTCPay Server")]),e._v('"'),o("br"),e._v(" "),o("img",{attrs:{src:a(677),alt:"BTCPay WordPress V2: Save BTCPay Settings form"}})])]),e._v(" "),o("h2",{attrs:{id:"3-testing-the-checkout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#3-testing-the-checkout"}},[e._v("#")]),e._v(" 3. Testing the checkout")]),e._v(" "),o("p",[e._v("Making a small test-purchase from your store will give you a piece of mind.\nAlways make sure that everything is set up correctly before going live.\nThe final video guides you through the steps of setting a gap limit in your Electrum wallet and testing the checkout process.")]),e._v(" "),o("a",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/Fi3pYpzGmmo/hqdefault.jpg)"},attrs:{href:"https://www.youtube.com/watch?v=Fi3pYpzGmmo","data-id":"Fi3pYpzGmmo"}},[o("iframe",{attrs:{title:"YouTube","data-src":"https://www.youtube-nocookie.com/embed/Fi3pYpzGmmo?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),o("h2",{attrs:{id:"4-customizing-btcpay-woocommerce-v2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#4-customizing-btcpay-woocommerce-v2"}},[e._v("#")]),e._v(" 4. Customizing BTCPay WooCommerce V2")]),e._v(" "),o("h3",{attrs:{id:"41-global-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#41-global-settings"}},[e._v("#")]),e._v(" 4.1 Global Settings")]),e._v(" "),o("p",[e._v("Can be found at "),o("em",[e._v("WooCommerce -> Settings -> Tab [BTCPay Settings]")])]),e._v(" "),o("p",[o("strong",[e._v("BTCPay Server URL")])]),e._v(" "),o("p",[e._v("URL to your BTCPay Server instance, including protocol e.g. "),o("code",[e._v("https://btcpay.yourdomain.com")]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("BTCPay API Key")])]),e._v(" "),o("p",[e._v("Your API Key. (Was auto-generated in the steps before).")]),e._v(" "),o("p",[o("strong",[e._v("Store ID")])]),e._v(" "),o("p",[e._v("The store ID of your BTCPay Server store. Can be found on the store settings page.")]),e._v(" "),o("p",[o("strong",[e._v("Default Customer Message")])]),e._v(" "),o("p",[e._v('Here you can customize the customer message shown after selecting BTCPay payment gateway on checkout. This can be overwritten on the payment gateway settings for each gateway if you use the "Separate payment gateways" option.')]),e._v(" "),o("p",[o("strong",[e._v('Invoice pass to "Settled" state after')])]),e._v(" "),o("p",[e._v("Set after how many confirmations a payment is considered fully paid and settled. Defaults to what is configured on BTCPay store settings.")]),e._v(" "),o("p",[o("strong",[e._v("BTCPay Order Statuses")])]),e._v(" "),o("p",[e._v("Depending on your business model and store settings, you may want to configure your order statuses.\nYou can set BTCPay to trigger certain order status in WooCommerce automatically.")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("New")]),e._v(" - order placed, not paid yet.")]),e._v(" "),o("li",[o("em",[e._v("Paid")]),e._v(" - order paid, not enough confirmations on the blockchain, yet.")]),e._v(" "),o("li",[o("em",[e._v("Settled")]),e._v(" - order paid, confirmed on the blockchain.")]),e._v(" "),o("li",[o("em",[e._v("Settled (paid over)")]),e._v(" - order paid, confirmed on the blockchain but paid over.")]),e._v(" "),o("li",[o("em",[e._v("Invalid")]),e._v(" - order paid, did not get a sufficient number of confirmations in a pre-defined time-frame set in BTCPay store settings, or manually marked invalid.")]),e._v(" "),o("li",[o("em",[e._v("Expired")]),e._v(" - invoice expired, order not paid.")]),e._v(" "),o("li",[o("em",[e._v("Expired with partial payment")]),e._v(" - invoice expired and paid partially")])]),e._v(" "),o("p",[e._v('Take time to think about how you wish to automate these statuses.\nIf you do not wish certain BTCPay status to trigger WooCommerce order status, you can leave it as default "- no mapping / defaults -".')]),e._v(" "),o("p",[e._v('Note: you should keep the "Settled" order status to "- no mapping / defaults-" if you sell digital and physical products. For digital products WooCommerce will automatically skip the "Processing" status and go directly to "Completed" for those orders only containing digital products.')]),e._v(" "),o("p",[e._v('Another example, if a merchant wants to send an email notifying the customer that the payment has been received, but the order will be processed upon confirmation, the merchant would have to set order status for "Paid" to "On hold". Then, the merchant would have to customize and trigger email for "On hold" status of the order in WooCommerce.')]),e._v(" "),o("p",[e._v("It takes some time to find a perfect formula, so users should test things out before going live.")]),e._v(" "),o("p",[o("strong",[e._v("Separate Payment Gateways")])]),e._v(" "),o("p",[e._v("If this option is enabled the plugin will generate one separate payment gateway per supported payment method on BTCPay Server. E.g. if you have BTC, LightningNetwork and maybe Liquid Assets enabled on your BTCPay Server store, then you will have a separate gateway available for each. This allows many new use cases like discount per gateway or country based restrictions. More details "),o("RouterLink",{attrs:{to:"/FAQ/Integrations/#how-to-configure-additional-token-support"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("p",[o("strong",[e._v("Send customer data to BTCPayServer")])]),e._v(" "),o("p",[e._v("By default "),o("em",[e._v("no")]),e._v(" customer data beside email is sent to BTCPay Server. If you want to send customer address data to BTCPay Server you can enable it here.")]),e._v(" "),o("p",[o("strong",[e._v("Debug Log")])]),e._v(" "),o("p",[e._v("This option is helpful in case you have a problem and need more information on what is going on. The logs can be then found under WooCommerce -> Status -> Log. Make sure you disable this again after debugging as it will fill up your filesystem with logs.")]),e._v(" "),o("h3",{attrs:{id:"42-payment-gateway-specific"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#42-payment-gateway-specific"}},[e._v("#")]),e._v(" 4.2 Payment Gateway specific")]),e._v(" "),o("p",[e._v('Depending on wheter you have above mentioned "Separate Payment Gateways" enabled you will have one or more Payment Gateways available to configure in the payment gateway settings via '),o("em",[e._v("WooCommerce -> Settings -> Tab [Payments]")])]),e._v(" "),o("p",[e._v("On all payment gateways you can set the following options:")]),e._v(" "),o("p",[o("strong",[e._v("Title")]),o("br"),e._v('\nThe shown payment gateway text on the checkout page. Defaults to "BTCPay (Bitcoin, Lightning Network, ...)".')]),e._v(" "),o("p",[o("strong",[e._v("Customer Message")])]),e._v(" "),o("p",[e._v("Here you can customize message shown after selecting BTCPay payment gateway.")]),e._v(" "),o("p",[o("strong",[e._v("Gateway Icon")])]),e._v(" "),o("p",[e._v("Upload or select a custom icon to be shown next to the payment gateway during checkout. Defaults to BTCPay logo.")]),e._v(" "),o("h4",{attrs:{id:"421-btcpay-default"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#421-btcpay-default"}},[e._v("#")]),e._v(" 4.2.1 BTCPay (default)")]),e._v(" "),o("p",[e._v("Additional options only available for the default payment gateway:")]),e._v(" "),o("p",[o("strong",[e._v("Enforce payment tokens")])]),e._v(" "),o("p",[e._v('With "Separate Payment Gateways" feature enabled in BTCPay Settings you can use this option to enforce only payment tokens. This means that the created invoice will '),o("em",[e._v("only")]),e._v(' include tokens of type "payment" and '),o("em",[e._v("not any")]),e._v('  of type "promotion". See difference of token types '),o("RouterLink",{attrs:{to:"/FAQ/Integrations/#how-to-configure-additional-token-support#token-types"}},[e._v("here")])],1),e._v(" "),o("h4",{attrs:{id:"422-separate-payment-gateways"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#422-separate-payment-gateways"}},[e._v("#")]),e._v(" 4.2.2 Separate Payment Gateways")]),e._v(" "),o("p",[e._v("Additional options only available for the separate payment gateways (if that feature is enabled):")]),e._v(" "),o("p",[o("strong",[e._v("Token Type")])]),e._v(" "),o("p",[e._v('By default type "payment" is selected. But if you have Liquid Assets with your own issued asset/token (e.g. used as voucher) you can select "promotion" here. Those are processed differently than normal payment tokens. Details can be found '),o("RouterLink",{attrs:{to:"/FAQ/Integrations/#how-to-configure-additional-token-support#promotional-tokens-100-discount"}},[e._v("here")])],1),e._v(" "),o("h1",{attrs:{id:"deploying-woocommerce-from-btcpay-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deploying-woocommerce-from-btcpay-server"}},[e._v("#")]),e._v(" Deploying WooCommerce from BTCPay Server")]),e._v(" "),o("p",[e._v("If you already have BTCPay Server, you can very easily start WooCommerce from your existing environment.")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Point the external IP of the virtual machine where your BTCPay is hosted to your store domain, for example store.yourdomain.com.")])]),e._v(" "),o("li",[o("p",[e._v("Log into your BTCPay server as root.")])])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n")])])]),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Set up WooCommerce variables. You can add "),o("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/blob/master/docker-compose-generator/docker-fragments/opt-add-woocommerce.yml",target:"_blank",rel:"noopener noreferrer"}},[e._v("optional variables"),o("OutboundLink")],1),e._v(" as well.")])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),o("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAYGEN_ADDITIONAL_FRAGMENTS")]),e._v(';opt-add-woocommerce"')]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WOOCOMMERCE_HOST")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token string"}},[e._v('"yourstoredomain.com"')]),e._v("\n")])])]),o("ol",{attrs:{start:"4"}},[o("li",[e._v("Lastly, just run BTCPay Setup script which will add the set up variables.")])]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" ./btcpay-setup.sh -i\n")])])]),o("ol",{attrs:{start:"5"}},[o("li",[e._v("Go to your store's domain name, in our example that's store.yourdomain.com and follow the WordPress installation wizard.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);