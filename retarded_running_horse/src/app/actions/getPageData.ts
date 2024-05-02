import pages from "./index.json";

export function getPageData(page_id: string | string[] | undefined) {
    if(typeof page_id !== "string"){
        return pages[0];
    }

    const id = parseInt(page_id);

    if(typeof id !== "number") {
        return pages[0];
    }

    const page = pages?.find(page => page.id == id);
    return page;
}

export function getAllPagesExceptCurrentPage(page_id: string | string[] | undefined) {
    if(typeof page_id !== "string"){
        return pages?.filter(page => page.id != 1);
    }
    
    const id = parseInt(page_id);

    if(typeof id !== "number") {
        return pages?.filter(page => page.id != 1);
    }

    return pages?.filter(page => page.id != id);
}