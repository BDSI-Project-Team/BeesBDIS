const WeedSortsPage = () =>{

    const test = () => {
        fetch('http://localhost:4000/weed-sort')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }

    return(
        <div>
            <button onClick={test}>asdads</button>
        </div>
    )
}

export default WeedSortsPage;