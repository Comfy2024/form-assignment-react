
import { useState } from 'react';

function FormComponent() {
    const [form, setForm] = useState('');
    const [select, setSelect] = useState('');
    const [formData, setFormData] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`submitted; ${formData}`)

    };

    return (
        <div>
            <label className='text-lg font-bold text-blue'>Enter your name</label>
            <input type='text' value={form} onChange={(e) => setForm(e.target.value)} />
            <p>Input Value: {form}</p>
            <label>select from the list</label>


            <select value={select} onChange={(e) => setSelect(e.target.value)}>
                <option value='option 1'>option 1</option>
                <option value='option 2'>option 2</option>
                <option value='option 3'>option 3</option>
                <option value='option 4'>option 4</option>
            </select>
            <p>Select List: {select}</p>
            <input type='text' value={formData} onChange={(e) => setFormData(e.target.value)} />
            <button className='bd-blue-500 text-white' onClick={handleSubmit}>submit</button>
        </div>

    );

}
export default FormComponent;


