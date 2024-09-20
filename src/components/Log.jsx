function Log({ date, time, record }) {
    return (
        <>
            <div className="relative grid grid-cols-2 grid-rows-1 min-h-12 text-lg font-semibold text-slate-700">
                <div className="flex items-center justify-end border-r border-r-slate-900 pr-4 py-1 pb-auto text-base">{date} {time}</div>
                <div className="absolute w-3.5 h-3.5 bg-slate-900 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="flex items-center justify-start border-l border-l-slate-900 pl-6 py-1 pb-auto max-w-96" style={{ wordBreak: 'break-word' }}>{record}</div>
            </div>
        </>
    );
}

export default Log;