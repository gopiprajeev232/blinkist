import { Footer } from "../../organisms/Footer";
import { HeaderComponent } from "../../organisms/Header";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MyLibrary } from ".";
import { Tabs } from "../../organisms/Tabs";

describe("My Library Test", () => {
    test("Existence test", () => {
        <MyLibrary header={<HeaderComponent />}
        body={<Tabs />}
        footer={<Footer />}
        ></MyLibrary>
    })
})