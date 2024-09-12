import { useState, useRef } from 'react';
import AddLog from './components/AddLog.jsx'
import Modal from './components/Modal.jsx'
import Changelog from './components/Changelog.jsx';
import Log from './components/Log.jsx'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const inputRef = useRef(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [logs, setLog] = useState([<Log date={1} record={1} />, <Log date={2} record={2} />]);

    function handleDataFromChild(date, time, log) {
        console.log(date + ' ' + time + ' ' + log);
    }

    return (
        <>
            <Modal isOpen={isModalOpen} closeModal={closeModal} inputRef={inputRef} sendDataToParent={handleDataFromChild} />
            <h1 className='text-center text-6xl font-semibold text-slate-700'>Changelog</h1>
            <h2 className='mb-auto mt-4 text-xl font-medium text-slate-400'>Here's everything we have shipped in the past few days</h2>
            <AddLog openModal={openModal} textButton={'Add Log'} inputRef={inputRef} />
            <Changelog>
                <ul>
                    {logs.map(log => <li key={log.props.date}>{log}</li>)}
                </ul>
            </Changelog>
        </>
    );
}

export default App;