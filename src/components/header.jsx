import Button from "./btn";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <svg
            width="84"
            height="85"
            viewBox="0 0 84 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.4589 62.6111L58.7416 65.2641C55.4915 67.5858 51.7406 69.28 47.5664 70.1072C43.7301 70.8674 39.8854 70.8289 36.2491 70.0721L37.3681 66.745C40.4162 67.3178 43.6533 67.3273 46.8865 66.6866C50.4333 65.9838 53.6628 64.5673 56.4589 62.6111ZM14.5977 50.4753L18.0482 49.7916C20.262 56.6392 25.2713 62.0311 31.5048 64.8772L30.4384 68.2184C23.014 64.9322 17.0895 58.5949 14.5977 50.4753ZM70.5508 39.3877C71.2962 47.5529 68.5155 55.39 63.2969 61.1815L61.0091 58.505C65.3148 53.5454 67.6402 46.9503 67.1004 40.0714L70.5508 39.3877ZM53.9996 16.0514C61.1491 19.342 66.8373 25.5009 69.3295 33.37L65.879 34.0537C63.6889 27.4518 58.8967 22.2666 52.9044 19.3726L53.9996 16.0514ZM21.5043 22.0139L23.7874 24.6669C19.0137 29.6691 16.3454 36.5579 16.8751 43.7643L13.4247 44.4481C12.6894 35.9553 15.8129 27.8239 21.5043 22.0139ZM26.2236 18.1249C29.2416 16.1497 32.6642 14.6956 36.4041 13.9545C40.4335 13.1561 44.4372 13.2384 48.1939 14.0965L47.099 17.4188C43.9016 16.7254 40.5102 16.6962 37.084 17.3751C33.9474 17.9967 31.0701 19.167 28.5061 20.7768L26.2236 18.1249Z"
              fill="#71C064"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M58.7408 65.2641L61.3223 68.2834C57.5795 71.0282 53.1866 73.0254 48.3368 73.9864C43.8008 74.8853 39.2948 74.8008 35.0171 73.8457L36.2483 70.072C39.8846 70.8288 43.7293 70.8673 47.5657 70.1071C51.7398 69.28 55.4907 67.5857 58.7408 65.2641ZM10.6882 51.2498L14.5969 50.4753C17.0888 58.5949 23.0132 64.9322 30.4376 68.2183L29.1829 71.9978C20.4662 68.2666 13.5156 60.8052 10.6882 51.2498ZM74.4346 38.6179C75.4673 48.2285 72.1394 57.4764 65.9014 64.196L63.2961 61.1814C68.5147 55.3899 71.2954 47.5528 70.55 39.3876L74.4346 38.6179ZM55.2539 12.2718C63.7004 16.0315 70.4097 23.2904 73.2374 32.5954L69.3287 33.3699C66.8365 25.5008 61.1483 19.3419 53.9988 16.0513L55.2539 12.2718ZM18.9031 19.0239L21.5035 22.0138C15.8121 27.8239 12.6887 35.9553 13.4239 44.448L9.51518 45.2225C8.51673 35.2796 12.1876 25.738 18.9031 19.0239ZM23.6172 15.1103C27.152 12.7072 31.206 10.9549 35.6321 10.0751C40.3612 9.138 45.0501 9.26034 49.4482 10.3168L48.1932 14.0964C44.4364 13.2383 40.4327 13.156 36.4033 13.9544C32.6634 14.6955 29.2408 16.1496 26.2228 18.1248L23.6172 15.1103Z"
              fill="#60B651"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M60.5711 67.4037L63.4078 70.6977C59.2592 73.7983 54.3882 76.0404 48.9594 77.1161C43.8684 78.125 38.803 78.0019 34.019 76.8967L35.376 72.7473C39.4656 73.6395 43.7687 73.7128 48.1118 72.8522C52.7685 71.9294 56.9781 70.0187 60.5711 67.4037ZM7.55187 51.8698L11.8226 51.0235C14.5686 60.1694 21.2009 67.2929 29.5415 70.8983L28.1798 75.0242C18.4168 70.9495 10.6139 62.6056 7.55187 51.8698ZM77.5956 37.99C78.8341 48.7617 75.0603 59.1737 67.9915 66.6339L65.1261 63.3211C71.0887 56.8564 74.2473 48.018 73.3008 38.841L77.5956 37.99ZM56.252 9.21771C65.7496 13.345 73.3167 21.511 76.3743 31.9723L72.0794 32.8233C69.3861 23.9424 62.9367 16.9829 54.8952 13.3683L56.252 9.21771ZM16.8132 16.5829L19.6496 19.8758C13.2384 26.3543 9.73729 35.487 10.6495 44.9962L6.37884 45.8425C5.17465 34.7385 9.26687 24.0376 16.8132 16.5829ZM21.5271 12.6682C25.4725 9.9333 30.0153 7.93207 35.0098 6.94236C40.2939 5.89528 45.5183 6.06212 50.4468 7.26387L49.0899 11.4133C44.8557 10.4245 40.3935 10.3075 35.8574 11.2063C31.6109 12.0478 27.7489 13.6895 24.3686 15.9868L21.5271 12.6682Z"
              fill="#42A34B"
            />
            <path
              d="M30.9932 46.3219L32.1269 49.0592H35.6114L29.4468 34.9707H26.0861L19.8184 49.0592H23.1788L24.3129 46.3219H30.9932ZM29.9417 43.7659H25.3849L27.6736 38.2915L29.9417 43.7659Z"
              fill="black"
            />
            <path
              d="M43.4457 34.87C39.0335 34.87 35.6934 37.9091 35.6934 42.0148C35.6934 46.1007 39.0335 49.2 43.4457 49.2C47.8579 49.2 51.1981 46.0803 51.1981 42.0148C51.1981 37.9292 47.8579 34.87 43.4457 34.87ZM43.4869 37.6475C45.8992 37.6475 47.8579 39.5394 47.8579 42.0148C47.8579 44.4905 45.8992 46.4226 43.4869 46.4226C41.0745 46.4226 39.0335 44.4905 39.0335 42.0148C39.0335 39.5394 41.0539 37.6475 43.4869 37.6475Z"
              fill="black"
            />
            <path
              d="M58.6214 34.8298C55.2813 34.8298 53.034 36.4398 53.034 38.9958C53.034 43.9873 60.7244 42.4376 60.7244 45.0943C60.7244 45.9598 59.9203 46.4427 58.58 46.4427C57.0545 46.4427 54.9513 45.6176 53.4669 44.3295L52.168 46.9257C53.7969 48.2743 56.1679 49.1599 58.5388 49.1599C61.7347 49.1599 64.1882 47.6705 64.1882 44.9131C64.2088 39.8412 56.5184 41.2904 56.5184 38.694C56.5184 37.9292 57.2605 37.5468 58.3534 37.5468C59.508 37.5468 61.3224 38.1105 62.8479 38.9958L64.1057 36.3594C62.6624 35.4334 60.6418 34.8298 58.6214 34.8298Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="second">
          <div className="subSecond">
            <a href="#" className="links ">
              Products
            </a>
          </div>
          <div className="subSecond">
            <a href="#" className="links">
              Solution
            </a>
          </div>
          <div >
            <Button className="green1" text='Request Demo' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
