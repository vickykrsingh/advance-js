const fetchUser = async () => {
    try {
        let result = await fetch('https://jsonplaceholder.typicode.com/users',{
            method:'GET'
        })
        result = await result.json()
        if(!Object.keys(result).length){
            throw new Error('something went wrong');
        }else{
            return result;
        }
    } catch (error) {
        console.log(error.message)
        return null
    }
}

const data = fetchUser().then((data)=>console.log(data)).catch((error)=>console.log(error))
