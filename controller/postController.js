import prisma from "../DB/db.confic.js"

const json = (param) => {
    const data= JSON.stringify(
      param,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) 
    );
    return JSON.parse(data)
  };
export const getPosts=async(req,res)=>{
    try {
        const posts=await prisma.post.findMany({})
        if(!posts) return res.status(404).json({message:`no post found`})
        const data=json(posts)

        res.status(200).send({message:`posts fetched successfully`,data})
    } catch (error) {
        console.log(error) 
       return res.status(500).json({message:`intternel server error ${error.message}`})
    }
}

export const createPost=async(req,res)=>{
    const userId=req.params.id;
    const {title,description}=req.body;
    try {
        const newPosts=await prisma.post.create({
            data:{user_id:Number(userId),title,description}
        })
        
        if(!newPosts) return res.status(404).json({message:`post cantbe created `})
        console.log(newPosts)
         const data=json(newPosts)
        
        res.status(200).send({message:`post created successfully`,data})
    } catch (error) {
        console.log(error) 
        return res.status(500).json({message:`intternel server error ${error.message}`})
    }
}
export const getPostsByUser=async(req,res)=>{
    const userId=parseInt(req.params.id)
    try {
        const posts=await prisma.post.findMany({where:{user_id:userId}})
        if(!posts) return res.status(404).json({message:`no post found`})
        const data=json(posts)
        res.status(200).send({message:`post fetched successfully`,data})
    } catch (error) {
       console.log(error) 
       return res.status(500).json({message:`intternel server error ${error.message}`})
    }
}
