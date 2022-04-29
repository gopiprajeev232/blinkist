import { Footer } from "../../components/organisms/Footer";
import { HeaderComponent } from "../../components/organisms/Header";
import { Tabs } from "../../components/organisms/Tabs";
import { MyLibrary } from "../../components/templatesxdxd/MyLibrary";

const LibraryPage = () => {
    return (
        <>
            <MyLibrary header={<HeaderComponent />}
            body={<Tabs />}
            footer={<Footer />}
            ></MyLibrary>
        </>
    )
}

export default LibraryPage