app.use(express.static(__dirname));

app.get("/", function(req,req){
    res.sendFile(__dirname + "index.html")
})

app.listen(8080,function(){
    console.log("aplication running on port 8080")
})