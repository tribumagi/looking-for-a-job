export const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="16" r="16" fill="#D8D8D8" fillOpacity="0.01" />
      <mask
        id="mask0_0_92"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="0"
        width="32"
        height="32"
      >
        <circle cx="20" cy="16" r="16" fill="white" />
      </mask>
      <g mask="url(#mask0_0_92)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M126.573 56.5956C131.177 56.5916 135.78 56.5876 140.384 56.5876V50.4006H124.469C121.06 50.4006 117.593 50.5162 114.106 50.6325C106.179 50.8969 98.1483 51.1648 90.463 50.0856C81.086 48.7686 72.157 43.4546 64.326 37.7766C55.4659 31.3524 47.7064 23.423 39.9415 15.4881L39.9411 15.4878L39.9409 15.4876C34.391 9.81617 28.8383 4.14194 22.879 -0.987443C19.311 -4.06244 15.636 -7.02944 11.75 -9.57644L11.5031 -9.7385C7.47429 -12.3841 0.527832 -16.9456 -2.903 -11.3124C-5.5739 -6.92728 -5.53009 -0.458897 -5.49164 5.22092C-5.48177 6.67784 -5.47226 8.08287 -5.509 9.38756C-5.91901 23.9106 -7.244 44.6216 -22.224 49.2436C-25.251 50.0966 -28.331 50.3876 -31.446 50.3996C-43.764 50.4356 -56.082 50.4196 -68.4 50.4006C-69.782 50.3966 -71.164 50.3566 -72.543 50.2406C-73.97 50.1206 -75.39 49.9116 -76.796 49.6136C-85.1451 47.8453 -92.7778 43.2355 -100.395 38.6353C-111.21 32.1034 -121.993 25.5908 -134.75 27.2596C-143.37 28.3873 -150.427 33.4869 -157.489 38.5902C-164.435 43.6098 -171.386 48.633 -179.834 49.8836C-183.028 50.2976 -186.23 50.3976 -189.442 50.4016H-215V56.5896C-212.061 56.5896 -209.121 56.5934 -206.181 56.5972H-206.181H-206.181C-200.217 56.6049 -194.253 56.6127 -188.289 56.5886C-181.941 56.5626 -175.657 56.1566 -169.853 52.9656C-165.722 50.6945 -162.073 47.4646 -158.49 44.2626L-158.175 43.9812C-151.561 38.0685 -144.727 31.9583 -136.206 30.1796C-122.456 27.309 -111.033 35.1383 -99.5611 43.0012C-90.3119 49.3406 -81.0309 55.7018 -70.473 56.4946C-69.097 56.5726 -67.721 56.5886 -66.344 56.5886C-62.1159 56.5886 -57.884 56.6216 -53.651 56.6546H-53.6502H-53.6494H-53.6492H-53.649C-44.6653 56.7248 -35.6761 56.7949 -26.705 56.5496C-21.69 56.3496 -16.638 55.3716 -12.644 51.7046C-8.069 47.5046 -5.89799 40.9256 -4.51199 34.6556C-3.15277 28.5041 -2.93701 22.2489 -2.7215 16.0003C-2.52951 10.4342 -2.33771 4.87325 -1.338 -0.604444C0.528 -10.9094 7.92599 -8.40344 14.196 -4.33144C20.473 -0.254444 26.155 4.98256 31.593 10.3436C34.305 13.0156 36.951 15.7726 39.582 18.5456C50.803 30.3716 62.362 41.9376 76.176 49.8276C83.067 53.7596 90.069 56.5546 97.86 56.5846C107.431 56.6122 117.002 56.6039 126.573 56.5956ZM105.61 73.7126H140.385H140.386V67.1826H103.098C95.032 67.1816 88.077 64.8636 80.988 60.6156C76.352 57.8356 71.923 54.6196 67.626 51.2256C60.956 45.9556 54.69 40.0816 48.622 33.9656C45.7961 31.1173 43.0427 28.107 40.279 25.0854L40.2783 25.0847L40.2775 25.0837C33.2736 17.4263 26.2042 9.69721 17.724 4.35256C14.968 2.61356 11.014 0.256557 7.83601 1.84456C4.32626 3.59894 3.80412 9.35406 3.4583 13.1657L3.427 13.5096C3.19789 15.9836 3.07309 18.4669 2.94829 20.9501V20.9502V20.9503C2.83994 23.1061 2.73158 25.2619 2.55501 27.4116C1.34801 41.9146 -0.658005 63.2846 -16.105 66.5966C-22.4225 67.951 -29.2452 67.6722 -35.8949 67.4004C-38.5731 67.2909 -41.2232 67.1826 -43.801 67.1826C-46.4989 67.1826 -49.2623 67.2884 -52.0507 67.3952C-58.9436 67.6593 -65.9897 67.9292 -72.579 66.6206C-73.282 66.4816 -73.99 66.3126 -74.704 66.1136C-83.0396 63.7882 -90.1855 57.8467 -97.1177 52.0829C-98.783 50.6984 -100.436 49.324 -102.09 48.0126C-111.109 40.8616 -121.969 32.6096 -133.575 34.1246C-143.206 35.3816 -150.245 43.4896 -156.602 50.9866C-156.847 51.2758 -157.093 51.5657 -157.338 51.8558C-160.216 55.2584 -163.124 58.6949 -166.496 61.4786C-172.033 66.0486 -177.983 67.1676 -184.699 67.1826H-214.999V73.7126H-182.202C-171.239 73.7096 -164.692 67.7876 -158.025 58.7156C-157.279 57.7003 -156.537 56.6677 -155.793 55.6307C-151.524 49.6873 -147.152 43.5991 -141.2 39.8026C-133.338 34.7866 -124.684 36.4906 -116.94 40.9396C-110.486 44.6475 -104.801 49.8879 -99.1211 55.1236C-92.1693 61.5314 -85.2254 67.932 -76.89 71.5076C-70.0392 74.4449 -62.2346 74.1532 -54.7571 73.8736C-52.5892 73.7926 -50.4487 73.7126 -48.367 73.7126C-45.0282 73.7126 -41.6807 73.7575 -38.3305 73.8024C-31.1599 73.8987 -23.9763 73.9951 -16.837 73.6516C-13.23 73.4046 -9.703 72.5316 -6.65799 70.2486C3.54382 62.5792 4.68698 45.5146 5.59587 31.9471C5.72488 30.0212 5.84918 28.1657 5.994 26.4176C6.06746 25.5123 6.1114 24.4515 6.15904 23.3014C6.39351 17.6407 6.71754 9.81825 11.091 7.74456C15.8558 5.48545 22.3561 11.2198 26.1847 14.5972C26.4082 14.7944 26.6226 14.9835 26.827 15.1626C31.6474 19.3839 36.0455 24.1529 40.442 28.9202L40.4426 28.921L40.4429 28.9212C42.5701 31.2278 44.6969 33.534 46.871 35.7776C55.002 44.1656 63.412 52.2656 72.502 59.3206C77.432 63.1466 82.469 66.9216 87.959 69.6746C88.548 69.9696 89.133 70.2376 89.703 70.4906C91.301 71.1966 92.931 71.8216 94.592 72.3126C98.203 73.3746 101.887 73.6996 105.61 73.7126ZM140.384 90.8356C137.098 90.8356 133.813 90.8359 130.527 90.8362H130.471C123.918 90.8369 117.364 90.8376 110.811 90.8356C106.284 90.7886 101.866 90.0316 97.576 88.3866C86.7912 84.2473 77.7554 75.7075 69.1096 67.5361L69.092 67.5195C68.6055 67.0597 68.1203 66.6011 67.636 66.1446C60.5325 59.4474 53.7285 52.3821 46.922 45.314C45.3042 43.6341 43.6862 41.9539 42.064 40.2786C41.3148 39.5037 40.5682 38.7219 39.8207 37.939L39.8174 37.9356L39.8173 37.9356C36.3655 34.3207 32.8938 30.685 29.052 27.6206C26.478 25.5666 22.965 22.8156 19.658 23.5766C15.8341 24.4566 14.8591 29.9429 14.2161 33.561L14.214 33.5726C13.4556 37.8383 13.1352 42.1809 12.815 46.5203L12.8149 46.5206L12.8149 46.5209C12.6385 48.9106 12.4623 51.2993 12.213 53.6736L12.1827 53.961C11.4576 60.8383 10.7178 67.8561 8.69101 74.4226C6.27 82.2036 1.864 88.4936 -5.573 90.2396C-7.412 90.6696 -9.29199 90.8176 -11.167 90.8306C-17.7822 90.8778 -24.3982 90.8635 -31.014 90.8493H-31.0142C-34.1992 90.8424 -37.3842 90.8356 -40.569 90.8356C-43.362 90.8356 -46.2054 90.9346 -49.0666 91.0343H-49.0667C-55.5606 91.2605 -62.1458 91.4899 -68.439 90.5716C-73.752 89.7876 -78.469 86.7836 -82.714 83.2406C-88.0945 78.7503 -92.8453 73.3991 -97.5835 68.062L-97.5838 68.0617C-99.3066 66.1211 -101.028 64.1823 -102.777 62.2876L-103.3 61.7209C-110.135 54.3096 -118.546 45.1888 -128.288 43.9126C-139.619 42.4286 -146.331 55.0136 -151.125 64.5556C-151.73 65.7591 -152.34 67.0244 -152.965 68.3219C-157.278 77.2678 -162.33 87.7459 -171.483 90.1066C-175.662 91.1842 -180.142 91.0505 -184.515 90.9201H-184.515C-185.937 90.8776 -187.347 90.8356 -188.732 90.8356H-214.999V83.9686C-210.898 83.9686 -206.791 84.0164 -202.681 84.0643H-202.681H-202.68C-194.104 84.1642 -185.519 84.2642 -176.969 83.9296C-176.072 83.8936 -175.169 83.8096 -174.262 83.6796C-164.102 81.6299 -158.936 72.1138 -153.731 62.5245C-149.187 54.1526 -144.612 45.725 -136.657 42.1616C-122.839 35.9723 -108.701 51.1838 -98.2528 62.425L-98.2525 62.4253C-96.5278 64.281 -94.9036 66.0284 -93.398 67.5536C-85.782 75.2676 -77.104 83.6456 -66.347 83.9466C-54.8755 84.2665 -43.3765 84.1663 -31.8851 84.0662H-31.8849L-31.8821 84.0662C-26.2759 84.0174 -20.6715 83.9686 -15.073 83.9686H-14.9694C-14.3521 83.9686 -13.7368 83.9687 -13.126 83.9526C3.147 83.5076 7.38399 66.0446 9.084 50.5816C9.4296 47.4398 9.6754 44.2862 9.92123 41.1324L9.92133 41.1315C10.1677 37.9706 10.4141 34.8094 10.761 31.6596C10.7974 31.3296 10.8331 30.9948 10.8693 30.6562C11.2566 27.0278 11.6902 22.9658 13.428 19.8826C15.743 15.7756 19.715 16.8106 23.041 18.7506C28.7813 22.0998 33.6404 27.3542 38.3232 32.418L38.3239 32.4187C39.0755 33.2315 39.8226 34.0393 40.568 34.8336C46.238 40.8746 51.95 46.8826 57.855 52.6316C59.668 54.3956 61.486 56.1536 63.328 57.8786L64.1179 58.6173L64.1181 58.6174C73.0143 66.9386 82.3664 75.6862 93.139 80.5986C96.455 82.1096 99.895 83.1816 103.456 83.6376C111.865 84.7125 120.554 84.4524 129.164 84.1946C132.929 84.0818 136.679 83.9696 140.384 83.9696V90.8356ZM131.957 107.972C134.766 107.966 137.575 107.96 140.383 107.96V100.748C137.328 100.748 134.272 100.759 131.216 100.77C124.815 100.793 118.414 100.816 112.015 100.738C109.457 100.652 106.925 100.259 104.426 99.6476C101.282 98.7906 98.274 97.5316 95.365 95.9416C86.0337 90.8375 78.1505 82.8891 70.4695 75.1447C70.2318 74.9051 69.9943 74.6657 69.757 74.4266C64.6355 69.2658 59.5847 64.0197 54.5336 58.7733C51.8693 56.006 49.2049 53.2386 46.53 50.4836C46.2849 50.2312 46.0399 49.9786 45.7949 49.7261C43.5886 47.4522 41.3815 45.1776 39.108 42.9896C38.6426 42.5415 38.1193 42.0144 37.5495 41.4404C33.6627 37.5252 27.608 31.4262 22.943 33.3266C18.3052 35.2155 17.6673 44.0188 17.2407 49.9054C17.1683 50.9058 17.1019 51.8219 17.023 52.6056C16.8045 54.7271 16.6216 56.8531 16.4387 58.9792C16.2884 60.7264 16.1381 62.4737 15.968 64.2186C15.612 67.8596 15.237 71.5026 14.652 75.1076C12.46 88.6206 7.25999 100.182 -6.10201 100.707C-6.754 100.733 -28.053 100.748 -38.044 100.748C-40.948 100.748 -43.8854 100.83 -46.8342 100.914C-53.3732 101.098 -59.9683 101.284 -66.38 100.572C-76.452 99.4336 -84.234 90.7336 -90.937 82.9316C-93.3258 80.1511 -95.6438 77.2936 -97.9617 74.4362C-101.621 69.9252 -105.28 65.4143 -109.218 61.2066C-114.894 55.1416 -122.803 47.0886 -131.246 48.4306C-140.193 49.8527 -144.917 61.4355 -148.352 69.8592C-148.537 70.3146 -148.719 70.7607 -148.898 71.1956C-149.373 72.3524 -149.846 73.541 -150.325 74.746C-153.674 83.1657 -157.343 92.3911 -164.453 97.2506C-164.916 97.5656 -165.38 97.8566 -165.846 98.1226C-166.312 98.3896 -166.779 98.6326 -167.247 98.8526C-170.338 100.307 -173.642 100.707 -176.966 100.747C-185.536 100.763 -194.107 100.758 -202.678 100.753C-206.785 100.751 -210.891 100.749 -214.998 100.749V107.958C-210.772 107.958 -206.547 107.959 -202.321 107.96C-193.869 107.962 -185.417 107.964 -176.966 107.958H-176.912C-176.031 107.958 -175.138 107.958 -174.235 107.911C-173.316 107.863 -172.39 107.747 -171.455 107.598C-170.504 107.44 -169.565 107.215 -168.639 106.922C-158.87 103.863 -153.638 93.8126 -149.899 83.9506C-149.148 81.9704 -148.411 79.682 -147.63 77.2561C-144.497 67.5275 -140.652 55.588 -132.343 52.4536C-123.403 49.0806 -114.364 59.4016 -108.705 65.9206C-104.908 70.2949 -101.363 74.9268 -97.818 79.5589C-94.7952 83.5084 -91.7722 87.4581 -88.593 91.2486C-82.016 99.0896 -74.345 107.026 -64.308 107.86C-57.8144 108.385 -51.213 108.239 -44.6437 108.093C-41.5952 108.026 -38.5537 107.959 -35.533 107.959H-6.086C-2.91 107.958 0.270996 107.831 3.343 106.84C16.4548 102.083 17.9082 82.6782 18.9733 68.4588C19.0994 66.7754 19.2201 65.1647 19.354 63.6596C19.428 62.8222 19.4972 61.9743 19.567 61.1196C19.9929 55.8998 20.4393 50.4294 22.127 45.6036C24.995 37.4046 31.233 40.9556 36.124 44.8976C45.3306 52.3135 53.4264 61.3737 61.5228 70.4345C71.4895 81.5885 81.4572 92.7435 93.499 100.834C99.897 105.13 106.761 107.89 114.284 107.954C120.174 108 126.066 107.986 131.957 107.972Z"
          fill="#5658DD"
        />
      </g>
    </svg>
  );
};
