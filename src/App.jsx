import { useState, useRef, useEffect } from 'react';
import AddLog from './components/AddLog.jsx'
import Modal from './components/Modal.jsx'
import Changelog from './components/Changelog.jsx';
import Log from './components/Log.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [logs, setLogs] = useState(() => {
        const savedLogs = JSON.parse(localStorage.getItem('logs'));
        return savedLogs || [];
    });
    const inputRef = useRef(null);

    const openModal = () => { setIsModalOpen(true); setTimeout(() => { inputRef.current?.focus(); }, 0); }
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        localStorage.setItem('logs', JSON.stringify(logs));
        console.log(logs);
    }, [logs]);

    function handleDataFromChild(date, time, record) {
        const newLog = { date, time, record }
        setLogs([newLog, ...logs]);
    }

    function deleteLog(log) {
        setLogs(logs.filter(l => l.time !== log.time));
    };

    return (
        <>
            <Modal isOpen={isModalOpen} closeModal={closeModal} inputRef={inputRef} sendDataToParent={handleDataFromChild} />
            <h1 className='text-center text-5xl font-semibold text-slate-700 mt-4 uppercase'>Changelog</h1>
            <h2 className='mb-auto mt-4 text-xl font-medium text-slate-400 w-3/4 text-center'>Here's everything we have shipped in the past few days</h2>
            <AddLog openModal={openModal} textButton={'Add Log'} inputRef={inputRef} />
            <Changelog>
                <ul>
                    {
                        logs.map(log =>
                            <li key={log.time} className='group hover:bg-slate-100 relative px-8 rounded-md'>
                                <Log date={log.date} time={log.time} record={log.record} />
                                <button className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-800 text-3xl opacity-0 group-hover:opacity-100 transition-opacity" title="Delete log" onClick={() => { deleteLog(log) }}>&times;</button>
                            </li>)
                    }
                </ul>
            </Changelog>
        </>
    );
}

export default App;