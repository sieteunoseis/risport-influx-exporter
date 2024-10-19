const Models = {
  "255":"All",
  "1":"Cisco 30 SP+",
  "2":"Cisco 12 SP+",
  "3":"Cisco 12 SP",
  "4":"Cisco 12 S",
  "5":"Cisco 30 VIP",
  "6":"Cisco 7910",
  "7":"Cisco 7960",
  "8":"Cisco 7940",
  "9":"Cisco 7935",
  "10":"Cisco VGC Phone",
  "11":"Cisco VGC Virtual Phone",
  "12":"Cisco ATA 186",
  "15":"EMCC Base Phone",
  "20":"SCCP Phone",
  "30":"Analog Access",
  "40":"Digital Access",
  "42":"Digital Access+",
  "43":"Digital Access WS-X6608",
  "47":"Analog Access WS-X6624",
  "48":"VGC Gateway",
  "50":"Conference Bridge",
  "51":"Conference Bridge WS-X6608",
  "52":"Cisco IOS Conference Bridge (HDV2)",
  "53":"Cisco Conference Bridge (WS-SVC-CMM)",
  "61":"H.323 Phone",
  "62":"H.323 Gateway",
  "70":"Music On Hold",
  "71":"Device Pilot",
  "72":"CTI Port",
  "73":"CTI Route Point",
  "80":"Voice Mail Port",
  "83":"Cisco IOS Software Media Termination Point (HDV2)",
  "84":"Cisco Media Server (WS-SVC-CMM-MS)",
  "85":"Cisco Video Conference Bridge (IPVC-35xx)",
  "86":"Cisco IOS Heterogeneous Video Conference Bridge",
  "87":"Cisco IOS Guaranteed Audio Video Conference Bridge",
  "88":"Cisco IOS Homogeneous Video Conference Bridge",
  "90":"Route List",
  "100":"Load Simulator",
  "110":"Media Termination Point",
  "111":"Media Termination Point Hardware",
  "112":"Cisco IOS Media Termination Point (HDV2)",
  "113":"Cisco Media Termination Point (WS-SVC-CMM)",
  "115":"Cisco 7941",
  "119":"Cisco 7971",
  "120":"MGCP Station",
  "121":"MGCP Trunk",
  "122":"GateKeeper",
  "124":"7914 14-Button Line Expansion Module",
  "125":"Trunk",
  "126":"Tone Announcement Player",
  "131":"SIP Trunk",
  "132":"SIP Gateway",
  "133":"WSM Trunk",
  "134":"Remote Destination Profile",
  "227":"7915 12-Button Line Expansion Module",
  "228":"7915 24-Button Line Expansion Module",
  "229":"7916 12-Button Line Expansion Module",
  "230":"7916 24-Button Line Expansion Module",
  "232":"CKEM 36-Button Line Expansion Module",
  "253":"SPA8800",
  "254":"Unknown MGCP Gateway",
  "255":"Unknown",
  "302":"Cisco 7985",
  "307":"Cisco 7911",
  "308":"Cisco 7961G-GE",
  "309":"Cisco 7941G-GE",
  "335":"Motorola CN622",
  "336":"Third-party SIP Device (Basic)",
  "348":"Cisco 7931",
  "358":"Cisco Unified Personal Communicator",
  "365":"Cisco 7921",
  "369":"Cisco 7906",
  "374":"Third-party SIP Device (Advanced)",
  "375":"Cisco TelePresence",
  "376":"Nokia S60",
  "404":"Cisco 7962",
  "412":"Cisco 3951",
  "431":"Cisco 7937",
  "434":"Cisco 7942",
  "435":"Cisco 7945",
  "436":"Cisco 7965",
  "437":"Cisco 7975",
  "446":"Cisco 3911",
  "468":"Cisco Unified Mobile Communicator",
  "478":"Cisco TelePresence 1000",
  "479":"Cisco TelePresence 3000",
  "480":"Cisco TelePresence 3200",
  "481":"Cisco TelePresence 500-37",
  "484":"Cisco 7925",
  "493":"Cisco 9971",
  "495":"Cisco 6921",
  "496":"Cisco 6941",
  "497":"Cisco 6961",
  "503":"Cisco Unified Client Services Framework",
  "505":"Cisco TelePresence 1300-65",
  "520":"Cisco TelePresence 1100",
  "521":"Transnova S3",
  "522":"BlackBerry MVS VoWifi",
  "537":"Cisco 9951",
  "540":"Cisco 8961",
  "547":"Cisco 6901",
  "548":"Cisco 6911",
  "550":"Cisco ATA 187",
  "557":"Cisco TelePresence 200",
  "558":"Cisco TelePresence 400",
  "562":"Cisco Dual Mode for iPhone",
  "564":"Cisco 6945",
  "575":"Cisco Dual Mode for Android",
  "577":"Cisco 7926",
  "580":"Cisco E20",
  "582":"Generic Single Screen Room System",
  "583":"Generic Multiple Screen Room System",
  "584":"Cisco TelePresence EX90",
  "585":"Cisco 8945",
  "586":"Cisco 8941",
  "588":"Generic Desktop Video Endpoint",
  "590":"Cisco TelePresence 500-32",
  "591":"Cisco TelePresence 1300-47",
  "592":"Cisco 3905",
  "593":"Cisco Cius",
  "594":"VKEM 36-Button Line Expansion Module",
  "596":"Cisco TelePresence TX1310-65",
  "597":"Cisco TelePresence MCU",
  "598":"Ascom IP-DECT Device",
  "599":"Cisco TelePresence Exchange System",
  "604":"Cisco TelePresence EX60",
  "606":"Cisco TelePresence Codec C90",
  "607":"Cisco TelePresence Codec C60",
  "608":"Cisco TelePresence Codec C40",
  "609":"Cisco TelePresence Quick Set C20",
  "610":"Cisco TelePresence Profile 42 (C20)",
  "611":"Cisco TelePresence Profile 42 (C60)",
  "612":"Cisco TelePresence Profile 52 (C40)",
  "613":"Cisco TelePresence Profile 52 (C60)",
  "614":"Cisco TelePresence Profile 52 Dual (C60)",
  "615":"Cisco TelePresence Profile 65 (C60)",
  "616":"Cisco TelePresence Profile 65 Dual (C90)",
  "617":"Cisco TelePresence MX200",
  "619":"Cisco TelePresence TX9000",
  "620":"Cisco TelePresence TX9200",
  "621":"Cisco 7821",
  "622":"Cisco 7841",
  "623":"Cisco 7861",
  "626":"Cisco TelePresence SX20",
  "627":"Cisco TelePresence MX300",
  "628":"IMS-integrated Mobile (Basic)",
  "631":"Third-party AS-SIP Endpoint",
  "632":"Cisco Cius SP",
  "633":"Cisco TelePresence Profile 42 (C40)",
  "634":"Cisco VXC 6215",
  "635":"CTI Remote Device",
  "640":"Usage Profile",
  "642":"Carrier-integrated Mobile",
  "645":"Universal Device Template",
  "647":"Cisco DX650",
  "648":"Cisco Unified Communications for RTX",
  "652":"Cisco Jabber for Tablet",
  "659":"Cisco 8831",
  "681":"Cisco ATA 190",
  "682":"Cisco TelePresence SX10",
  "683":"Cisco 8841",
  "684":"Cisco 8851",
  "685":"Cisco 8861",
  "688":"Cisco TelePresence SX80",
  "689":"Cisco TelePresence MX200 G2",
  "690":"Cisco TelePresence MX300 G2",
  "20000":"Cisco 7905",
  "30002":"Cisco 7920",
  "30006":"Cisco 7970",
  "30007":"Cisco 7912",
  "30008":"Cisco 7902",
  "30016":"Cisco IP Communicator",
  "30018":"Cisco 7961",
  "30019":"Cisco 7936",
  "30027":"Analog Phone",
  "30028":"ISDN BRI Phone",
  "30032":"SCCP gateway virtual phone",
  "30035":"IP-STE",
  "36041":"Cisco TelePresence Conductor",
  "36042":"Cisco DX80",
  "36043":"Cisco DX70",
  "36049":"BEKEM 36-Button Line Expansion Module",
  "36207":"Cisco TelePresence MX700",
  "36208":"Cisco TelePresence MX800",
  "36210":"Cisco TelePresence IX5000",
  "36213":"Cisco 7811",
  "36216":"Cisco 8821",
  "36217":"Cisco 8811",
  "36219":"Interactive Voice Response",
  "36224":"Cisco 8845",
  "36225":"Cisco 8865",
  "36227":"Cisco TelePresence MX800 Dual",
  "36232":"Cisco 8851NR",
  "36235":"Cisco Spark Remote Device",
  "36239":"Cisco Webex DX80",
  "36241":"Cisco TelePresence DX70",
  "36247":"Cisco 7832",
  "36248":"Cisco 8865NR",
  "36250":"Cisco Meeting Server",
  "36251":"Cisco Webex Room Kit",
  "36254":"Cisco Webex Room 55",
  "36255":"Cisco Webex Room Kit Plus",
  "36256":"CP-8800-Video 28-Button Key Expansion Module",
  "36257":"CP-8800-Audio 28-Button Key Expansion Module",
  "36258":"Cisco 8832",
  "36259":"Cisco Webex Room 70 Single",
  "36260":"Cisco 8832NR",
  "36262":"Cisco ATA 191",
  "36263":"Cisco Collaboration Mobile Convergence",
  "36265":"Cisco Webex Room 70 Dual",
  "36292":"Cisco Webex Room Kit Pro",
  "36295":"Cisco Webex Room 55 Dual",
  "36296":"Cisco Webex Room 70 Single G2",
  "36297":"Cisco Webex Room 70 Dual G2",
  "36298":"SIP Station",
  "36299":"Cisco Webex Room Kit Mini",
  "36302":"Cisco Webex VDI Svc Framework",
  "36304":"Cisco Webex Board 55",
  "36305":"Cisco Webex Board 70",
  "36306":"Cisco Webex Board 85",
  "36307":"Cisco Webex Desk Pro",
  "36308":"Cisco Webex Room Panorama",
  "36309":"Cisco Webex Room 70 Panorama",
  "36312":"Cisco Webex Room Phone",
  "36319":"Cisco 860",
  "36320":"Cisco 840",
  "36322":"Cisco Webex Desk LE",
  "36324":"Cisco Webex Desk",
  "36326":"Cisco Webex Desk Mini",
  "36327":"Cisco Webex Desk Hub",
  "36333":"Cisco Webex Board Pro 55",
  "36334":"Cisco Webex Board Pro 75",
  "36335":"Cisco Webex Room Bar",
  "36336":"Cisco 8875",
  "36337":"Cisco 8875NR",
  "36338":"Cisco 8851NS",
  "36339":"Cisco 8811NS",
  "36340":"Cisco 8841NS",
  "36341":"Cisco Room Kit EQ",
  "36343":"Cisco Room Bar Pro",
  "36344":"Cisco Room Kit EQX",
  "36345":"Cisco 9841",
  "36347":"Cisco 9861",
  "36348":"Cisco 9851",
  "36349":"DP-9800-KEM 40-Button Key Expansion Module",
  "36350":"Cisco 9871",
  "36351":"Cisco Board Pro 55 G2",
  "36352":"Cisco Board Pro 75 G2",
  "36353":"Cisco 9861NR",
  "36354":"Cisco 9871NR"
};

module.exports = Models;
