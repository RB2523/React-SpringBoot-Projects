
 
  import React, { useState }  from "react";

  import './Component.css';
  
  import { GetAllData  , saveFlower , deleteFlower , updateFlower} from "../Request/request";

  function Home(){

    let [imageUpload , setImageUpload] = useState("");

    let [flower, setFlower] = useState({
      flowerName : "",
      flowerQuantity : "",
      flowerPrice : "",
      flowerImageUrl:""
    });
    
    function handleTextFieldChange(e){
      setFlower( {...flower  , [e.target.name] : e.target.value })
    }

   async function handleSubmitFlower(){
       let status = await saveFlower(flower, imageUpload);
       
       if(status === 201){
         alert("Data Saved");

         flower.flowerName = "";
         flower.flowerQuantity = "";
         flower.flowerPrice = "";
         document.getElementById("imageUpload").value = "";
         setImageUpload("");
       }
    }

    async function handleDeleteFlower(id , imagePath){
        await deleteFlower(id , imagePath);
    }




      let [updateflower, setUpdateflower] = useState({
            flowerId:"",
            flowerName : "",
            flowerQuantity : "",
            flowerPrice : "",
            flowerImageUrl:""
        });
     
        function handleUpdate(e){
          setUpdateflower( {...updateflower  , [e.target.name] : e.target.value })
        }

      function handlePrepareForUpdate(flowerObj){
        document.getElementById('updateBox').style.display = 'block';
        setUpdateflower(flowerObj);
      }

    async function handleUpdateFlower(){
      let status =  await updateFlower(updateflower , imageUpload);
       
      if(status === 200){
        updateflower.flowerId = "";
        updateflower.flowerName = "";
        updateflower.flowerQuantity = "";
        updateflower.flowerPrice = "";
        updateflower.flowerImageUrl = "";

        document.getElementById("imageUploadUpdate").value = "";
        setImageUpload("");
        document.getElementById('updateBox').style.display = 'none';
      }
     }

    let flowers = GetAllData();

    return(
      <div className="container"> 

      <div className="box">
        <div className="addFlower">
          <h1>Add New Flower</h1>
          <input type="text" value={flower.flowerName} onChange={handleTextFieldChange} name="flowerName" placeholder="Flower Name*" />
          <input type="number" value={flower.flowerQuantity}  onChange={handleTextFieldChange} name="flowerQuantity" placeholder="Flower Quantity*" />
          <input type="number" value={flower.flowerPrice} onChange={handleTextFieldChange} name="flowerPrice" placeholder="Flower Price*" />
          <input type="file" id='imageUpload' onChange={(event) => {setImageUpload(event.target.files[0])}} />
          <button onClick={handleSubmitFlower}>Add</button>
        </div>

      <div id="updateBox">
        <div className="addFlower margin">
          <h1>Update Flower</h1>
          <input type="text" value={updateflower.flowerName} onChange={handleUpdate} name="flowerName" placeholder="Flower Name*" />
          <input type="number" value={updateflower.flowerQuantity}  onChange={handleUpdate} name="flowerQuantity" placeholder="Flower Quantity*" />
          <input type="number" value={updateflower.flowerPrice} onChange={handleUpdate} name="flowerPrice" placeholder="Flower Price*" />
          <input type="file" id='imageUploadUpdate' onChange={(event) => {setImageUpload(event.target.files[0])}} />
          <button onClick={handleUpdateFlower}>Update</button>
        </div>
      </div>
      
     </div>
          
          
         
        

        <div className="list">
          <h1>Flower Stock</h1>

           <table>
              <thead>
                 <tr>
                    <th>Flower Image</th>
                    <th>Flower Name</th>
                    <th>Flower Quantity</th>
                    <th>Flower Price</th>
                    <th>Action</th>
                 </tr>
              </thead>
              <tbody>

                 {
                  flowers.map((flower ,i) => {
                    return (  
                    <tr key={i}>
                      <td> <img src= {flower.flowerImageUrl} alt="" /> </td>
                      <td>{flower.flowerName}</td>
                      <td>{flower.flowerQuantity}</td>
                      <td>{flower.flowerPrice}</td>
                      <td> 
                        <span id="pencil" onClick={() =>handlePrepareForUpdate(flower)}> <i className ="fa-solid fa-pencil"> </i>  </span> 
                        <span  id="trash" onClick={() =>handleDeleteFlower(flower.flowerId , flower.flowerImageUrl)}> <i className="fa-solid fa-trash"> </i>   </span> 
                      </td>
                    </tr>
                    );
                  })
                 }
                 
              </tbody>
           </table>
        </div>
        
      </div>
    );
  }
  
  export default Home;


