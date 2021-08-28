import { useParams } from "react-router-dom";

export const useSlug = () => {
    const {slug} = useParams<{ slug: string }>();
    return slug
}
