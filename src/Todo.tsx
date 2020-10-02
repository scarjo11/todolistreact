import React, {useState} from 'react'

export default function Todo() {

    interface TodoElement {
        value: ''
    }

    const [element, setElement] = useState<TodoElement>({value:''})
    const [items, setItems] = useState<Array<TodoElement>>([])

    const onChange = (e: any) => {
        setElement(e.target.value)
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        if(element.value) {
            setElement({value: ''})
            setItems([...items, element])
        }
        else {
            alert('Vous avez certainement des choses à faire !');
        }

    }

    const deleteItem = (index: number) =>  {
        const arr = items;
        arr.splice(index, 1);
        console.log(arr)
        setItems([...arr])
    }

    const renderTodo = () : any => {
        return items.map((item, index) => {
            return (
                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h4>{item}
                        <i 
                        className="fas fa-times"
                        style={{cursor: 'pointer', float: 'right', color: 'red'}}
                        onClick={()=> deleteItem(index)}
                        ></i>
                        </h4>
                    </div>
                </div>
            )
        })
    }

    return (
        <React.Fragment>
            <div className="card my-3">
                <div className="card-header">To-Do List</div>
                <div className="card-body">

                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            
                            <label htmlFor="element">Chose à faire</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                name="element"
                                onChange={(e) => onChange(e)}
                                value={element.value}
                            />

                        </div>
                        <button className="btn btn-primary btn-block">
                            Ajouter une chose à faire
                        </button>
                    </form>
                </div>
            </div>
            {renderTodo()}
        </React.Fragment>
    )
}