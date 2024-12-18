import FilterableProductTable from "./component/FilterableProductTable.jsx";
import Gallery from "./component/Gallery.jsx";
import MyButtonsCounter from "./component/MyButtonsCounter.jsx"
import TodoList from "./component/TodoList.jsx";
import ToDoList2 from "./component/ToDoList2.jsx";
import Profile from "./component/Profile.jsx";
import RenderList from "./component/RenderList.jsx";
import TeaSet from "./component/TeaSet.jsx";
import PackingList from "./component/PackingList.jsx";
import Toolbar from "./component/Toolbar.jsx"
import Game from "./component/Game.jsx";


const PRODUCTS = [
    {category: "Фрукты", price: "$1", stocked: true, name: "Яблоко"},
    {category: "Фрукты", price: "$1", stocked: true, name: "Питахайя"},
    {category: "Фрукты", price: "$2", stocked: false, name: "Маракуйя"},
    {category: "Овощи", price: "$2", stocked: true, name: "Шпинат"},
    {category: "Овощи", price: "$4", stocked: false, name: "Тыква"},
    {category: "Овощи", price: "$1", stocked: true, name: "Горох"}
];

export default function App() {
    return (
        <div>
            <Toolbar/>
            <br/> <br/>-------------------------- <br/> <br/>
            <MyButtonsCounter/>
            <br/> <br/>-------------------------- <br/> <br/>
            <FilterableProductTable products={PRODUCTS}/>
            <br/> <br/>-------------------------- <br/> <br/>
            <TeaSet/>
            <br/> <br/>-------------------------- <br/> <br/>
            <TodoList/>
            <br/> <br/>-------------------------- <br/> <br/>
            <ToDoList2/>
            <br/> <br/>-------------------------- <br/> <br/>
            <Profile/>
            <br/> <br/>-------------------------- <br/> <br/>
            <RenderList/>
            <br/> <br/>-------------------------- <br/> <br/>
            <Gallery/>
            <br/> <br/>-------------------------- <br/> <br/>
            <PackingList/>
            <br/> <br/>-------------------------- <br/> <br/>
            <Game/>
        </div>
    );
}



