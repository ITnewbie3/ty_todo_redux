import React, { FormEvent, useState } from 'react';


type TodoInsertProps = {
    onInsert: (text:string) => void
}
const TodoInsert = ({onInsert} :TodoInsertProps) => {
    const [value,setValue] = useState('');
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const onSubmit = (e:FormEvent) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={value} placeholder="할일을 입력하세요." />
                <button type='submit'>등록</button>
            </form>
        </div>
    );
};

export default TodoInsert;