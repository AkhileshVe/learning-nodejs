function userformData(req, resp){
    
resp.write(
    `    <form action="/submit" method="post">
    <input type="text" placeholder="enter name" name="name"/>
    <input type="text" placeholder ="enter email" name= "email" />
    <button>submit</button>
    </form>`
)
}

module.exports = userformData;