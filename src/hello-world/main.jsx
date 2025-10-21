import {createRoot} from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";


createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
            </Container>

        </StrictMode>
    )