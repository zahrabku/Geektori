import { useParams } from "react-router-dom";

export const useId = () => {
    const {id} = useParams<{ id: string }>();
    return id
}
