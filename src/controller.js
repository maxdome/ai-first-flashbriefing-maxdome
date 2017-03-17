module.exports = ({ maxdome }) => ['get', ['/', async (req, res) => {
  const tipOfTheDay = (await maxdome.request('tipOfTheDays').send())[0];
  if (!tipOfTheDay) {
    res.send();
    return;
  }
  const review = tipOfTheDay.review;
  if (!review) {
    res.send();
    return;
  }
  const asset = review.asset;
  const maxpert = review.maxpert;
  res.send({
    uid: asset.link,
    updateDate: tipOfTheDay.published.toISOString(),
    titleText: `Der Tipp des Tages von ${maxpert.firstname} ${maxpert.surname}: ${asset.title}, ${review.headline}`,
    mainText: asset.description,
    redirectionUrl: asset.link,
  });
}]];
