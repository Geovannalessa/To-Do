module.exports = {   
    home: (req,res)=>{
        console.log ("testando.. home")
        res.render('home')
        },
    todo: (req,res) =>{
        console.log('testando.. todo')
        res.render('todo')
    }
}
