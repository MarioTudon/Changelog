function AddLog({ openModal, textButton}) {

    return (
        <>
            <button className='fixed bottom-4 right-4 bg-slate-500 text-slate-100 text-xl px-6 py-2 rounded-full hover:scale-110 transition-all hover:bg-slate-600' onClick={openModal}>{textButton}</button>
        </>
    );
}

export default AddLog;
