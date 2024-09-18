import { useState, useRef, useEffect } from 'react';
import AddLog from './components/AddLog.jsx'
import Modal from './components/Modal.jsx'
import Changelog from './components/Changelog.jsx';
import Log from './components/Log.jsx'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [logs, setLogs] = useState(()=>{
        const storagedRecord = JSON.parse(localStorage.getItem('logs'));
        return storagedRecord || []
    });
    const inputRef = useRef(null);

    const openModal = () => { setIsModalOpen(true); setTimeout(() => { inputRef.current?.focus(); }, 0); }
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        localStorage.setItem('logs', JSON.stringify(logs));
    }, [logs]);

    function handleDataFromChild(date, time, record) {
        setLogs([<Log date={date} time={time} record={record} />, ...logs]);
    }

    function deleteLog(log) {
        setLogs(logs.filter(l => l.props.time !== log.props.time));
    };

    return (
        <>
            <Modal isOpen={isModalOpen} closeModal={closeModal} inputRef={inputRef} sendDataToParent={handleDataFromChild} />
            <h1 className='text-center text-6xl font-semibold text-slate-700'>Changelog</h1>
            <h2 className='mb-auto mt-4 text-xl font-medium text-slate-400'>Here's everything we have shipped in the past few days</h2>
            <AddLog openModal={openModal} textButton={'Add Log'} inputRef={inputRef} />
            <Changelog>
                <ul>
                    {logs.map(log =>
                        <li key={log.props.time} className='group hover:bg-slate-100 relative px-10 rounded-md'>
                            {log}
                            <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-800 text-3xl opacity-0 group-hover:opacity-100 transition-opacity" title="Delete log" onClick={() => { deleteLog(log) }}>&times;</button>
                        </li>)}
                </ul>
            </Changelog>
        </>
    );
}

export default App;