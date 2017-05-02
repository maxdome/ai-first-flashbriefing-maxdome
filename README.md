[![Dependency Status](https://david-dm.org/dragonprojects/ai-flashbriefing-maxdome.svg)](https://david-dm.org/dragonprojects/ai-flashbriefing-maxdome)
[![devDependency Status](https://david-dm.org/dragonprojects/ai-flashbriefing-maxdome/dev-status.svg)](https://david-dm.org/dragonprojects/ai-flashbriefing-maxdome?type=dev)

Response the maxdome Tip of the Day in the JSON feed format (e.g. Alexa Flash Briefing).
   
   
# Example Feed

```json
{
  "uid": "http://maxdome.de/2087288",
  "updateDate": "2017-03-28T07:00:00.000Z",
  "titleText": "",
  "mainText": "Tipp des Tages von Vanessa Frodl: Die Serie 2 Broke Girls, Vorsicht bissig - und zum Anbeißen komisch!",
  "redirectionUrl": "http://maxdome.de/2087288"
}
```


# Documentation

## Setup for `Alexa Flash Briefing` (Configuration -> Feed Information)

![](https://raw.githubusercontent.com/dragonprojects/ai-flashbriefing-maxdome/master/docs/alexa-flash-briefing.png)

* `URL` to the root path of the deployed service
