const renderer = require('ai-renderer-maxdome');

module.exports = ({ maxdome }) => ['get', ['/', async (req, res) => {
  const tipOfTheDay = (await maxdome.request('tipOfTheDays').send())[0];
  const asset = tipOfTheDay.review.asset;
  res.send({
    uid: asset.link,
    updateDate: tipOfTheDay.published.toISOString(),
    titleText: renderer(tipOfTheDay, ['tipOfTheDay', 'typedTitle']),
    mainText: renderer(tipOfTheDay, ['tipOfTheDay', 'maxpert', 'typedTitle', 'review']),
    redirectionUrl: asset.link,
  });
}]];
