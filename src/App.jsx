import { useState, useRef } from 'react';
import AddLog from './components/AddLog.jsx'
import Modal from './components/Modal.jsx'
import Changelog from './components/Changelog.jsx';
import Log from './components/Log.jsx'

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const inputRef = useRef(null);

    const openModal = () => { setIsModalOpen(true); setTimeout(() => { inputRef.current?.focus(); }, 0); }
    const closeModal = () => setIsModalOpen(false);

    const [logs, setLogs] = useState([]);

    function handleDataFromChild(date, time, record) {
        let logsCopy = logs.slice();
        logsCopy.unshift(<Log date={date} time={time} record={record} />);
        setLogs(logsCopy);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            openModal();
        }
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    })

    function handleKey(e) {
        console.log(e.key);
    }

    return (
        <>
            <Modal isOpen={isModalOpen} closeModal={closeModal} inputRef={inputRef} sendDataToParent={handleDataFromChild} />
            <h1 className='text-center text-6xl font-semibold text-slate-700' onKeyDown={handleKey}
                tabIndex="0">Changelog</h1>
            <h2 className='mb-auto mt-4 text-xl font-medium text-slate-400'>Here's everything we have shipped in the past few days</h2>
            <AddLog openModal={openModal} textButton={'Add Log'} inputRef={inputRef} />
            <Changelog>
                <ul>
                    {logs.map(log => <li key={log.props.time}>{log}</li>)}
                </ul>
            </Changelog>
        </>
    );
}

export default App;