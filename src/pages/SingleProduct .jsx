import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const fetchSingleProducts = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setSingleProduct(response.data);
        // console.log(`this is the response ${response}`); //template string
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchSingleProducts();
  }, [id]);
  return (
    <>
      <div className="p-6 max-w-xl mx-auto border rounded shadow">
        <img src={singleProduct.images} alt="" className="h-48 mx-auto" />
        <h2 className="text-xl font-bold mt-4">{singleProduct.title}</h2>
        <p className="text-gray-700 mt-2">{singleProduct.description}</p>
        <p className="text-green-600 font-semibold mt-3 text-lg">
          ${singleProduct.price}
        </p>
      </div>
    </>
  );
}

export default SingleProduct;
