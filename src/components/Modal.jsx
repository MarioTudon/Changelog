const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative flex flex-col">
                <h2 className="text-xl font-semibold mb-6">Add a new log</h2>
                <button className="absolute top-0 left-0 text-gray-500 hover:text-gray-800 text-2xl inline-block" onClick={onClose}> &times; </button>
                <div className='flex mt-auto'>
                    <input className='border-slate-900 w-2/3 px-4 border-2 rounded-lg' type="text" name="" id="" maxLength={'50'} placeholder="Enter your log here" />
                    <button className='ml-auto bg-slate-500 text-slate-100 text-base px-6 py-2 rounded-full hover:scale-110 transition-all hover:bg-slate-600'>Add</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
