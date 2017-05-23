const renderer = require('@ai-first/renderer-maxdome');

module.exports = ({ maxdome }) => [
  'get',
  [
    '/',
    async (req, res) => {
      const tipOfTheDay = (await maxdome.request('tipOfTheDays').send())[0];
      const review = tipOfTheDay.review;
      if (!review) {
        throw new Error('missing linked review in the tipOfTheDay');
      }
      const asset = review.asset;
      if (!asset) {
        throw new Error('missing linked asset in the review');
      }
      const maxpert = review.maxpert;
      if (!maxpert) {
        throw new Error('missing linked maxpert in the review');
      }
      res.send({
        uid: asset.link,
        updateDate: tipOfTheDay.published.toISOString(),
        titleText: renderer(tipOfTheDay, ['tipOfTheDay', 'typedTitle']),
        mainText: renderer(tipOfTheDay, [
          'tipOfTheDay',
          'maxpert',
          'typedTitle',
          'review',
        ]),
        redirectionUrl: asset.link,
      });
    },
  ],
];
