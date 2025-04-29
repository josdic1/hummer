

function IdeaCard({ idea, onButtonAction }) {

const onAction = (e) => {
    let click;
   const { name, value, type } = e.currentTarget 
    type === 'select-one' ? click = value : 
    click = name
    switch(click) {
        case 'view':
            onButtonAction(idea.id)
    }
    }


    return (
        <>
        <tr>
            <td> {idea.title} </td>
            <td> {idea.bpm} </td>
            <td> {idea.status} </td>
            <td> {idea.modified_on} </td>
            <td><button type='button' name='view' onClick={onAction}> 🖻 </button></td>
            <td><button type='button' name='listen'
            onClick={onAction}> 🔈 </button></td>
            <td>
                <select name='actions' onChange={onAction} value="">
                <option value="" disabled> Actions </option>
                <option value="edit"> Edit </option>
                <option  value="delete"> Delete </option>
                <option value="archive"> Archive </option>
            </select>
            </td>
            </tr>
        </>
    )



}

export default IdeaCard

