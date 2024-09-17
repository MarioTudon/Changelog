import { useEffect, useState } from 'react';

const Modal = ({ isOpen, closeModal, inputRef, sendDataToParent }) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [record, setRecord] = useState("");

    const currentDateAndTime = () => {
        const newDate = new Date();
        const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: 'long', timeZone: 'America/Mexico_city' });
        const formatedDate = dateFormatter.format(newDate);
        const timeFormatter = new Intl.DateTimeFormat("en-US", { timeStyle: 'medium', timeZone: 'America/Mexico_city', hour12: false });
        const formatedTime = timeFormatter.format(newDate);
        const formats = { date: formatedDate, time: formatedTime };
        return formats;
    };

    useEffect(() => {
        document.addEventListener('keydown', handleEscapeKey);
        return (() => {
            document.removeEventListener('keydown', handleEscapeKey);
        })
    }, []);

    function handleChange(e) {
        setDate(currentDateAndTime().date);
        setTime(currentDateAndTime().time);
        setRecord(e.target.value);
    }

    function handleEnterKey(e) {
        if (e.key === 'Enter') {
            if (inputRef.current.value === '') { alert('The log cannot be empty'); return; }
            handleChange({ target: { value: inputRef.current.value } });
            sendDataToParent(date, time, record);
            closeModal();
        }
    }

    function handleEscapeKey (e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    }

    function handleClick() {
        if (inputRef.current.value === '') { alert('The log cannot be empty'); return; }
        sendDataToParent(date, time, record);
        closeModal();
    }

    return isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 pt-4 rounded-lg shadow-lg w-1/5 min-w-52 relative flex flex-col">
                <h2 className="text-xl font-semibold mb-6">Add a New Log</h2>
                <button className="absolute top-1 right-3 text-gray-500 hover:text-gray-800 text-2xl inline-block" onClick={closeModal}> &times; </button>
                <div className='flex flex-col mt-auto'>
                    <input className='border-slate-900 w-full h-9 px-4 border-2 rounded-lg' type="text" name="modal-text-input" id="modal-text-input" maxLength={'50'} placeholder="Enter your log here" ref={inputRef} onChange={handleChange} onKeyDown={handleEnterKey}/>
                    <button className='mr-auto mt-4 bg-slate-500 text-slate-100 text-base px-6 py-2 rounded-full hover:scale-110 transition-all hover:bg-slate-600' onClick={handleClick}>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
