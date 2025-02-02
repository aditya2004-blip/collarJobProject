import React from "react";


export const PopupLogout = ({isOnline}) => {
  function redirectToLogin() {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    window.location.href = "/login";
  }
  return (
    <div className="popuplogout">
      <div style={{marginTop:'18px',maxWidth:'600px'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="184"
          height="130"
          viewBox="0 0 184 130"
          fill="none"
        >
          <ellipse cx="92" cy="113.75" rx="92" ry="16.25" fill="#D8F1F5" />
          <rect
            x="28.3047"
            y="16.7744"
            width="125.806"
            height="94.3548"
            rx="6"
            fill="white"
            stroke="#1296B0"
            stroke-width="2"
          />
          <path
            d="M132.62 41.9355H153.065V110.081H114.273C114.273 110.081 128.952 92.7823 133.669 78.1049C138.385 63.4275 132.62 41.9355 132.62 41.9355Z"
            fill="#EFFAFC"
          />
          <rect
            x="28.3047"
            y="16.7744"
            width="125.806"
            height="94.3548"
            rx="6"
            stroke="#1296B0"
            stroke-width="2"
          />
          <path
            d="M28.3047 22.7744C28.3047 19.4607 30.991 16.7744 34.3047 16.7744H148.111C151.425 16.7744 154.111 19.4607 154.111 22.7744V41.9357H28.3047V22.7744Z"
            fill="#D8F1F5"
            stroke="#1296B0"
            stroke-width="2"
          />
          <path
            d="M134.342 20.8413L135.679 18.1986L136.97 16.1032L140.562 13.1009L147.009 9.23877L155.938 8.89525L165.785 10.8349L172.638 15.2764L176.224 18.889L178.52 24.5969L179.113 30.7114L176.944 36.5911L173.305 40.1406L169.759 42.5956L167.457 43.5024L160.551 46.223L153.832 46.7543L146.746 45.0494L142.694 46.9101L142.235 45.7685L141.915 42.9849L140.445 40.6548L137.87 38.2308L135.847 35.8537L134.975 33.0232L133.551 30.1458L133.232 27.3622L133.511 24.0783L134.342 20.8413Z"
            fill="white"
          />
          <circle cx="39.839" cy="29.3546" r="2.09677" fill="#1296B0" />
          <circle cx="47.1788" cy="29.3546" r="2.09677" fill="#1296B0" />
          <circle cx="54.5147" cy="29.3546" r="2.09677" fill="#1296B0" />
          <circle cx="70.2404" cy="66.0485" r="4.19355" fill="#1296B0" />
          <circle cx="112.178" cy="66.0485" r="4.19355" fill="#1296B0" />
          <path
            d="M19.6527 18.2275C19.652 17.0367 19.8861 15.8573 20.3415 14.757C20.7969 13.6567 21.4647 12.6569 22.3068 11.8148C23.1489 10.9727 24.1487 10.3049 25.249 9.8495C26.3493 9.39408 27.5286 9.16001 28.7195 9.16067M13.6081 18.2275C13.6087 14.2227 15.1999 10.3822 18.0317 7.55036C20.8635 4.71856 24.7041 3.1274 28.7088 3.12679"
            stroke="#1296B0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M99.0605 89.3412C97.0461 91.355 94.3142 92.4863 91.4658 92.4863C88.6174 92.4863 85.8855 91.355 83.8711 89.3412"
            stroke="#1296B0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M145.666 18.0558L145.157 24.0358L151.137 24.5442"
            stroke="#1296B0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M166.235 35.8662L166.743 29.8862L160.763 29.3778"
            stroke="#1296B0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M164.667 24.6905C164.283 23.2191 163.532 21.869 162.485 20.7661C161.438 19.6632 160.129 18.8435 158.68 18.3834C157.23 17.9234 155.688 17.8381 154.196 18.1353C152.705 18.4326 151.313 19.1029 150.151 20.0835L145.157 24.0358M166.745 29.8865L161.751 33.8389C160.589 34.8195 159.197 35.4897 157.706 35.787C156.214 36.0843 154.672 35.999 153.222 35.5389C151.773 35.0789 150.464 34.2592 149.417 33.1563C148.37 32.0534 147.619 30.7033 147.235 29.2318"
            stroke="#1296B0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M180.072 31.2219C179.704 32.2951 179.401 33.4007 178.954 34.4384C176.564 39.9998 172.308 43.4989 166.916 45.6182C160.885 47.9888 154.74 48.106 148.581 46.2513C147.206 45.8367 146.308 46.6132 145.383 47.2991C143.988 48.331 142.469 48.9914 140.797 49.2892C139.578 49.5063 138.347 49.6322 136.896 49.4013C139.199 48.022 139.948 45.8324 140.507 43.5135C140.683 42.7851 140.552 42.3302 139.924 41.8311C135.312 38.1736 132.344 33.5225 131.957 27.3755C131.951 27.2886 131.884 27.206 131.846 27.1221C131.954 25.8501 132.062 24.58 132.17 23.308C132.366 23.1556 132.355 22.9164 132.406 22.7057C132.953 20.4529 133.871 18.3757 135.232 16.5168C138.912 11.4935 143.936 8.7819 149.813 7.52384C151.79 7.1003 153.802 7.07353 155.799 6.87642C157.159 6.99201 158.52 7.10774 159.88 7.22333C160.113 7.29881 160.341 7.40085 160.58 7.44614C164.594 8.18878 168.323 9.66023 171.636 12.1087C176.092 15.4033 179.194 19.6432 180.115 25.3554C180.225 26.037 180.15 26.7471 180.396 27.4077C180.288 28.6797 180.18 29.9499 180.072 31.2219ZM142.635 46.374C144.154 45.4025 145.447 44.5903 146.722 43.7498C147.088 43.5082 147.389 43.4339 147.833 43.5984C151.287 44.8774 154.872 45.3666 158.532 45.1264C163.946 44.7722 168.876 43.0457 172.94 39.2038C176.445 35.8905 178.322 31.805 177.998 26.8542C177.694 22.2087 175.527 18.4882 172.176 15.5122C166.654 10.6075 160.119 8.82264 152.924 9.42303C147.774 9.85154 143.134 11.6756 139.265 15.3134C133.665 20.5825 132.607 28.3394 136.594 34.8424C138.051 37.2194 139.948 39.1709 142.234 40.6964C142.909 41.1476 143.103 41.6173 142.993 42.4109C142.819 43.637 142.762 44.8769 142.635 46.374Z"
            fill="#1296B0"
          />
        </svg>
      </div>
      {isOnline ? <p style={{fontSize:'25px',fontWeight:500,fontFamily:"Poppins",marginTop:'8px'}}>Your session has expired</p>: <p style={{fontSize:'25px',fontWeight:500,fontFamily:"Poppins",marginTop:'8px'}}>Network Error</p>} 
      <div>
       {isOnline ?  <p style={{fontSize:'14px',fontWeight:400,fontFamily:"Poppins"}}>Please refresh the page. Don’t worry</p>: <p style={{fontSize:'14px',fontWeight:400,fontFamily:"Poppins"}}>Please Check Internet Connection</p>}
        <p style={{fontSize:'14px',fontWeight:400,fontFamily:"Poppins"}}>we kept all of your filters and breakdowns in place.</p>
      </div>
      <div style={{marginTop:'24px'}}>
        <button
          className="button primaryButton"
          onClick={redirectToLogin
           
          }
        >
          Refresh
        </button>
      </div>
    </div>
  );
};
