import prisma from "../DB/db.confic.js";

export const createUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        const finduser=await prisma.user.findUnique({where:{email}});
        if(finduser) return res.status(400).json({message:`user already exist`});
        const newuser=await prisma.User.create({data:{name,email,password}})
        res.status(200).json({message:`user created successfully`,data:newuser})
    } catch (error) {
        console.log(error) 
    }
} 
export const getUsers=async(req,res)=>{
    try {
        
        const finduser=await prisma.user.findMany();
        if(!finduser) return res.status(400).json({message:`users doesnot exist`});
        res.status(200).json({message:`users fetched successfully`,data:finduser})
    } catch (error) {
        console.log(error) 
    }
} 
export const getUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const finduser=await prisma.user.findUnique({where:{id}});
        if(!finduser) return res.status(400).json({message:`user doesnot exist`});
        res.status(200).json({message:`user fetched successfully`,data:finduser})
    } catch (error) {
        console.log(error) 
    }
} 
export const updateUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const {name,email,password}=req.body
        const finduser=await prisma.user.findUnique({where:{id}});
        if(!finduser) return res.status(400).json({message:`user doesnot exist`});
        const updateUser=await prisma.User.update({where:{id},data:{name,email,password}})
        if(!updateUser) return res.status(400).json({message:`user doesnot updated`});
        res.status(200).json({message:`user updated successfully`,data:updateUser})
    } catch (error) {
        console.log(error) 
    }
} 
export const deleteUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const finduser=await prisma.user.findUnique({where:{id}});
        if(!finduser) return res.status(400).json({message:`user doesnot exist`});
        const deletedUser=await prisma.User.delete({where:{id}})
        if(!deleteUser) return res.status(400).json({message:`user doesnot deleted`});
        res.status(200).json({message:`user deleted successfully`,data:deletedUser})
    } catch (error) {
        console.log(error) 
    }
} 