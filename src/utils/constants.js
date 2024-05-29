export const LOGO =
    "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
    "https://occ-0-3679-77.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABStlS0MPUGcy6Ovyeia-3ddnnXNb2Lri4P4H4QCFuR_yaGs0umyqHUDOZcOBKF8MFUGHX07txAW70z7wq_S9AKGQ_MixrLQ.png?r=a4b";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
    },
};

export const IMG_CDN_URL =
    "https://image.tmdb.org/t/p/w500";

export const BG_URL =
    "https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/9a12affd-2dc5-4854-90f7-04e28b66f417/US-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [{ identifier: "en", name: "English" },
{ identifier: "hindi", name: "Hindi" },
{ identifier: "spanish", name: "Spanish" }
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
