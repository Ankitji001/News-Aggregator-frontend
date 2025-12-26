const NewsCard = ({ data }) => {
  return (
    <div className="card">
      <img src={data.urlToImage} alt="" />
      <h3>{data.title}</h3>
      <p>{data.source.name}</p>
      <a href={data.url} target="_blank">Read More</a>
    </div>
  );
};

export default NewsCard;
