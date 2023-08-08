interface ISvgComponent {
  fillColor?: string;
  customClass?: string;
  width?: number;
  height?: number;
  handleClick?: (e: React.MouseEvent<Element>) => any;
  mouseEnter?: (e: React.MouseEvent<Element>) => any;
  mouseLeave?: (e: React.MouseEvent<Element>) => any;
  iconRef?: any;
  style?: any;
}

export const EmailIcon: React.FunctionComponent<ISvgComponent> = ({
  customClass,
  width,
  height,
  fillColor,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customClass}
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 1H19C20.1 1 21 1.9 21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3C1 1.9 1.9 1 3 1Z"
        stroke={fillColor ? fillColor : "#181818"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 3L11 10L1 3"
        stroke="#181818"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const PasswordIcon: React.FunctionComponent<ISvgComponent> = ({
  customClass,
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={customClass}
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
        stroke="#181818"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const NotifyIcon: React.FunctionComponent<ISvgComponent> = ({
  fillColor,
  customClass,
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20px"
      fill={fillColor}
      className={customClass}
    >
      <g>
        <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z" />
      </g>
    </svg>
  );
};
export const DatabaseIcon: React.FunctionComponent<ISvgComponent> = ({
  fillColor,
  customClass,
}) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 225.8 283.5"
      width="14px"
      fill={fillColor}
      className={customClass}
    >
      <path
        className="st0"
        d="M225.5,203.5V229c0,29.6-51.7,54.5-112.8,54.5S0,258.6,0,229v-25.5c10.1,10.4,24.9,19.2,43.1,25.5
		c19.8,6.9,43.5,11,69.3,11s49.8-4.1,69.3-11C200.3,222.7,215.4,213.9,225.5,203.5L225.5,203.5z M182,170.7
		c-19.8,6.9-43.5,11-69.3,11s-49.8-4.1-69.3-11c-18.3-6.3-33.1-15.1-43.1-25.5v25.5c0,29.6,51.7,54.5,112.8,54.5
		s112.8-24.9,112.8-54.5v-25.5C215.4,155.6,200.3,164.4,182,170.7L182,170.7z M182,112.8c-19.8,6.9-43.5,11-69.3,11
		s-49.8-4.1-69.3-11c-18.3-6.3-33.1-15.1-43.1-25.5v25.5c0,29.6,51.7,54.5,112.8,54.5s112.8-24.9,112.8-54.5V87.2
		C215.4,97.6,200.3,106.5,182,112.8L182,112.8z M112.8,0C51.7,0,0,24.9,0,54.5S51.7,109,112.8,109s112.8-24.9,112.8-54.5
		C225.5,24.9,173.9,0,112.8,0z"
      />
    </svg>
  );
};

export const TelephoneIcon: React.FunctionComponent<ISvgComponent> = ({
  fillColor,
  customClass,
}) => {
  return (
    <svg
      id="Layer_1"
      enableBackground="new 0 0 67 67"
      viewBox="0 0 67 67"
      height="19"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
      fill={fillColor}
      className={customClass}
    >
      <g>
        <path d="m60.4399414 11.4499512h-29.7900391v41.1501465c0 3.3398438-2.7099609 6.0498047-6.0498047 6.0498047h-13.9702148c-3.3398438 0-6.0498047-2.7099609-6.0498047-6.0498047v-40.7402344c-1.8100586.7700195-3.0800781 2.5700683-3.0800781 4.6601562v40.1401367c0 2.7998047 2.2700195 5.0698242 5.0700684 5.0698242h53.869873c2.7900391 0 5.0600586-2.2700195 5.0600586-5.0698242v-40.1401367c0-2.8000488-2.2700195-5.0700683-5.0600586-5.0700683zm-23.659668 43.290039c-1.4602051 0-2.6303711-1.1799316-2.6303711-2.6398926s1.170166-2.630127 2.6303711-2.630127c1.449707 0 2.6396484 1.170166 2.6396484 2.630127s-1.1899413 2.6398926-2.6396484 2.6398926zm0-9.3100586c-1.4602051 0-2.6303711-1.1799316-2.6303711-2.6398926 0-1.4499512 1.170166-2.6298828 2.6303711-2.6298828 1.449707 0 2.6396484 1.1799316 2.6396484 2.6298828.0000001 1.459961-1.1899413 2.6398926-2.6396484 2.6398926zm0-9.3098144c-1.4602051 0-2.6303711-1.1801758-2.6303711-2.6401367 0-1.4499512 1.170166-2.6298828 2.6303711-2.6298828 1.449707 0 2.6396484 1.1799316 2.6396484 2.6298828.0000001 1.4599609-1.1899413 2.6401367-2.6396484 2.6401367zm10 18.619873c-1.4602051 0-2.6303711-1.1799316-2.6303711-2.6398926s1.170166-2.630127 2.6303711-2.630127c1.449707 0 2.6396484 1.170166 2.6396484 2.630127s-1.1899413 2.6398926-2.6396484 2.6398926zm0-9.3100586c-1.4602051 0-2.6303711-1.1799316-2.6303711-2.6398926 0-1.4499512 1.170166-2.6298828 2.6303711-2.6298828 1.449707 0 2.6396484 1.1799316 2.6396484 2.6298828.0000001 1.459961-1.1899413 2.6398926-2.6396484 2.6398926zm0-9.3098144c-1.4602051 0-2.6303711-1.1801758-2.6303711-2.6401367 0-1.4499512 1.170166-2.6298828 2.6303711-2.6298828 1.449707 0 2.6396484 1.1799316 2.6396484 2.6298828.0000001 1.4599609-1.1899413 2.6401367-2.6396484 2.6401367zm10 18.619873c-1.4602051 0-2.6303711-1.1799316-2.6303711-2.6398926s1.170166-2.630127 2.6303711-2.630127c1.449707 0 2.6396484 1.170166 2.6396484 2.630127s-1.1899413 2.6398926-2.6396484 2.6398926zm0-9.3100586c-1.4602051 0-2.6303711-1.1799316-2.6303711-2.6398926 0-1.4499512 1.170166-2.6298828 2.6303711-2.6298828 1.449707 0 2.6396484 1.1799316 2.6396484 2.6298828.0000001 1.459961-1.1899413 2.6398926-2.6396484 2.6398926zm0-9.3098144c-1.4602051 0-2.6303711-1.1801758-2.6303711-2.6401367 0-1.4499512 1.170166-2.6298828 2.6303711-2.6298828 1.449707 0 2.6396484 1.1799316 2.6396484 2.6298828.0000001 1.4599609-1.1899413 2.6401367-2.6396484 2.6401367zm2.6396485-9.3100586h-25.2700196v-9.2800293h25.2700195v9.2800293z" />
        <path d="m10.6298828 5.2700195c-2.2299805 0-4.0498047 1.8200684-4.0498047 4.0500488v43.2800293c0 2.2299805 1.8198242 4.0498047 4.0498047 4.0498047h13.9702148c2.2299805 0 4.0498047-1.8198242 4.0498047-4.0498047v-43.2800292c0-2.2299805-1.8198242-4.0500488-4.0498047-4.0500488h-13.9702148z" />
      </g>
    </svg>
  );
};