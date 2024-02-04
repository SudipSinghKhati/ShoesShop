import React from "react";

const CategoryForm = ({handleSubmit , value , setValue}) => {
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    
                    <input type="text" className="form-control" placeholder="Enter your category"
                     value={value} 
                     onChange={(e)=>setValue(e.target.value)}/>
                    
                </div>
              
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>Submit</button>

            </form>

        </>
    )
}

export default CategoryForm;