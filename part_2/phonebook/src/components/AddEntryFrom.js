const AddEntryForm = (props) => {
    return (
        <form>
        <label className="form__label" htmlFor="name">
            Name:
            <input
                id="name"
                type="text"
                value={props.newName}
                onChange={props.handleNameChange}
            />
        </label>
        <label className="input" htmlFor="phone">
            Phone:
            <input
                id="phone"
                type="text"
                value={props.newPhone}
                onChange={props.handlePhoneChange}
            />
        </label>
    <div>
        <button type="submit" onClick={props.handleAddEntry}>
            add
        </button>
    </div>
</form>
    )
}

export default AddEntryForm;