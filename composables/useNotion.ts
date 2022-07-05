import { getPageTable } from "vue3-notion";
export const useNotion = () => {
    const pageTable = useState('pagetable', () => [])
    const postsStarred = useState('posts-starred', () => [])
    const posts = useState('posts', () => [])
    const setData = async () => {
        pageTable.value = await getPageTable("b4e2f642b4db46138ecc83ba12b63d0a");
        pageTable.value.forEach((item) => {
            item.date = new Date(item.date);
        });
        postsStarred.value = pageTable.value
            .filter((page) => page.published && page.starred)
            .sort((a, b) => {
                // alphabetical order for starred
                return a.title >= b.title ? 1 : -1;
            });
        posts.value = pageTable.value
            .filter((page) => page.published && !page.starred)
            .sort((a, b) => {
                return b.date - a.date; // date order for non starred
            });
    }
    return {pageTable, postsStarred, posts, setData}
}