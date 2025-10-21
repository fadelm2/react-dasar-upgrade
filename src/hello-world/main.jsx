import {createRoot} from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import {StrictMode} from "react";
import Container from "../container/Container.jsx";
import Todolist from "../todolist/Todolist.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";


createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld/>
                <Todolist/>
                <Table/>
                <br/>
                <br/>
                <AlertButton text="Click me" message="You Click me"/>
                <AlertButton text="Click You" message="You Click You"/>

                <MyButton text="Smash me" onSmash={()=> alert("You Smash Me")}/>
                <MyButton text="Hit me" onSmash={()=> alert("You Hit Me")}/>

            </Container>

        </StrictMode>
    )