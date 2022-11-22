
let state;
const test = async () => {
  const result = await fetch("http://localhost:4000/weed-sort")
    .then((response) => response.json())
    .then((data) => (state = data));
  console.log(result.recordset);

  return result.recordset;
};

const WeedSortsPage = () => {
  
  console.log(state);
  return (
    <div>
      <button onClick={test}>asdads</button>
      <ul>{}</ul>
    </div>
  );
};

export default WeedSortsPage;
