import { useState } from "react";
import { Todo } from "../types/todo";



export default function HomeScreen(){
    const [todos, setTodos] = useState<Todo[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    
}