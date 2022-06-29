export default function YelpList({ yelp }) {
  return (
    <div>
      {
        yelp.map((data, i) => <div 
          key={data.name + i}>
          <p>{data.name}</p>
        </div>)
      }
    </div>
  );
}