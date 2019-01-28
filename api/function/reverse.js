module.exports=(sentence)=>{
    
    return sentence.split("").reverse().join("").split(" ").reverse().join(" ")
}