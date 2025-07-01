const axios=require('axios')

 
 const getApodData=async(req,res)=>{
    const{date}=req.query;

    try {
        const response=await axios.get('https://api.nasa.gov/planetary/apod',{
            params:{
                api_key:process.env.NASA_API_KEY,
                date:date||new Date().toISOString().split('T')[0],
            },
        });
        res.json(response.data)
    } catch (error) {
        res.status(500).json({error:'Failed to fetch APOD data'});
        
    }




}
module.exports={getApodData};