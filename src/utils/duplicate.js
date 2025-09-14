
const duplicate = () => {
      
        const data=require('./data.json')
        const ids=data.results.map((movie)=>movie.id)
        const duplicates=ids.filter((id,index)=>ids.indexOf(id)!==index)
        
        console.log("Duplicate IDs:", [...new Set(duplicates)]);

}

export default duplicate

