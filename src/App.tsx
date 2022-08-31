import React from 'react';
import "./styles/components/Home.scss"
import Cart from "./components/cart";
import Header from "./components/header";


const carts = [
    {
        id: 1,
        title: "Mollie Andersson",
        image: "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
        id: 2,
        title: "rebecca Andersson",
        image: "https://cdn.pixabay.com/photo/2017/12/12/05/01/portrait-3013924__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown a type specimen book."
    },
    {
        id: 3,
        title: "hanna Andersson",
        image: "https://cdn.pixabay.com/photo/2015/09/22/21/35/woman-952506__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tooey of type and scrambled it to make a type specimen book."
    },
    {
        id: 4,
        title: "kate Andersson",
        image: "https://cdn.pixabay.com/photo/2015/01/07/20/53/hat-591973__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer torambled it to make a type specimen book."
    },
    {
        id: 5,
        title: "mia Andersson",
        image: "https://cdn.pixabay.com/photo/2018/06/13/20/07/child-3473596__480.jpg",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took of type and scrambled."
    },
]

function App() {

    return (
        <>
            <Header />
            <main className="grid">
                {carts?.map((items: { title: string, content: string, image: string }, index: number) => (
                    <Cart
                        key={index}
                        title={items.title}
                        content={items.content}
                        image={items.image}
                    />
                ))}
            </main>
        </>
    );
}

export default App;

