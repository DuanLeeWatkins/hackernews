import { React, useState } from "react";


//This is a standard setup for a React component with two input fields where users can provide the url and description of the Link they want to create. 
//The data that’s typed into these fields is held in the component’s local state by way of the useState hook.
const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: "",
    url: "",
  });
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2" value={formState.description}
                        onChange={(e) => setFormState({...formState, description: e.target.value})} type="text" placeholder="A description for the link"
                    />
                    <input
                       className="mb2"
                        value={formState.url}
                        onChange={(e) =>
                            setFormState({
                                ...formState,
                                url: e.target.value
                            })
                        }
                        type="text"
                        placeholder="The URL for the link" 
                    />
                    
                </div>
                <button type="submit">Submit</button>

            </form>
      </div>;
  ) 
};

export default CreateLink;
