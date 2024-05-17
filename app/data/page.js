async function fetchData(){
    const res = await fetch("https://fakestoreapi.com/products/");
    const data=await res.json();
    return data;
}

export default async function Data(){
    const products=await fetchData();

    return(
        <>
        
        </>
    )
}