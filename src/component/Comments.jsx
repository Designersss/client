import React, {useState} from 'react';

const Comments = ({text}) => {
    const [like, setLike] = useState(0)
    return (
        <div className='block text-[#000] mt-10'>
            <span>UserName</span>
            <p className='mt-2'>{text}</p>
            <div className='flex items-center mt-2'>
                <div className='flex items-center'>
                    <button onClick={() => setLike(like + 1)}>
                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.16667 8.125L8.5 1C9.16304 1 9.79893 1.25022 10.2678 1.69562C10.7366 2.14102 11 2.74511 11 3.375V6.54167H15.7167C15.9583 6.53907 16.1976 6.5864 16.418 6.68038C16.6384 6.77436 16.8347 6.91275 16.9932 7.08595C17.1518 7.25915 17.2688 7.46302 17.3361 7.68345C17.4035 7.90387 17.4196 8.13557 17.3833 8.3625L16.2333 15.4875C16.1731 15.865 15.9712 16.2092 15.6649 16.4565C15.3586 16.7038 14.9686 16.8376 14.5667 16.8333H5.16667M5.16667 8.125V16.8333M5.16667 8.125H2.66667C2.22464 8.125 1.80072 8.29181 1.48816 8.58875C1.17559 8.88568 1 9.28841 1 9.70833V15.25C1 15.6699 1.17559 16.0727 1.48816 16.3696C1.80072 16.6665 2.22464 16.8333 2.66667 16.8333H5.16667" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <span className='ml-1 text-[#4B4B4B]'>{like}</span>
                </div>
                <button className='ml-7 text-[#4B4B4B]'>Ответить</button>
            </div>
        </div>
    );
};

export default Comments;