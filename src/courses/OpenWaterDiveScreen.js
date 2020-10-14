import React, {useState, useEffect} from 'react';
import Jumbotron from '../Jumbotron';
import Card from '../Card';  

const OpenWaterDive = () => {
  const [state, setState] = useState({
    courseName: ''
  })
  useEffect(
    () => {
        // If the profile data is not loaded
        
            // fetch the data from backend
            fetch('http://localhost:3002/products/find', {
                method: 'POST',
                body:{}
        
                
            })
            .then(
                (response) => {
                    console.log('response', response);
                    return response.json()
                }
            )
            .then((course) => {
                // Once data is loaded, change profileLoaded to true and 
                // change the state to populate the form fields
                setState(
                    {
                        ...state,
                        courseName:course[0].courseName,
                        licence: course[0].licence,
                        price: course[0].price,
                        
                    }
                )
            })
            .catch(
                (e) => console.log('e', e)
            ) 
        
    }, 
    [state.courseName]
)



    return (
        <div className="screen">  
          <p>{state.courseName}</p>
        <center>  
        <Jumbotron 
          
          trip="Open Water Dive" 

        >
        </Jumbotron>
        </center>
        
  
  
  
      </div>
    
    )
};

export default OpenWaterDive;