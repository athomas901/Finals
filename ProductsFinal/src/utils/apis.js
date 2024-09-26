import { shoes } from "../utils/apis";

function Shoes() {
    getShoes().then((data) => {console.log(data)});

    return (
        <div>
            <h2>Shoe List</h2>
            </div>
    );
}

export default ShoeList;