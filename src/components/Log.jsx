function DateAndTime({ date, time }) {
    return (
        <>
            <div className="flex items-center justify-end border-r border-r-slate-900 pr-12 py-1 pb-auto">{date} {time}</div>
        </>
    );
}

function Record({ record }) {
    return (
        <>
            <div className="flex items-center justify-start border-l border-l-slate-900 pl-6 py-1 pb-auto max-w-96" style={{wordBreak: 'break-word'}}>{record}</div>
        </>
    )
}

function Circle() {
    return (
        <>
            <div className="absolute w-3.5 h-3.5 bg-slate-900 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </>
    )
}

function Log({ date, time, record }) {
    return (
        <>
            <div className="relative grid grid-cols-2 grid-rows-1 min-h-12 text-lg font-semibold text-slate-700">
                <DateAndTime date={date} time={time} />
                <Circle />
                <Record record={record} />
            </div>
        </>
    );
}

export default Log;