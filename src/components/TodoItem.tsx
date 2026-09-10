import { Todo } from "../types/todo";

export interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}


export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {


}