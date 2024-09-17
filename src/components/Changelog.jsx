import Log from './Log.jsx'

function Changelog({ children }) {

    return (
        <>
            <div className='mb-auto max-h-2/3 overflow-auto'>
                <Log date={''} time={''} record={''} />
                {children}
                <Log date={''} time={''} record={''} />
            </div>
        </>
    );
}

export default Changelog;