import { useState } from 'react';
import AddLog from './components/AddLog.jsx'
import Modal from './components/Modal.jsx'
import Changelog from './components/Changelog.jsx';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const currentDateAndTime = () => {
        const date = new Date();
        const dateFormatter = new Intl.DateTimeFormat("en-US", { dateStyle: 'long', timeZone: 'America/Mexico_city' });
        const formatedDate = dateFormatter.format(date);
        const timeFormatter = new Intl.DateTimeFormat("en-US", { timeStyle: 'medium', timeZone: 'America/Mexico_city', hour12: false });
        const formatedTime = timeFormatter.format(date);
        const formats = { date: formatedDate, time: formatedTime };
        return formats;
    };

    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
            </Modal>
            <h1 className='text-center text-6xl font-semibold text-slate-700'>Changelog</h1>
            <h2 className='mb-auto mt-4 text-xl font-medium text-slate-400'>Here's everything we have shipped in the past few days</h2>
            <AddLog openModal={openModal} textButton={'Add Log'} />
            <Changelog />
        </>
    );
}

export default App;