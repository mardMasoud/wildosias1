import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [data, setData] = useState("");
  // useEffect(async function () {
  //   const data = await getCabins();
  // }, []);
  useEffect(() => {
    (async () => {
      const newData = await getCabins();
      setData(newData);
    })();
  }, []);
  console.log(data);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src={data[0].image}
        alt=""
      />
    </Row>
  );
}

export default Cabins;
