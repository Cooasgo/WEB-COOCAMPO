import { chakra, HTMLChakraProps } from '@chakra-ui/react';

interface Props {
  size: string;
  props?: HTMLChakraProps<'svg'>;
}

export const Logo = ({ props, size }: Props) => (
  <chakra.svg
    color="accent"
    width="114"
    height={size}
    viewBox="0 0 114 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.362 33.5472C12.2873 33.8133 11.9812 34.3934 11.354 34.585L11.0553 34.4254L10.8686 34.1459L10.7193 33.5472C9.7636 24.3499 25.3289 15.1579 33.2309 11.7116C56.3399 3.56822 76.1262 1.37269 87.886 3.44846C97.2939 5.10908 101.288 10.1814 102.11 12.51L102.259 13.4281L102.371 14.4261V14.9051L102.259 15.2245L102.11 15.3841L101.96 15.464H101.699H101.512L101.438 15.3841L101.326 15.2245L101.176 14.9051C93.4412 -2.40361 51.188 8.35847 31.0283 15.9031C14.1539 24.2062 12.7726 29.9146 12.586 31.3516C12.4366 32.5013 12.3744 33.2943 12.362 33.5472Z"
      fill="#368FF9"
    />
    <ellipse
      cx="53.4969"
      cy="25.7076"
      rx="24.3783"
      ry="25.7076"
      fill="#FFD80B"
    />
    <path
      d="M29.6419 24.55C36.3951 24.4731 42.5554 24.1704 48.2442 28.0919C53.933 32.0133 60.7596 36.2039 64.0994 47.7761L64.212 48.0904L63.3016 48.6116L61.6324 49.3332L60.3427 49.7743L59.3184 50.0549L58.5977 50.2153L57.9907 50.3355L56.2836 50.6563L54.5766 50.7765H52.6419H51.8453C50.8176 50.7381 47.2312 50.2213 44.0602 48.9295C30.1845 42.0767 29.5685 30.099 29.6419 24.55Z"
      fill="#30AB26"
    />
    <path
      d="M29.6419 24.55C36.3951 24.4731 42.5554 24.1704 48.2442 28.0919C53.933 32.0133 60.7596 36.2039 64.0994 47.7761L64.212 48.0904L63.3016 48.6116L61.6324 49.3332L60.3427 49.7743L59.3184 50.0549L58.5977 50.2153L57.9907 50.3355M29.6419 24.55C48.9325 27.1643 56.3758 42.8771 57.9907 50.3355M29.6419 24.55C36.5786 27.3309 50.9389 36.5055 52.6419 50.7765M29.6419 24.55C40.5351 31.5317 43.6075 43.7137 44.0602 48.9295M29.6419 24.55C29.5685 30.099 30.1845 42.0767 44.0602 48.9295M57.9907 50.3355L56.2836 50.6563L54.5766 50.7765H52.6419M52.6419 50.7765H51.8453C50.8176 50.7381 47.2312 50.2213 44.0602 48.9295"
      stroke="#177915"
    />
    <path
      d="M49.5029 28.0834C62.5946 21.4344 74.1712 23.4823 77.4278 25.5971C77.4278 28.9488 76.6043 41.2386 64.5509 47.982L63.3409 43.547C62.5013 41.2774 60.918 38.7654 60.2312 37.7931L56.3442 33.4377C55.1003 31.9673 51.2651 29.2555 49.5029 28.0834Z"
      fill="#30AB26"
    />
    <path
      d="M77.4278 25.5971C74.1712 23.4823 62.5946 21.4344 49.5029 28.0834C51.2651 29.2555 55.1003 31.9673 56.3442 33.4377M77.4278 25.5971C67.1348 25.1496 58.9615 31.0403 56.3442 33.4377M77.4278 25.5971C73.6097 26.2754 65.0823 31.8474 60.2312 37.7931M77.4278 25.5971C67.6013 32.9813 63.8203 41.043 63.3409 43.547M77.4278 25.5971C77.4278 28.9488 76.6043 41.2386 64.5509 47.982L63.3409 43.547M56.3442 33.4377L60.2312 37.7931M60.2312 37.7931C60.918 38.7654 62.5013 41.2774 63.3409 43.547"
      stroke="#177915"
    />
    <path
      d="M110.213 13.4926C110.713 16.3422 107.934 21.8088 105.116 25.0517C102.298 28.2946 97.93 31.5469 92.3149 34.5831C86.6998 37.6193 79.9722 40.3666 72.5988 42.6345C65.2254 44.9023 57.3829 46.6363 49.6152 47.7163C41.8476 48.7962 34.3409 49.1962 27.616 48.8885C20.891 48.5808 15.1088 47.5728 10.6706 45.9343C6.23244 44.2959 3.24448 42.0662 1.91406 39.4001C0.790805 36.5256 0.641525 34.0108 1.87348 30.1786L2.0602 29.8991L2.32155 29.7394L2.69488 29.6197L3.03088 29.5798L3.4042 29.6197L3.6655 29.7594L3.7402 29.8592L3.7402 30.1386L3.6282 30.8173L3.5162 31.456L3.4042 32.2543L3.25487 33.6513L3.24795 34.1703L3.25487 34.6495L3.25487 34.889C3.25487 34.889 3.06821 35.7672 4.63618 38.6812C5.95568 41.1335 11.0753 43.2354 15.2386 44.5094C18.8599 45.6175 24.8786 46.0042 30.8159 46.2759C36.7531 46.5476 43.3806 46.1944 50.2384 45.2409C57.0963 44.2875 64.0203 42.7565 70.53 40.7543C77.0398 38.7521 82.9794 36.3266 87.9368 33.646C92.8942 30.9654 97.8186 28.3823 100.357 25.9073C105.248 22.115 107.898 17.5643 108.645 15.4086L109.093 13.8918L109.13 13.6523L109.28 13.1333L109.504 13.0535L109.765 13.0136L109.952 13.0535L110.101 13.1333L110.213 13.4926Z"
      fill="#368FF9"
    />
    <path
      d="M41.9621 21.2371C41.7531 22.1313 42.5221 22.2484 42.9328 22.1952H47.226V26.8657L49.242 28.3027V22.1952L54.2446 22.1952C54.7224 22.1952 54.705 21.5565 54.5059 21.2371C53.9588 19.9797 53.2184 18.2882 52.4526 16.5546C50.8845 13.005 49.2098 9.27899 48.8687 8.74258C48.3609 7.94421 47.8856 8.40993 47.7114 8.74258C45.882 12.5349 42.1712 20.3429 41.9621 21.2371Z"
      fill="#177915"
      fillOpacity="0.95"
    />
    <path
      d="M52.3757 21.2386C52.1666 22.1328 52.9357 22.2499 53.3463 22.1966H57.6396V25.3086L59.6556 24.7896V22.1966H64.6228C65.1007 22.1966 65.1186 21.5579 64.9195 21.2386C64.3723 19.9812 63.632 18.2897 62.8662 16.5561C61.2981 13.0064 59.6234 9.28046 59.2822 8.74405C58.7745 7.94567 58.2991 8.41139 58.1249 8.74405C56.2956 12.5363 52.5848 20.3444 52.3757 21.2386Z"
      fill="#177915"
    />
  </chakra.svg>
);
