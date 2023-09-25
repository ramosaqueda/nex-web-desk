"use client";
import Container from "@molecules/container/Container";
import CategoryBox from "../CategoryBox/CategoryBox";
import { categories } from "./constants/categories"
const Categories =() => {
    return (
        <Container>
          <div
            className="
                      pt-4
                    flex
                    flex-row
                    items-center
                    justify-between
                    overflow-x-auto
                "
          >
            {categories.map(item => (
              <CategoryBox key={item.label} label={item.label} icon={item.icon} selected={true} />
            ))}
          </div>
        </Container>
      );

}
export default Categories;