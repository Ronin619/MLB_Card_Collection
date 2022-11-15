import { Fragment } from "react";
import Header from './Header';
import '../App.css';

export default function Home () {
    return (
        <Fragment>
            <Header />
            <h1 className="text-center mt-5">MLB Card Collection</h1>
        </Fragment>
    )
}