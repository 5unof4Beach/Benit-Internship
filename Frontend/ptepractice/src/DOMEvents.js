import React from "react"

function TestButton({title ,href, onClick}) {
    let Component = 'button'

    const props = {}

    if(href){
        Component = 'a'
        props.href = href
    }

    if(onClick){
        props.onClick = onClick
    }

    console.log({...props})
    console.log(props)
    
    return (
        <Component   
            {...props}
        >
            {title}
        </Component>
    )
}

const Form = {
    Input({testValue,...inputProps}) {
        return (
            <React.Fragment>
                <input {...inputProps}/>
                <p>{testValue}</p>
            </React.Fragment>
        )
    },

    Checkbox(){
        return <input type = 'checkbox'/>
    }
}

function TwoWayBinding(){
    const [name, setName]  = React.useState('')

    const handleNameChange = (input) =>{
        setName(input)
    }

    console.log(name)

    return(
        <React.Fragment>
            <input 
                value={name}
                onChange={e => handleNameChange(e.target.value)}
            />

            <button 
                onClick={e => handleNameChange('New Name')}
            >Change Name</button>
        </React.Fragment>
    )
}

function TwoWayBindingRadio(){
    const data = [
        {
            id:1,
            name: "html"
        },
        {
            id:2,
            name: "Java"
        },
        {
            id:3,
            name: "css"
        },
        {
            id:4,
            name: "Spring Boot"
        }
    ]

    const[choice, setChoice] = React.useState(3)

    const handleChoice = (id) => {
        setChoice(id)
    }   

    console.log(choice)
    return (
        <div>
            {
                data.map((course) => 
                    (<div key={course.id}>
                        <input 
                            id={course.name}
                            type='radio' 
                            checked={choice===course.id}
                            onChange={() => handleChoice(course.id)}
                        />
                        <label htmlFor={course.name}>{course.name}</label>
                        
                    </div>)
                )
            }
            
        </div>
    )
}
function TwoWayBindingCheckBox(){
    const data = [
        {
            id:1,
            name: "html"
        },
        {
            id:2,
            name: "Java"
        },
        {
            id:3,
            name: "css"
        },
        {
            id:4,
            name: "Spring Boot"
        }
    ]

    const[choiceList, setChoiceList] = React.useState([])

    const handleChoice = (id) => {

        if(choiceList.includes(id)){
            console.log("in the list already")
            setChoiceList(prev => {
                return prev.filter(item => item !== id)
            })
            
        }
        else{
            setChoiceList(prev => {
                return [...prev,id]
            })
        }
    }   


    console.log(choiceList)
    return (
        <div>
            {
                data.map((course) => 
                    (<div key={course.id}>
                        <input 
                            id={course.name}
                            type='checkbox' 
                            checked={choiceList.includes(course.id)}
                            onChange={() => handleChoice(course.id)}
                        />
                        <label htmlFor={course.name}>{course.name}</label>
                        
                    </div>)
                )
            }
            
        </div>
    )
}

export {TestButton, Form, TwoWayBinding, TwoWayBindingRadio, TwoWayBindingCheckBox};

