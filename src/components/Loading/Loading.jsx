
import loadingGif from '../../assets/netflix_loading.gif';

const Loading = () => {
    return (
        <div className='global-loading'>
            <img src={loadingGif} alt="loading" />
        </div>
    );
};

export default Loading;