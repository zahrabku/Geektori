import React, { FC } from "react";
import Container from "./Container";
import ItemHeader from "./ItemHeader";
import FilterSticker from "./FilterSticker";
import GridSticker from "./GridSticker";
import { useData } from "../context";
import { items } from "../utils/DataDump";
import Product from "./product";

// const filteredDetail=details.filter(i=>{
//   return i.existance==data["selected"]
// })

const Category: FC = () => {
  const { data, addData } = useData()!;
  console.log(data);

  return (
    <Container>
      <ItemHeader text="دسته بندی استیکر" />
      <FilterSticker />
      <GridSticker
        items={items.map((i) => (
          <Product item={i} />
        ))}
      />
    </Container>
  );
};

export default Category;
