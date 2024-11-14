import { useState } from 'react';

function Formulate() {

    const [form, setForm] = useState({
        email: '', userName: '', number: '', radio: '',
    });
    const [select, setSelect] = useState ('');
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`submitted: ${formData}`);
    };

    return (
        <div>
            <form>
                <div className='mb-4 justify-content flex-col item-cente h-screenr'>
                    <p className='text-1g font-bold'>register form</p>
                    <label className='block text-grey-700 font-semibold'>Email</label> 
                    <input type="email" name="email" value={form.email} onChange={(e) => handleChange(e)} /> <br />
                </div>

                <div>
                    <label className='block text-grey-700 font-semibold'>Username</label>
                    <input type="text" name="username" value={form.userName} onChange={(e) => handleChange(e)} /> <br />
                </div>

                <div>
                    <label className='block text-grey-700 font-semibold'>Number</label>
                    <input type="tell" name="number" value={form.number} onChange={(e) => handleChange(e)} /> <br />
                </div>

                <div>

                    <input type="checkbox" name="checkbox" value={form.checkBox} onChange={(e) => handleChange(e)} /> 
                    <label className='block text-grey-700 font-semibold'>Checkbox 1</label>

                    <input type="checkbox" name="checkbox" value={form.checkBox} onChange={(e) => handleChange(e)} />
                    <label className='block text-grey-700 font-semibold'>Checkbox 2</label>

                    < input type="checkbox" name="checkbox" value={form.checkBox} onChange={(e) => handleChange(e)} /> < br />
                    <label className='block text-grey-700 font-semibold'>Checkbox 3</label>
                </div>


                <div>

                    <input type="radio" name="radio" value={form.checkBox} onChange={(e) => handleChange(e)} /> 
                    <label className='block text-grey-700 font-semibold'>Radio 1</label>

                    <input type="radio" name="radio" value={form.checkBox} onChange={(e) => handleChange(e)} />
                    <label className='block text-grey-700 font-semibold'>Radio 2</label>

                    < input type="radio" name="radio" value={form.checkBox} onChange={(e) => handleChange(e)} /> < br />
                    <label className='block text-grey-700 font-semibold'>Radio 3</label>
                </div>


                <select value={select} onChange={(e) => setSelect(e.target.value)} > 
                    <option value='option 1'>option 1</option>
                    <option value='option 2'>option 2</option>
                    <option value='option 3'>option 3</option>
                </select>
                <p>Select List: {select}</p> < br />

            




                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>

        </div>
    );
};
export default Formulate;



