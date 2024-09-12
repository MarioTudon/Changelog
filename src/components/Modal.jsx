const Modal = ({ isOpen, closeModal, inputRef }) => {

    return isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 pt-4 rounded-lg shadow-lg w-1/5 min-w-52 relative flex flex-col">
                <h2 className="text-xl font-semibold mb-6">Add a New Log</h2>
                <button className="absolute top-1 right-3 text-gray-500 hover:text-gray-800 text-2xl inline-block" onClick={closeModal}> &times; </button>
                <div className='flex flex-col mt-auto'>
                    <input className='border-slate-900 w-full h-9 px-4 border-2 rounded-lg' type="text" name="modal-text-input" id="modal-text-input" maxLength={'50'} placeholder="Enter your log here" ref={inputRef}/>
                    <button className='mr-auto mt-4 bg-slate-500 text-slate-100 text-base px-6 py-2 rounded-full hover:scale-110 transition-all hover:bg-slate-600'>Add</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
