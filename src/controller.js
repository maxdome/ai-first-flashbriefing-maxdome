const renderer = require('ai-renderer-maxdome');

module.exports = ({ maxdome }) => ['get', ['/', async (req, res) => {
  const tipOfTheDay = (await maxdome.request('tipOfTheDays').send())[0];
  const review = tipOfTheDay.review;
  const asset = review.asset;
  const maxpert = review.maxpert;
  res.send({
    uid: asset.link,
    updateDate: tipOfTheDay.published.toISOString(),
    titleText: renderer({ asset }, ['tipOfTheDay', 'typedTitle']),
    mainText: renderer({ asset, maxpert, review }, ['tipOfTheDay', 'maxpert', 'typedTitle', 'review']),
    redirectionUrl: asset.link,
  });
}]];
