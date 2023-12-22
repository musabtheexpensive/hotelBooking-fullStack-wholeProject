import React from "react";
import { categories } from "./CategoriesData";
import Container from "../Shared/Container";
import CategoryBox from "./CategoryBox";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get("category");
  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category===item.label}
          ></CategoryBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
