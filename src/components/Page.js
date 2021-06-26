import React from "react";
import Loading from "./Loding";
import cls from "../util/cls";

export default function Page({ showLoading, childrens }) {
    return (
        <article className="container mt-4">
            {showLoading ? (<Loading />) : []}
            <section className={cls("page-body", showLoading ? 'hold-body' : '')}>
                {childrens}
            </section>
        </article>
    );
}