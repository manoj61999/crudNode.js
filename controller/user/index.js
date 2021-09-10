let service = require('./service');

let registration = async(req,res)=>{
    let savedata = await service.saveData(req.body);
    if(savedata){
        let Result = "submitted successfully";
        res.send({"Result":Result});
    }else{
        let Result = "some thing wend wrong";
        res.send({"Result":Result});
    }
}
let login = async(req,res)=>{
    let finddata = await service.Finddata({email:req.body.email});
    if(finddata.length>0){
        if(req.body.password==finddata[0].password){
            let Result ="login Successfully"
            res.send({"Result":Result});
        }else{
            let Result = "wrong password"
            res.send({"Result":Result});
        }
    }else{
        let Result = "no user Found"
        res.send({"Result":Result});
    }
}

let showuser = async(req,res)=>{
    let finddata = await service.Finddata({email:req.body.email});
    res.send({"Result":finddata});
}
let readalluser = async(req,res)=>{
    let readdata = await service.ReadData({email:req.body.email});
    res.send({"Result":readdata});
}






module.exports={
    registration,
    login,
    showuser,
    readalluser
};