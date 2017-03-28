module.exports = ({ maxdome }) => ['get', ['/', async (req, res) => {
  let tipOfTheDay;
  try {
    tipOfTheDay = (await maxdome.request('tipOfTheDays').send())[0];
  } catch (e) {}
  if (!tipOfTheDay) {
    res.send([]);
    return;
  }
  const review = tipOfTheDay.review;
  if (!review) {
    res.send([]);
    return;
  }
  const asset = review.asset;
  let enhancedTitle = asset.title;
  switch (asset.type) {
    case 'movie':
      enhancedTitle = `Der Film ${asset.title}`;
      break;
    case 'series':
      enhancedTitle = `Die Serie ${asset.title}`;
      break;
  }
  const maxpert = review.maxpert;
  res.send([{
    uid: asset.link,
    updateDate: tipOfTheDay.published.toISOString(),
    titleText: `Der Tipp des Tages von ${maxpert.firstname} ${maxpert.surname}: ${enhancedTitle}, ${review.headline}`,
    mainText: asset.description,
    redirectionUrl: asset.link,
  }]);
}]];
