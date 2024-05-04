
import  {useState , useEffect} from "react";
import BASEURL from "../axios/axios";
import axios from "axios";
import { saveFile ,  deleteFile} from "../firebase/firebase";


 function GetAllData(){

    let [flowers , setFlower] = useState([]);

    useEffect(() => {
        fetchAllData();
    })

    async function fetchAllData(){
      let response = await axios.get(`${BASEURL}`);
      setFlower(response.data);
    }

    return flowers;
 }


 async function saveFlower(flower , imagetoUpload){

      const getImagePath = await saveFile(imagetoUpload);
      flower.flowerImageUrl = getImagePath;

      let response = await axios.post(`${BASEURL}/flower` , flower);
      return response.status ;
 }

 
 async function deleteFlower(id , imagePath){
     await deleteFile(imagePath);
     await axios.delete(`${BASEURL}/flower/${id}`);
  }


   async function updateFlower(flowerObj , newImage){

      if(newImage !== '') {
        await deleteFile(flowerObj.flowerImageUrl);
        const getImagePath = await saveFile(newImage);
        flowerObj.flowerImageUrl = getImagePath ;
      }
     
      let response = await axios.put(`${BASEURL}/flower/${flowerObj.flowerId}` , flowerObj);
      return response.status;
   }

 

 export  {GetAllData , saveFlower,deleteFlower, updateFlower} ;
