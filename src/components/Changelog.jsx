import Log from './Log.jsx'

function Changelog() {
    return (
        <>
            <div className='mb-auto'>
                <Log date={''} record={''} />
                <Log date={'September 3, 2024'} record={'Announcing Projects on Frontend Roadmap'} />
                <Log date={'August 28, 2024'} record={'Build your learning habits with learning streaks'} />
                <Log date={'August 25, 2024'} record={'Git and GitHub Roadmap'} />
                <Log date={'August 22, 2024'} record={'Submit your project solution and get feedback'} />
                <Log date={'August 15, 2024'} record={'Backend Project Ideas'} />
                <Log date={'August 10, 2024'} record={'Redis roadmap'} />
                <Log date={'August 1, 2024'} record={'Changelog page to help you stay in the loop'} />
                <Log date={''} record={''} />
            </div>
        </>
    );
}

export default Changelog;