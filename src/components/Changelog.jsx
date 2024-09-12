import Log from './Log.jsx'

function Changelog({ children }) {

    return (
        <>
            <div className='mb-auto max-h-2/3 overflow-auto'>
                <Log date={''} record={''} />
                {children}
                <Log date={''} record={''} />
            </div>
        </>
    );
}

export default Changelog;