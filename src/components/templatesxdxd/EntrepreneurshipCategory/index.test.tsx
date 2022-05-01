import { Footer } from "../../organisms/Footer";
import { HeaderComponent } from "../../organisms/Header";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Entrepreneurship } from ".";
import { SearchBarComponent } from "../../molecules/SearchBar";
import { Banner } from "../../molecules/Banner";
import Categories from "../../organisms/BookCategories";
import Library from "../../../data/Library";

describe("Entrepreneurship Page", () => {
  test("Existence test", () => {
    render(
      <MemoryRouter>
        <Entrepreneurship
          header={<HeaderComponent />}
          banner={<Banner />}
          footer={<Footer />}
          searchBar={<SearchBarComponent />}
          trendingBlinks={<Categories data={Library} status="trending" />}
          justAddedBlinks={<Categories data={Library} status="justAdded" />}
          featuredBlinks={<Categories data={Library} status="featured" />}
        />
      </MemoryRouter>
    );
  });
});
