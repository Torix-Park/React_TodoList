import useTest from "@hooks/useTest";
import React from "react";
import { useEffect } from "react";
import Todo from "../Todo";

const TodoContainer = () => {
    const {test, __testActionFromHooks} = useTest()

    useEffect(() => {
        console.log('test',test);
    }, [test])

    return <Todo />
}

export default TodoContainer;