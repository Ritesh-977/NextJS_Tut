import "server-only";

export const serverSideFunction = () => {
    console.log(
        `use multiple libraries,
        use environment variables,
        interact with a db,
        process confidential information`
    );
    return "server result";
}