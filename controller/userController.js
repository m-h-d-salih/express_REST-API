import prisma from "../DB/db.confic.js";

export const createUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const finduser=await prisma.User.findUnique({where:{email}});
        if(finduser) return res.status(400).json({message:`user already exist`});
        const newuser=await prisma.User.create({data:{name,email,password}})
        res.status(200).json({message:`user created successfully`,data:newuser})
    } catch (error) {
        console.log(error) 
    }
} 
export const getUsers=async(req,res)=>{
    try {
        
        const finduser=await prisma.User.findMany();
        if(!finduser) return res.status(400).json({message:`users doesnot exist`});
        res.status(200).json({message:`users fetched successfully`,data:finduser})
    } catch (error) {
        console.log(error) 
    }
} 
export const getUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const finduser=await prisma.User.findUnique({where:{id}});
        if(!finduser) return res.status(400).json({message:`user doesnot exist`});
        res.status(200).json({message:`user fetched successfully`,data:finduser})
    } catch (error) {
        console.log(error) 
    }
} 