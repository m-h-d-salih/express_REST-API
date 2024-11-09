import prisma from "../DB/db.confic.js"

export const getPosts=async(req,res)=>{
    try {
        const posts=await prisma.post.findMany({})
        if(!posts) return res.status(404).json({message:`no post found`})
        res.status(200).json({message:`post fetched successfully`,data:posts})
    } catch (error) {
        console.log(error)
    }
}