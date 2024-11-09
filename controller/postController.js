import prisma from "../DB/db.confic.js"

// const json = (param) => {
//     return JSON.stringify(
//       param,
//       (key, value) => (typeof value === "bigint" ? value.toString() : value) 
//     );
//   };
  const convertToJosn=(param)=>{
    const data=param.map(item=>{
        let num;
       if(typeof item.comment_count==='bigint'){
       num= item.comment_count.toString()
       }else{
        num=item.comment_count;
       }
       return {...item,comment_count:num}
    })
    return data;
  }
export const getPosts=async(req,res)=>{
    try {
        const posts=await prisma.post.findMany({})
        if(!posts) return res.status(404).json({message:`no post found`})
        const data=convertToJosn(posts)

        res.status(200).send({message:`posts fetched successfully`,data})
    } catch (error) {
        console.log(error)
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
        
         const data=json(newPosts)
        
        res.status(200).send({message:`post created successfully`,data})
    } catch (error) {
        console.log(error)
    }
}
