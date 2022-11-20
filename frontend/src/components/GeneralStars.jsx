import React, { useState, useEffect } from "react";
import useWindowSize from "../hooks/useWindowSize";

// import ufo from "../assets/images/ufo.svg"

function GeneralStars() {
  const [stars, setStars] = useState([]);
  const [width, height] = useWindowSize();

  useEffect(() => {
    const tabTmp = [];
    for (let i = 0; i < 800; i += 1) {
      tabTmp.push({
        id: i,
        left: Math.floor(Math.random() * width),
        top: Math.floor(Math.random() * height),
        size: Math.random() * 3,
        duration: Math.random() * 10 + 10,
      });
    }
    setStars(tabTmp);
  }, [width, height]);

  return (
    <div className="general-background">
      <div className="background">
        <svg
          width="70"
          height="71"
          viewBox="0 0 70 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.75 49C24.75 51.6015 22.4225 53.75 19.5 53.75C16.5775 53.75 14.25 51.6015 14.25 49C14.25 46.3985 16.5775 44.25 19.5 44.25C22.4225 44.25 24.75 46.3985 24.75 49Z"
            fill="#E6E6E6"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M53.75 49C53.75 51.6015 51.4225 53.75 48.5 53.75C45.5775 53.75 43.25 51.6015 43.25 49C43.25 46.3985 45.5775 44.25 48.5 44.25C51.4225 44.25 53.75 46.3985 53.75 49Z"
            fill="#EBEBEB"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M58.75 39C58.75 42.168 56.1753 45.1034 51.8588 47.2617C47.5571 49.4125 41.597 50.75 35 50.75C28.403 50.75 22.4429 49.4125 18.1412 47.2617C13.8247 45.1034 11.25 42.168 11.25 39C11.25 35.832 13.8247 32.8966 18.1412 30.7383C22.4429 28.5875 28.403 27.25 35 27.25C41.597 27.25 47.5571 28.5875 51.8588 30.7383C56.1753 32.8966 58.75 35.832 58.75 39Z"
            fill="#E7E7E7"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M68.5241 35.0797L68.52 35.0993L68.519 35.1192C68.4635 36.2558 67.5607 37.3874 65.8238 38.4508C64.0983 39.5071 61.6132 40.455 58.5389 41.241C52.3938 42.8122 43.9518 43.7226 34.6724 43.5938C25.393 43.465 17.0513 42.3216 11.0677 40.5821C8.07419 39.7118 5.68493 38.6963 4.06479 37.5935C2.43392 36.4834 1.64274 35.3283 1.69821 34.1917L1.6985 34.1917L1.6985 34.1796C1.69849 31.8379 2.62949 30.1433 4.30801 28.9009C6.00317 27.6462 8.47505 26.843 11.5628 26.3446C17.1637 25.4404 24.6746 25.5539 32.9678 25.6793C33.819 25.6921 34.6784 25.7051 35.5448 25.7171C37.5954 25.7456 39.6224 25.7561 41.6032 25.7664C48.621 25.8027 55.0597 25.8361 59.921 26.6546C63.0381 27.1795 65.4602 28.0211 66.965 29.358C68.4487 30.6761 69.0662 32.4987 68.5241 35.0797Z"
            fill="#D300F5"
            stroke="black"
            strokeWidth="0.5"
          />
          <ellipse
            cx="35.5"
            cy="31.5"
            rx="12.5"
            ry="3.5"
            fill="#110707"
            fillOpacity="0.81"
          />
          <rect
            x="32.8953"
            y="30.1577"
            width="3.5"
            height="4.5"
            fill="#D9D9D9"
            stroke="black"
            strokeWidth="0.5"
          />
          <rect
            x="35.8953"
            y="30.1577"
            width="3.5"
            height="4.5"
            fill="#D9D9D9"
            stroke="black"
            strokeWidth="0.5"
          />
          <mask id="path-8-inside-1_748_33" fill="white">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.2117 29.8205C48.2107 29.8402 48.1504 30.1225 47.4936 30.596C46.8898 31.0313 45.9686 31.4873 44.7671 31.8976C42.3739 32.7148 39.0452 33.291 35.3769 33.2401C31.6755 33.1887 28.4292 32.6758 26.1421 31.8751C25.5428 31.6653 25.024 31.4407 24.5869 31.208C26.7261 32.2773 30.8116 33 35.4999 33C42.4034 33 47.9999 31.433 47.9999 29.5C47.9999 27.567 42.4034 26 35.4999 26C28.5963 26 22.9999 27.567 22.9999 29.5C22.9999 29.7882 23.1243 30.0683 23.359 30.3363C23 29.9679 22.8941 29.6574 22.8941 29.4204C22.8941 29.0764 22.7829 28.69 22.6771 28.369C22.5601 28.0141 22.3976 27.5934 22.2136 27.1333C22.1169 26.8915 22.0133 26.6362 21.9044 26.3681C21.5916 25.5978 21.2356 24.7209 20.8761 23.7488C20.861 23.7079 20.8459 23.6669 20.8308 23.6258C25.3846 23.053 30.5075 22.7562 35.9123 22.8102C41.3211 22.8642 46.4163 23.2635 50.9169 23.9276C50.8451 24.0845 50.7733 24.2393 50.7017 24.3921C50.2114 25.437 49.7371 26.3649 49.3365 27.1486L49.3363 27.1489L49.3362 27.1493C49.2423 27.3329 49.1525 27.5085 49.0675 27.6759C48.8471 28.11 48.6522 28.5015 48.5102 28.8217C48.4392 28.982 48.3739 29.1408 48.3238 29.2889C48.2791 29.4211 48.2217 29.6144 48.2117 29.8205ZM51.9309 24.0833C51.3207 25.4344 50.7099 26.6293 50.2221 27.5835L50.222 27.5836C49.6351 28.7317 49.2264 29.5312 49.2116 29.8344C49.1119 31.8762 42.8719 34.3436 35.3281 34.2389C27.7843 34.1342 21.8932 32.1518 21.893 29.4552C21.893 29.0321 21.5082 28.0846 20.9792 26.7817C20.6274 25.9153 20.2118 24.8919 19.8031 23.7611C9.24763 25.2132 1.99438 28.1761 1.83779 31.6638C1.60992 36.7391 16.4962 41.004 35.0871 41.1896C53.6781 41.3753 68.9338 37.4114 69.1617 32.3361C69.3182 28.8493 62.3415 25.7451 51.9309 24.0833Z"
            />
          </mask>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.2117 29.8205C48.2107 29.8402 48.1504 30.1225 47.4936 30.596C46.8898 31.0313 45.9686 31.4873 44.7671 31.8976C42.3739 32.7148 39.0452 33.291 35.3769 33.2401C31.6755 33.1887 28.4292 32.6758 26.1421 31.8751C25.5428 31.6653 25.024 31.4407 24.5869 31.208C26.7261 32.2773 30.8116 33 35.4999 33C42.4034 33 47.9999 31.433 47.9999 29.5C47.9999 27.567 42.4034 26 35.4999 26C28.5963 26 22.9999 27.567 22.9999 29.5C22.9999 29.7882 23.1243 30.0683 23.359 30.3363C23 29.9679 22.8941 29.6574 22.8941 29.4204C22.8941 29.0764 22.7829 28.69 22.6771 28.369C22.5601 28.0141 22.3976 27.5934 22.2136 27.1333C22.1169 26.8915 22.0133 26.6362 21.9044 26.3681C21.5916 25.5978 21.2356 24.7209 20.8761 23.7488C20.861 23.7079 20.8459 23.6669 20.8308 23.6258C25.3846 23.053 30.5075 22.7562 35.9123 22.8102C41.3211 22.8642 46.4163 23.2635 50.9169 23.9276C50.8451 24.0845 50.7733 24.2393 50.7017 24.3921C50.2114 25.437 49.7371 26.3649 49.3365 27.1486L49.3363 27.1489L49.3362 27.1493C49.2423 27.3329 49.1525 27.5085 49.0675 27.6759C48.8471 28.11 48.6522 28.5015 48.5102 28.8217C48.4392 28.982 48.3739 29.1408 48.3238 29.2889C48.2791 29.4211 48.2217 29.6144 48.2117 29.8205ZM51.9309 24.0833C51.3207 25.4344 50.7099 26.6293 50.2221 27.5835L50.222 27.5836C49.6351 28.7317 49.2264 29.5312 49.2116 29.8344C49.1119 31.8762 42.8719 34.3436 35.3281 34.2389C27.7843 34.1342 21.8932 32.1518 21.893 29.4552C21.893 29.0321 21.5082 28.0846 20.9792 26.7817C20.6274 25.9153 20.2118 24.8919 19.8031 23.7611C9.24763 25.2132 1.99438 28.1761 1.83779 31.6638C1.60992 36.7391 16.4962 41.004 35.0871 41.1896C53.6781 41.3753 68.9338 37.4114 69.1617 32.3361C69.3182 28.8493 62.3415 25.7451 51.9309 24.0833Z"
            fill="#A3A3A3"
          />
          <path
            d="M47.4936 30.5961L47.786 31.0017L47.786 31.0017L47.4936 30.5961ZM48.2117 29.8206L47.7123 29.7962L47.7123 29.7963L48.2117 29.8206ZM44.7671 31.8977L44.6055 31.4245L44.6055 31.4245L44.7671 31.8977ZM35.3769 33.2401L35.3838 32.7402L35.3838 32.7402L35.3769 33.2401ZM26.1421 31.8752L25.9769 32.3471L25.9769 32.3471L26.1421 31.8752ZM24.5869 31.2081L24.8104 30.7608L24.3519 31.6494L24.5869 31.2081ZM23.359 30.3364L23.0009 30.6853L23.7352 30.007L23.359 30.3364ZM22.8941 29.4205L22.3941 29.4205L22.3941 29.4205L22.8941 29.4205ZM22.6771 28.3691L23.152 28.2125L23.152 28.2125L22.6771 28.3691ZM22.2136 27.1333L21.7494 27.319L21.7494 27.319L22.2136 27.1333ZM21.9044 26.3681L22.3677 26.18L22.3677 26.18L21.9044 26.3681ZM20.8761 23.7488L20.4071 23.9222L20.4071 23.9222L20.8761 23.7488ZM20.8308 23.6259L20.7684 23.1298L20.145 23.2082L20.3614 23.7981L20.8308 23.6259ZM35.9123 22.8103L35.9073 23.3102L35.9123 22.8103ZM50.9169 23.9276L51.3716 24.1357L51.6486 23.5302L50.9899 23.433L50.9169 23.9276ZM50.7017 24.3921L51.1543 24.6045L51.1543 24.6045L50.7017 24.3921ZM49.3365 27.1487L48.8912 26.9211L48.888 26.9276L49.3365 27.1487ZM49.3363 27.149L49.7829 27.374L49.7848 27.37L49.3363 27.149ZM49.3361 27.1493L49.7814 27.3769L49.7827 27.3743L49.3361 27.1493ZM49.0675 27.676L49.5133 27.9023L49.5133 27.9023L49.0675 27.676ZM48.5102 28.8217L48.0532 28.619L48.0532 28.619L48.5102 28.8217ZM48.3238 29.289L48.7974 29.4492L48.7974 29.4492L48.3238 29.289ZM50.2221 27.5835L49.7769 27.3559L49.7735 27.3625L49.7703 27.3693L50.2221 27.5835ZM51.9309 24.0833L52.0097 23.5896L51.6325 23.5294L51.4752 23.8775L51.9309 24.0833ZM50.222 27.5836L50.6672 27.8112L50.6706 27.8046L50.6738 27.7979L50.222 27.5836ZM49.2116 29.8345L48.7122 29.8101L48.7122 29.8101L49.2116 29.8345ZM35.3281 34.2389L35.3351 33.739L35.3281 34.2389ZM21.893 29.4553L21.393 29.4553L21.393 29.4553L21.893 29.4553ZM20.9792 26.7818L20.5159 26.9699L20.5159 26.9699L20.9792 26.7818ZM19.8031 23.7611L20.2734 23.5912L20.1358 23.2107L19.735 23.2658L19.8031 23.7611ZM1.83778 31.6639L1.33828 31.6414L1.83778 31.6639ZM35.0871 41.1897L35.0821 41.6897L35.0821 41.6897L35.0871 41.1897ZM69.1617 32.3361L69.6612 32.3585L69.6612 32.3585L69.1617 32.3361ZM47.786 31.0017C48.1453 30.7426 48.3658 30.5186 48.5013 30.3345C48.5693 30.242 48.6169 30.1582 48.6494 30.0841C48.6748 30.026 48.7065 29.9393 48.7111 29.8449L47.7123 29.7963C47.715 29.7409 47.7265 29.7037 47.7269 29.7021C47.7305 29.6895 47.7333 29.6831 47.7335 29.6828C47.7339 29.6819 47.7251 29.702 47.6959 29.7418C47.6368 29.8221 47.4987 29.976 47.2012 30.1905L47.786 31.0017ZM44.9286 32.3709C46.1574 31.9512 47.1283 31.4758 47.786 31.0017L47.2012 30.1905C46.6512 30.587 45.7797 31.0235 44.6055 31.4245L44.9286 32.3709ZM35.3699 33.7401C39.0901 33.7917 42.4763 33.2083 44.9286 32.3709L44.6055 31.4245C42.2715 32.2215 39.0003 32.7904 35.3838 32.7402L35.3699 33.7401ZM25.9769 32.3471C28.3301 33.1709 31.6336 33.6882 35.3699 33.7401L35.3838 32.7402C31.7174 32.6893 28.5283 32.1808 26.3073 31.4032L25.9769 32.3471ZM24.3519 31.6494C24.8154 31.8962 25.3582 32.1305 25.9769 32.3471L26.3073 31.4032C25.7274 31.2002 25.2326 30.9854 24.8219 30.7667L24.3519 31.6494ZM24.3634 31.6553C26.6066 32.7766 30.7851 33.5 35.4999 33.5V32.5C30.838 32.5 26.8456 31.7781 24.8104 30.7608L24.3634 31.6553ZM35.4999 33.5C38.9838 33.5 42.1563 33.1052 44.4735 32.4564C45.6286 32.1329 46.5997 31.7386 47.2936 31.2793C47.9679 30.8329 48.4999 30.2418 48.4999 29.5H47.4999C47.4999 29.7248 47.3323 30.0544 46.7416 30.4455C46.1704 30.8236 45.3108 31.1835 44.2039 31.4934C41.997 32.1114 38.9195 32.5 35.4999 32.5V33.5ZM48.4999 29.5C48.4999 28.7583 47.9679 28.1672 47.2936 27.7207C46.5997 27.2614 45.6286 26.8671 44.4735 26.5437C42.1563 25.8949 38.9838 25.5 35.4999 25.5V26.5C38.9195 26.5 41.997 26.8887 44.2039 27.5066C45.3108 27.8166 46.1704 28.1765 46.7416 28.5546C47.3323 28.9456 47.4999 29.2753 47.4999 29.5H48.4999ZM35.4999 25.5C32.0159 25.5 28.8434 25.8949 26.5262 26.5437C25.3711 26.8671 24.4001 27.2614 23.7062 27.7207C23.0318 28.1672 22.4999 28.7583 22.4999 29.5H23.4999C23.4999 29.2753 23.6675 28.9456 24.2582 28.5546C24.8294 28.1765 25.6889 27.8166 26.7959 27.5066C29.0028 26.8887 32.0803 26.5 35.4999 26.5V25.5ZM22.4999 29.5C22.4999 29.9421 22.6929 30.3346 22.9828 30.6658L23.7352 30.007C23.5558 29.8021 23.4999 29.6344 23.4999 29.5H22.4999ZM22.3941 29.4205C22.3941 29.8211 22.5772 30.2505 23.0009 30.6853L23.7171 29.9874C23.4228 29.6854 23.3941 29.4937 23.3941 29.4204L22.3941 29.4205ZM22.2023 28.5256C22.308 28.8463 22.3941 29.1647 22.3941 29.4205L23.3941 29.4204C23.3941 28.9882 23.2579 28.5338 23.152 28.2125L22.2023 28.5256ZM21.7494 27.319C21.933 27.7782 22.0905 28.1866 22.2023 28.5256L23.152 28.2125C23.0297 27.8417 22.8622 27.4086 22.6779 26.9476L21.7494 27.319ZM21.4411 26.5562C21.5501 26.8247 21.6533 27.0786 21.7494 27.319L22.6779 26.9476C22.5806 26.7044 22.4764 26.4479 22.3677 26.18L21.4411 26.5562ZM20.4071 23.9222C20.7697 24.9027 21.1286 25.7865 21.4411 26.5562L22.3677 26.18C22.0547 25.4093 21.7014 24.5392 21.3451 23.5754L20.4071 23.9222ZM20.3614 23.7981C20.3767 23.8396 20.3919 23.881 20.4071 23.9222L21.3451 23.5754C21.3301 23.535 21.3152 23.4944 21.3002 23.4536L20.3614 23.7981ZM35.9173 22.3103C30.4917 22.2561 25.3462 22.5539 20.7684 23.1298L20.8932 24.122C25.4229 23.5522 30.5233 23.2565 35.9073 23.3102L35.9173 22.3103ZM50.9899 23.433C46.4648 22.7653 41.3468 22.3645 35.9173 22.3103L35.9073 23.3102C41.2953 23.364 46.3677 23.7618 50.8439 24.4223L50.9899 23.433ZM51.1543 24.6045C51.2266 24.4504 51.2991 24.2941 51.3716 24.1357L50.4622 23.7196C50.3912 23.875 50.32 24.0284 50.249 24.1798L51.1543 24.6045ZM49.7817 27.3762C50.1821 26.5929 50.66 25.658 51.1543 24.6045L50.249 24.1798C49.7628 25.2161 49.2921 26.137 48.8913 26.9211L49.7817 27.3762ZM49.7848 27.37L49.785 27.3697L48.888 26.9276L48.8879 26.9279L49.7848 27.37ZM49.7827 27.3743L49.7828 27.374L48.8898 26.924L48.8896 26.9243L49.7827 27.3743ZM49.5133 27.9023C49.598 27.7357 49.6874 27.5606 49.7813 27.3769L48.8909 26.9217C48.7972 27.1052 48.7071 27.2815 48.6217 27.4496L49.5133 27.9023ZM48.9673 29.0245C49.1034 28.7177 49.2927 28.3369 49.5133 27.9023L48.6217 27.4496C48.4015 27.8833 48.2011 28.2854 48.0532 28.619L48.9673 29.0245ZM48.7974 29.4492C48.8407 29.3213 48.8992 29.1779 48.9673 29.0244L48.0532 28.619C47.9791 28.7861 47.9071 28.9604 47.8502 29.1288L48.7974 29.4492ZM48.7111 29.845C48.7177 29.7091 48.7571 29.5685 48.7974 29.4492L47.8502 29.1288C47.8011 29.2739 47.7258 29.5197 47.7123 29.7962L48.7111 29.845ZM50.6673 27.8111C51.1548 26.8574 51.7708 25.6525 52.3866 24.2891L51.4752 23.8775C50.8706 25.2163 50.2649 26.4014 49.7769 27.3559L50.6673 27.8111ZM50.6738 27.7979L50.6738 27.7978L49.7703 27.3693L49.7702 27.3694L50.6738 27.7979ZM49.711 29.8589C49.7108 29.863 49.716 29.8159 49.7628 29.688C49.8053 29.5718 49.8694 29.4221 49.9556 29.2368C50.1282 28.8659 50.3721 28.3886 50.6672 27.8112L49.7768 27.3561C49.485 27.9268 49.2311 28.4233 49.0489 28.815C48.9577 29.0109 48.8802 29.1898 48.8236 29.3446C48.7712 29.4877 48.7198 29.6543 48.7122 29.8101L49.711 29.8589ZM35.3212 34.7389C39.1449 34.7919 42.6484 34.194 45.223 33.3148C46.508 32.876 47.5828 32.36 48.3535 31.8044C49.0971 31.2683 49.6743 30.6098 49.711 29.8589L48.7122 29.8101C48.699 30.08 48.4588 30.4957 47.7687 30.9932C47.1056 31.4712 46.1302 31.9483 44.8998 32.3685C42.4435 33.2072 39.0551 33.7906 35.3351 33.739L35.3212 34.7389ZM21.393 29.4553C21.3931 30.3291 21.8736 31.0859 22.6086 31.7074C23.343 32.3284 24.3777 32.8573 25.6165 33.291C28.0984 34.1599 31.5143 34.686 35.3212 34.7389L35.3351 33.739C31.5981 33.6871 28.2965 33.1697 25.9469 32.3471C24.7699 31.9351 23.8603 31.4562 23.2543 30.9438C22.649 30.432 22.393 29.9298 22.393 29.4553L21.393 29.4553ZM20.5159 26.9699C20.7819 27.6249 21.0058 28.1765 21.1638 28.6172C21.3308 29.0829 21.393 29.3446 21.393 29.4553L22.393 29.4553C22.393 29.1428 22.2628 28.7193 22.1051 28.2796C21.9385 27.8151 21.7055 27.2415 21.4424 26.5936L20.5159 26.9699ZM19.3329 23.9311C19.7453 25.0722 20.1643 26.1041 20.5159 26.9699L21.4424 26.5936C21.0904 25.7267 20.6783 24.7117 20.2734 23.5912L19.3329 23.9311ZM19.735 23.2658C14.434 23.9951 9.93278 25.107 6.72301 26.4899C5.11945 27.1808 3.81305 27.95 2.88957 28.7925C1.96657 29.6346 1.38553 30.5892 1.33828 31.6414L2.33728 31.6863C2.36833 30.9947 2.75266 30.271 3.56355 29.5312C4.37395 28.7919 5.56995 28.0756 7.1187 27.4083C10.2136 26.0749 14.6167 24.9793 19.8713 24.2565L19.735 23.2658ZM1.33828 31.6414C1.26921 33.1798 2.34722 34.5373 4.04277 35.6817C5.75877 36.84 8.23571 37.8724 11.2677 38.7411C17.3393 40.4806 25.7555 41.5965 35.0821 41.6897L35.0921 40.6897C25.8278 40.5972 17.5054 39.4879 11.5431 37.7797C8.55812 36.9246 6.19429 35.9275 4.60224 34.8529C2.98974 33.7645 2.29241 32.6856 2.33728 31.6863L1.33828 31.6414ZM35.0821 41.6897C44.4091 41.7828 52.9167 40.8357 59.1363 39.2197C62.2428 38.4125 64.8057 37.4316 66.6185 36.3121C68.4074 35.2073 69.5926 33.8858 69.6612 32.3585L68.6622 32.3137C68.6168 33.324 67.8095 34.4013 66.093 35.4613C64.4002 36.5067 61.9446 37.4568 58.8848 38.2518C52.7719 39.8401 44.3561 40.7822 35.0921 40.6897L35.0821 41.6897ZM69.6612 32.3585C69.7086 31.3019 69.2101 30.3265 68.3557 29.4586C67.5034 28.5928 66.2625 27.7958 64.7213 27.0727C61.6361 25.6253 57.2382 24.4242 52.0097 23.5896L51.8521 24.5771C57.0343 25.4043 61.33 26.5863 64.2966 27.9781C65.7814 28.6746 66.9059 29.4113 67.6431 30.1601C68.3781 30.9068 68.693 31.6269 68.6622 32.3137L69.6612 32.3585Z"
            fill="black"
            mask="url(#path-8-inside-1_748_33)"
          />
          <path d="M35.5 34V41" stroke="black" strokeWidth="0.5" />
          <path
            d="M43.4277 21.374C41.8746 23.6249 40.9843 25.5254 40.2821 27.0245C40.0454 27.5298 39.83 27.9894 39.6179 28.4016C39.1936 29.2257 38.7878 29.8506 38.2589 30.3019C37.7426 30.7423 37.0915 31.0318 36.1496 31.1547C34.6849 30.9075 33.8387 30.5801 33.2995 30.1551C32.7645 29.7335 32.5026 29.1934 32.2575 28.4388C32.183 28.2092 32.1108 27.9626 32.0335 27.6981C31.5978 26.2087 30.9963 24.1519 28.8562 21.3646C27.3296 18.4378 27.3361 15.1558 28.6271 12.5484C29.9161 9.94493 32.4923 7.99943 36.1447 7.75057C39.8134 7.99977 42.4362 9.70884 43.7445 12.1795C45.0545 14.6534 45.0702 17.9362 43.4277 21.374Z"
            fill="#44F160"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M22.4004 29.599L22.3995 29.5781L22.3969 29.5574C22.3651 29.3085 22.2682 28.9763 22.1442 28.6042C22.0169 28.222 21.8475 27.759 21.6538 27.235C21.6192 27.1416 21.5839 27.0462 21.5478 26.9487C21.1769 25.9474 20.7272 24.7329 20.2848 23.3758C19.3121 20.3915 18.3906 16.7603 18.4349 13.2896C18.479 9.82669 19.4811 6.58503 22.2911 4.27396C25.1179 1.94905 29.8738 0.481482 37.6113 0.810689C44.8618 1.11918 49.1445 2.92419 51.5355 5.41435C53.9165 7.89416 54.503 11.1398 54.1586 14.5339C53.8135 17.9348 52.5375 21.429 51.2628 24.3174C50.6434 25.7208 50.0283 26.9725 49.5249 27.997L49.4844 28.0794C49.0112 29.0425 48.6181 29.8428 48.4483 30.3442C48.2416 30.6277 47.8354 31.0028 47.1979 31.4116C46.528 31.8412 45.6335 32.2882 44.5228 32.6901C42.3027 33.4936 39.2392 34.1098 35.4251 34.0568C31.6002 34.0037 28.3095 33.3719 25.9787 32.4756C24.8116 32.0268 23.9057 31.5195 23.2946 31.002C22.6745 30.477 22.417 29.994 22.4004 29.599Z"
            stroke="#323232"
          />
          <path
            d="M26.7523 37.0925C26.7034 38.0933 25.8923 38.8738 24.9635 38.861C24.0346 38.8481 23.3007 38.046 23.3496 37.0453C23.3984 36.0445 24.2095 35.2639 25.1384 35.2768C26.0672 35.2897 26.8011 36.0917 26.7523 37.0925Z"
            fill="#FFF500"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M49.7523 37.0925C49.7034 38.0933 48.8923 38.8738 47.9635 38.861C47.0346 38.8481 46.3007 38.046 46.3496 37.0453C46.3984 36.0445 47.2095 35.2639 48.1384 35.2768C49.0672 35.2897 49.8011 36.0917 49.7523 37.0925Z"
            fill="#FFF500"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M10.7523 31.0925C10.7034 32.0933 9.89227 32.8738 8.96345 32.861C8.03463 32.8481 7.30072 32.046 7.34956 31.0453C7.39839 30.0445 8.20954 29.2639 9.13836 29.2768C10.0672 29.2897 10.8011 30.0917 10.7523 31.0925Z"
            fill="#FFF500"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M63.7523 32.0925C63.7034 33.0933 62.8923 33.8738 61.9635 33.861C61.0346 33.8481 60.3007 33.046 60.3496 32.0453C60.3984 31.0445 61.2095 30.2639 62.1384 30.2768C63.0672 30.2897 63.8011 31.0917 63.7523 32.0925Z"
            fill="#FFF500"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M40.8953 27.5C40.8953 28.1798 40.7815 28.472 40.666 28.6011C40.5633 28.7161 40.4156 28.75 40.1453 28.75C39.8749 28.75 39.7273 28.7161 39.6245 28.6011C39.509 28.472 39.3953 28.1798 39.3953 27.5C39.3953 26.881 39.4231 26.4254 39.4713 26.0902C39.5199 25.7523 39.5871 25.5541 39.6545 25.4377C39.7159 25.3317 39.7757 25.2955 39.8336 25.2766C39.9086 25.2521 39.9983 25.2499 40.1453 25.2499C40.2922 25.2499 40.382 25.2521 40.4569 25.2766C40.5148 25.2955 40.5746 25.3317 40.636 25.4377C40.7034 25.5541 40.7706 25.7523 40.8192 26.0902C40.8675 26.4254 40.8953 26.881 40.8953 27.5Z"
            fill="#DCDADA"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M38.7168 28.3542C38.658 28.7353 38.5979 28.9812 38.4955 29.135C38.4492 29.2046 38.3957 29.2522 38.3277 29.2847C38.2571 29.3184 38.1572 29.3423 38.0103 29.3423C37.8634 29.3423 37.7641 29.3184 37.6938 29.2848C37.626 29.2523 37.572 29.2045 37.5244 29.1338C37.4187 28.977 37.3548 28.7294 37.2807 28.345C37.1965 27.9086 37.2946 27.5223 37.4641 27.2491C37.6412 26.9637 37.8653 26.8423 38.0103 26.8423C38.1874 26.8423 38.3979 26.9344 38.5503 27.1624C38.7028 27.3907 38.8064 27.7729 38.7168 28.3542Z"
            fill="#9CEB9B"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M43.4001 29.9509C43.2494 30.7043 43.0893 31.2422 42.7813 31.5991C42.4896 31.9372 42.0293 32.1499 41.1732 32.1499C40.3182 32.1499 39.8612 31.9377 39.5643 31.5979C39.2493 31.2375 39.0772 30.697 38.8878 29.9393C38.659 29.0241 38.9215 28.2032 39.4013 27.6066C39.8868 27.0028 40.5769 26.6499 41.1732 26.6499C41.7981 26.6499 42.4681 26.9008 42.923 27.4261C43.372 27.9445 43.638 28.7617 43.4001 29.9509Z"
            fill="#9CEB9B"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M31.489 27.6001C31.489 28.2799 31.6028 28.5721 31.7183 28.7012C31.821 28.8161 31.9687 28.8501 32.239 28.8501C32.5094 28.8501 32.657 28.8161 32.7597 28.7012C32.8752 28.5721 32.989 28.2799 32.989 27.6001C32.989 26.9811 32.9612 26.5255 32.913 26.1903C32.8643 25.8524 32.7972 25.6542 32.7298 25.5378C32.6684 25.4318 32.6086 25.3956 32.5507 25.3767C32.4757 25.3522 32.386 25.35 32.239 25.35C32.092 25.35 32.0023 25.3522 31.9274 25.3767C31.8695 25.3956 31.8096 25.4318 31.7483 25.5378C31.6809 25.6542 31.6137 25.8524 31.565 26.1903C31.5168 26.5255 31.489 26.9811 31.489 27.6001Z"
            fill="#DCDADA"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M33.0223 29.362C33.0811 29.7431 33.1411 29.989 33.2435 30.1428C33.2899 30.2124 33.3433 30.26 33.4113 30.2925C33.4819 30.3262 33.5818 30.3501 33.7287 30.3501C33.8756 30.3501 33.9749 30.3262 34.0452 30.2926C34.113 30.2601 34.167 30.2123 34.2146 30.1416C34.3203 29.9848 34.3842 29.7372 34.4583 29.3528C34.5425 28.9164 34.4444 28.5301 34.2749 28.2569C34.0979 27.9715 33.8737 27.8501 33.7287 27.8501C33.5516 27.8501 33.3411 27.9422 33.1887 28.1702C33.0362 28.3985 32.9326 28.7807 33.0223 29.362Z"
            fill="#9CEB9B"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M28.9842 30.051C29.1349 30.8044 29.295 31.3423 29.603 31.6992C29.8946 32.0373 30.355 32.25 31.2111 32.25C32.066 32.25 32.5231 32.0378 32.82 31.698C33.135 31.3376 33.3071 30.7971 33.4965 30.0394C33.7253 29.1242 33.4628 28.3033 32.983 27.7067C32.4975 27.1029 31.8074 26.75 31.2111 26.75C30.5862 26.75 29.9161 27.0009 29.4612 27.5262C29.0123 28.0446 28.7463 28.8618 28.9842 30.051Z"
            fill="#9CEB9B"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M38.2051 18.4835C37.5031 19.6994 37.1921 21.6285 38.2053 22.2135C39.2186 22.7985 41.1725 21.8179 41.8745 20.602C42.5765 19.3861 42.6082 17.7142 41.5949 17.1291C40.5816 16.5441 38.9071 17.2676 38.2051 18.4835Z"
            fill="black"
          />
          <path
            d="M39.5537 19.109C39.775 19.7572 39.7894 19.9229 40.6034 19.6872C41.0529 19.557 41.6159 18.7278 41.4857 18.2783C41.3555 17.8288 40.8854 17.5699 40.4359 17.7001C39.9863 17.8303 39.4168 18.708 39.5537 19.109Z"
            fill="#D9D9D9"
          />
          <path
            d="M38.8124 20.9224C38.9465 21.3153 38.9552 21.4158 39.4486 21.2729C39.7211 21.194 40.0624 20.6914 39.9835 20.4189C39.9045 20.1464 39.6196 19.9895 39.3471 20.0684C39.0746 20.1474 38.7294 20.6794 38.8124 20.9224Z"
            fill="#D9D9D9"
          />
          <path
            d="M34.3295 18.4609C35.0251 19.6657 35.3333 21.5772 34.3292 22.1569C33.3252 22.7366 31.3891 21.7649 30.6935 20.5601C29.9979 19.3552 29.9665 17.6985 30.9706 17.1189C31.9746 16.5392 33.6338 17.256 34.3295 18.4609Z"
            fill="black"
          />
          <path
            d="M32.9934 19.0806C32.7741 19.7229 32.7598 19.8871 31.9532 19.6536C31.5078 19.5246 30.9499 18.7029 31.0789 18.2575C31.2079 17.812 31.6738 17.5555 32.1192 17.6845C32.5646 17.8135 33.129 18.6833 32.9934 19.0806Z"
            fill="#D9D9D9"
          />
          <path
            d="M33.7278 20.8777C33.5949 21.267 33.5863 21.3666 33.0974 21.225C32.8274 21.1468 32.4892 20.6488 32.5674 20.3788C32.6456 20.1088 32.928 19.9533 33.198 20.0315C33.468 20.1097 33.8101 20.6369 33.7278 20.8777Z"
            fill="#D9D9D9"
          />
          <path
            d="M38 23.2606C38 24.2213 37.1046 25 36 25C34.8954 25 34 24.2213 34 23.2606C34 22.3 34.8954 24.3042 36 24.3042C37.1046 24.3042 38 22.3 38 23.2606Z"
            fill="black"
          />
          <path
            d="M56 44C47.0545 50 38.5 50 35.5 50C32 50 24.3182 50 15 44C23.9455 46.8236 28.0455 47.1768 35.5 47.1768C41.4636 47.1768 47.8 46.8239 56 44Z"
            fill="#C496C5"
          />
          <path
            d="M34.5 61.8973C39.1169 61.8973 44.0069 61.6559 50.104 59.8603C43.1917 63.7496 36.8505 63.75 34.5 63.75H34.4979C31.7494 63.75 25.9819 63.75 18.885 59.8233C25.2421 61.6509 28.6851 61.8973 34.5 61.8973Z"
            fill="white"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M35 68.4268C40.6426 68.4268 46.6228 68.1262 54.1277 65.86C45.6753 70.7496 37.8657 70.75 35 70.75H34.9979C31.6477 70.75 24.5592 70.75 15.8576 65.8188C23.7503 68.1208 27.8997 68.4268 35 68.4268Z"
            fill="white"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M34.5 56.3679C37.9555 56.3679 41.612 56.1862 46.1237 54.8647C40.9554 57.7498 36.2663 57.75 34.5 57.75H34.4975C32.4317 57.75 28.1546 57.75 22.8716 54.8342C27.5079 56.1817 30.1434 56.3679 34.5 56.3679Z"
            fill="white"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M34.5 52.1589C36.7498 52.1589 39.1315 52.0617 42.1058 51.3363C38.7375 52.8997 35.6451 52.9 34.5 52.9H34.4998C33.1609 52.9 30.3483 52.9 26.8896 51.3219C29.9969 52.0599 31.6677 52.1589 34.5 52.1589Z"
            fill="white"
            stroke="black"
            strokeWidth="0.2"
          />
          <path
            d="M22.8113 31.8314C22.8113 31.8314 24.7327 30.4356 16.0641 33.3417C7.3956 36.2477 8.02118 37.0049 8.02118 37.0049"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M21.9899 48.9613C21.9899 48.9613 23.52 48.9021 25.9947 47.0193C29.0939 44.6612 29.1508 43.3945 29.1508 43.3945"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M48.0091 48.9651C48.0091 48.9651 46.5138 48.8821 44.0612 47.1261C40.9898 44.9269 40.91 43.7762 40.91 43.7762"
            stroke="black"
            strokeWidth="0.5"
          />
          <path
            d="M47.193 31.8618C47.193 31.8618 45.3739 30.2842 53.4502 33.7486C61.5264 37.213 60.9809 38.0045 60.9809 38.0045"
            stroke="black"
            strokeWidth="0.5"
          />
          <ellipse
            cx="47.6388"
            cy="9.58265"
            rx="2.5"
            ry="5"
            transform="rotate(-29.5148 47.6388 9.58265)"
            fill="#FFFCFC"
          />
          <ellipse
            cx="49.9525"
            cy="17.8696"
            rx="1.30849"
            ry="2.61698"
            transform="rotate(-1.27919 49.9525 17.8696)"
            fill="white"
          />
        </svg>
        {stars.map((star) => {
          return (
            <div
              key={star.id}
              className="stars"
              style={{
                position: "absolute",
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
                animationDuration: `${star.duration}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default GeneralStars;
