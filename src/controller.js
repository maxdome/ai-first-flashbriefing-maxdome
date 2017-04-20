module.exports = ({ maxdome }) => ['get', ['/', async (req, res) => {
  const tipOfTheDay = (await maxdome.request('tipOfTheDays').send({ headers: { 'x-forwarded-for': req.ip } }))[0];
  const review = tipOfTheDay.review;
  const asset = review.asset;
  let enhancedTitle;
  switch (asset.type) {
    case 'movie':
      enhancedTitle = `Der Film ${asset.title}`;
      break;
    case 'series':
      enhancedTitle = `Die Serie ${asset.title}`;
      break;
    default:
      enhancedTitle = asset.title;
      break;
  }
  const maxpert = review.maxpert;
  res.send({
    uid: asset.link,
    updateDate: tipOfTheDay.published.toISOString(),
    titleText: `Tipp des Tages: ${enhancedTitle}`,
    mainText: `Tipp des Tages von ${maxpert.firstname} ${maxpert.surname}: ${enhancedTitle}, ${review.headline}`,
    redirectionUrl: asset.link,
  });
}]];
